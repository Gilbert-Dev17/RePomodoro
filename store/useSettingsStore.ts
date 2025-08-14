import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Mode = 'classic' | 'reverse';

interface SettingsState {
  Repomodoro: number;
  Pomodoro: number;
  shortBreak: number;
  longBreak: number;
  mode: Mode;
  AutoStart: boolean;
  BreakInterval: number;

  setPomodoro: (minutes: number) => void;
  setShortBreak: (minutes: number) => void;
  setLongBreak: (minutes: number) => void;
  setMode: (mode: Mode) => void;
  setAutoStart: (value: boolean) => void;
  setBreakInterval?: (interval: number) => void;

  setRepomodro: (value: number) => void;
  incrementRepomodro: () => void;
  resetRepomodro: () => void;

}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      Repomodoro: 0,
      Pomodoro: 30,
      shortBreak: 5,
      longBreak: 15,
      mode: 'reverse',
      AutoStart: true,
      BreakInterval: 5, // Optional for now

      setPomodoro: (minutes) => set({ Pomodoro: minutes }),
      setShortBreak: (minutes) => set({ shortBreak: minutes }),
      setLongBreak: (minutes) => set({ longBreak: minutes }),
      setMode: (mode) => set({ mode }),
      setAutoStart: (value) => set({ AutoStart: value }),
      setBreakInterval: (interval) => set({ BreakInterval: interval }),

      setRepomodro: (value) => set({ Repomodoro: value }),
      incrementRepomodro: () =>
        set((state) => ({ Repomodoro: state.Repomodoro + 1 })),
      resetRepomodro: () => set({ Repomodoro: 0 }),
    }),
    { name: 'settings-storage' } // localStorage key
  )
);
