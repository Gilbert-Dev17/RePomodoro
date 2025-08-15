import { create } from 'zustand';
import { useSettingsStore } from './useSettingsStore';

type TimerPhase = 'focus' | 'shortBreak' | 'longBreak';

// TODO: test REpomodoro mode for Errors

interface TimerState {
  timeLeft: number;             // seconds
  isRunning: boolean;
  phase: TimerPhase;
  intervalId: number | null;
  startTime: number | null;     // For classic countdown
  endTime: number | null;       // For classic countdown
  lastTick: number | null;      // For reverse stopwatch
  start: () => void;
  pause: () => void;
  reset: () => void;
  skip: () => void;
  setPhase: (phase: TimerPhase) => void;
  syncWithSettings: () => void;
}

export const useTimerStore = create<TimerState>((set, get) => {
  const getDuration = (phase: TimerPhase, s = useSettingsStore.getState()) => {
    const mins =
      phase === 'focus' ? s.Pomodoro :
      phase === 'shortBreak' ? s.shortBreak :
      s.longBreak;
    return mins * 60;
  };

  const s0 = useSettingsStore.getState();
  const initialTimeLeft =
    s0.mode === 'reverse' ? (s0.Repomodoro ?? 0) : getDuration('focus', s0);

  useSettingsStore.subscribe((s, prev) => {
    if (s.mode !== prev.mode) {
      const id = get().intervalId;
      if (id) clearInterval(id);
      set({
        phase: 'focus',
        timeLeft: s.mode === 'reverse' ? (s.Repomodoro ?? 0) : getDuration('focus', s),
        isRunning: false,
        intervalId: null,
        startTime: null,
        endTime: null,
        lastTick: null,
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
    timeLeft: initialTimeLeft,
    isRunning: false,
    phase: 'focus',
    intervalId: null,
    startTime: null,
    endTime: null,
    lastTick: null,

    start: () => {
      if (get().isRunning) return;
      const { mode } = useSettingsStore.getState();
      const now = Date.now();

      if (mode === 'classic') {
        const endTime = now + get().timeLeft * 1000;
        set({ startTime: now, endTime });
      } else {
        set({ startTime: get().startTime ?? now }); // Save start once
      }

      const id = window.setInterval(() => {
        const { mode, setRepomodro } = useSettingsStore.getState();
        const now = Date.now();

        set((state) => {
          if (mode === 'reverse') {
            const elapsed = Math.floor((now - (state.startTime ?? now)) / 1000);
            const next = elapsed;
            setRepomodro?.(next);
            return { timeLeft: next };
          } else if (state.endTime) {
            const remaining = Math.max(0, Math.floor((state.endTime - now) / 1000));
            if (remaining <= 0) {
              clearInterval(get().intervalId!);
              return { timeLeft: 0, isRunning: false, intervalId: null };
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
      });
      if (s.mode === 'reverse') s.resetRepomodro?.();
    },

    skip: () => {
      const id = get().intervalId;
      if (id) clearInterval(id);
      const next = get().phase === 'focus' ? 'shortBreak' : 'focus';
      set({
        phase: next,
        timeLeft: getDuration(next),
        isRunning: false,
        intervalId: null,
        startTime: null,
        endTime: null,
        lastTick: null,
      });
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

    syncWithSettings: () => {
      if (get().isRunning) return;
      const s = useSettingsStore.getState();
      set({
        timeLeft: s.mode === 'reverse' ? (s.Repomodoro ?? 0) : getDuration(get().phase, s),
      });
    },
  };
});
