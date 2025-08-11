// store/useTimerStore.ts
import { create } from 'zustand';
import { useSettingsStore } from './useSettingsStore';

type TimerPhase = 'focus' | 'shortBreak' | 'longBreak';

interface TimerState {
  timeLeft: number;
  isRunning: boolean;
  phase: TimerPhase;
  intervalId: number | null;
  start: () => void;
  pause: () => void;
  reset: () => void;
  setPhase: (phase: TimerPhase) => void;
  syncWithSettings: () => void;
}

export const useTimerStore = create<TimerState>((set, get) => {
  const getDuration = (phase: TimerPhase) => {
    const s = useSettingsStore.getState();
    return (
      phase === 'focus'
        ? s.focusTime
        : phase === 'shortBreak'
        ? s.shortBreak
        : s.longBreak
    ) * 60;
  };

  return {
    timeLeft: getDuration('focus'),
    isRunning: false,
    phase: 'focus',
    intervalId: null,

    start: () => {
      if (get().isRunning) return;
      const id = window.setInterval(() => {
        set((state) => {
          if (state.timeLeft > 0) {
            return { timeLeft: state.timeLeft - 1 };
          } else {
            clearInterval(get().intervalId!);
            return { isRunning: false, intervalId: null };
          }
        });
      }, 1000);
      set({ isRunning: true, intervalId: id });
    },

    pause: () => {
      clearInterval(get().intervalId!);
      set({ isRunning: false, intervalId: null });
    },

    reset: () => {
      clearInterval(get().intervalId!);
      set({
        timeLeft: getDuration(get().phase),
        isRunning: false,
        intervalId: null,
      });
    },

    setPhase: (phase) => {
      clearInterval(get().intervalId!);
      set({
        phase,
        timeLeft: getDuration(phase),
        isRunning: false,
        intervalId: null,
      });
    },

    syncWithSettings: () => {
      if (!get().isRunning) {
        set({ timeLeft: getDuration(get().phase) });
      }
    },
  };
});
