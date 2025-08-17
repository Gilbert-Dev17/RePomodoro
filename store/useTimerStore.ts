import { create } from 'zustand';
import { useSettingsStore } from './useSettingsStore';
import { useSoundStore } from '@/sounds-libary/soundManager';

type TimerPhase = 'focus' | 'shortBreak' | 'longBreak';

interface TimerState {
  timeLeft: number;
  isRunning: boolean;
  phase: TimerPhase;
  intervalId: number | null;
  startTime: number | null;
  endTime: number | null;
  lastTick: number | null;
  completedFocus: number;
  reverseBreakMinutes: number | null;

  start: () => void;
  pause: () => void;
  reset: () => void;
  skip: () => void;
  setPhase: (phase: TimerPhase) => void;
  switchPhase: (nextPhase?: TimerPhase) => void;
  syncWithSettings: () => void;
}

export const useTimerStore = create<TimerState>((set, get) => {
  const { playsound } = useSoundStore.getState();

  const getDuration = (phase: TimerPhase, s = useSettingsStore.getState()) => {
    const mins =
      phase === 'focus' ? s.Pomodoro :
      phase === 'shortBreak' ? s.shortBreak :
      s.longBreak;
    return mins * 60;
  };

  // Default safe values
  const initialPhase: TimerPhase = 'focus';

  // Sync after hydration
  if ((useSettingsStore as any).persist) {
    (useSettingsStore as any).persist.onFinishHydration(() => {
      get().syncWithSettings();
    });
  }

  // React to settings changes
  useSettingsStore.subscribe((s, prev) => {
    if (s.mode !== prev.mode) {
      const id = get().intervalId;
      if (id) clearInterval(id);

      set({
        phase: 'focus',
        timeLeft: s.mode === 'reverse'
          ? (s.Repomodoro ?? 0)
          : getDuration('focus', s),
        isRunning: false,
        intervalId: null,
        startTime: null,
        endTime: null,
        lastTick: null,
        reverseBreakMinutes: 0,
        completedFocus: 0,
      });
      return;
    }

    if (!get().isRunning && s.mode === 'classic' &&
      (s.Pomodoro !== prev.Pomodoro ||
        s.shortBreak !== prev.shortBreak ||
        s.longBreak !== prev.longBreak)) {
      set({ timeLeft: getDuration(get().phase, s) });
    }

    if (!get().isRunning && s.mode === 'reverse' &&
      s.Repomodoro !== prev.Repomodoro) {
      set({ timeLeft: s.Repomodoro ?? 0 });
    }
  });

  return {
    timeLeft: 0,
    isRunning: false,
    phase: initialPhase,
    intervalId: null,
    startTime: null,
    endTime: null,
    lastTick: null,
    reverseBreakMinutes: null,
    completedFocus: 0,

    start: () => {
      if (get().isRunning) return;
      const { mode } = useSettingsStore.getState();
      const now = Date.now();

      if (mode === 'classic') {
        const endTime = now + get().timeLeft * 1000;
        set({ startTime: now, endTime });
      } else {
        set({ startTime: get().startTime ?? now });
      }

      const id = window.setInterval(() => {
        const { mode, setRepomodro } = useSettingsStore.getState();
        const now = Date.now();

        // inside the setInterval callback
        set((state) => {
          const { mode } = useSettingsStore.getState();
          const now = Date.now();

          // ✅ Reverse only acts like a stopwatch during FOCUS
          if (mode === 'reverse' && state.phase === 'focus') {
            const elapsed = Math.floor((now - (state.startTime ?? now)) / 1000);
            return { timeLeft: elapsed };
          }

          // ✅ All countdowns (classic + reverse short/long breaks) use endTime
          if (state.endTime) {
            const remaining = Math.max(0, Math.floor((state.endTime - now) / 1000));
            if (remaining <= 0) {
              clearInterval(get().intervalId!);
              useSoundStore.getState().playsound();
              get().switchPhase(); // will move to next phase
              return { intervalId: null };
            }
            return { timeLeft: remaining };
          }

          return {};
        });

      }, 500);

      set({ isRunning: true, intervalId: id });
    },

    pause: () => {
      const id = get().intervalId;
      if (id) clearInterval(id);
      set({ isRunning: false, intervalId: null, startTime: null, endTime: null, lastTick: null });
    },

    reset: () => {
      const id = get().intervalId;
      if (id) clearInterval(id);
      const s = useSettingsStore.getState();
      set({
        timeLeft: s.mode === 'reverse' ? 0 : getDuration(get().phase, s),
        isRunning: false,
        intervalId: null,
        startTime: null,
        endTime: null,
        lastTick: null,
        completedFocus: 0,
      });
      if (s.mode === 'reverse') s.resetRepomodro?.();
    },

    skip: () => {
      const id = get().intervalId;
      if (id) clearInterval(id);
      get().switchPhase(); // 🔑 Skip just calls switchPhase
    },

    setPhase: (phase) => {
      const id = get().intervalId;
      if (id) clearInterval(id);
      const s = useSettingsStore.getState();
      set({
        phase,
        timeLeft: s.mode === 'reverse'
          ? (phase === 'focus' ? (s.Repomodoro ?? 0) : 0)
          : getDuration(phase, s),
        isRunning: false,
        intervalId: null,
        startTime: null,
        endTime: null,
        lastTick: null,
      });
    },

    switchPhase: (nextPhase) => {
      const s = useSettingsStore.getState();
      const { phase, timeLeft, completedFocus } = get();
      const now = Date.now();

      // If an explicit phase was requested, honor it (classic paths still work)
      if (nextPhase) {
        const secs = s.mode === 'reverse'
          ? (nextPhase === 'focus' ? 0 : 0) // focus resets to 0 in reverse
          : (nextPhase === 'focus' ? s.Pomodoro : nextPhase === 'shortBreak' ? s.shortBreak : s.longBreak) * 60;

        set({
          phase: nextPhase,
          timeLeft: secs,
          startTime: s.mode === 'reverse' && nextPhase !== 'focus' ? now : (s.mode === 'classic' ? now : null),
          endTime: s.mode === 'reverse' && nextPhase !== 'focus' ? now + secs * 1000 : (s.mode === 'classic' ? now + secs * 1000 : null),
          isRunning: false,
          intervalId: null,
          lastTick: null,
        });
        if (s.AutoStart) get().start();
        return;
      }

      // Implicit phase advance
      if (phase === 'focus') {
        if (s.mode === 'reverse') {
          // timeLeft is elapsed seconds in reverse focus
          const elapsedSecs = timeLeft;
          const breakMinutes = Math.floor((Math.floor(elapsedSecs / 60)) / 3); // exactly like TimerDisplay
          const breakSecs = Math.max(0, breakMinutes * 60);

          set({
            reverseBreakMinutes: breakMinutes,         // ✅ remember it for UI
            phase: 'shortBreak',
            timeLeft: breakSecs,
            startTime: now,
            endTime: now + breakSecs * 1000,           // ✅ countdown for reverse break
            isRunning: false,
            intervalId: null,
            lastTick: null,
          });
          if (s.AutoStart) get().start();
          return;
        } else {
          // classic: increment focus count & choose short/long break
          const newCount = completedFocus + 1;
          const next = (newCount % s.BreakInterval === 0) ? 'longBreak' : 'shortBreak';
          set({ completedFocus: newCount });

          const secs = (next === 'shortBreak' ? s.shortBreak : s.longBreak) * 60;
          set({
            phase: next,
            timeLeft: secs,
            startTime: now,
            endTime: now + secs * 1000,
            isRunning: false,
            intervalId: null,
            lastTick: null,
          });
          if (s.AutoStart) get().start();
          return;
        }
      } else {
        // leaving a break → back to focus
        if (s.mode === 'reverse') {
          set({
            phase: 'focus',
            timeLeft: 0,             // ✅ reset stopwatch
            startTime: null,
            endTime: null,
            isRunning: false,
            intervalId: null,
            lastTick: null,
          });
          if (s.AutoStart) get().start();
          return;
        } else {
          // classic back to focus countdown
          const secs = s.Pomodoro * 60;
          set({
            phase: 'focus',
            timeLeft: secs,
            startTime: now,
            endTime: now + secs * 1000,
            isRunning: false,
            intervalId: null,
            lastTick: null,
          });
          if (s.AutoStart) get().start();
          return;
        }
      }
    },

    syncWithSettings: () => {
      if (get().isRunning) return;
      const s = useSettingsStore.getState();
      set({
        timeLeft: s.mode === 'reverse'
          ? (s.Repomodoro ?? 0)
          : getDuration(get().phase, s),
      });
    },
  };
});
