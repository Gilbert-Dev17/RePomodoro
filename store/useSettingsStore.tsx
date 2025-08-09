// store/useSettingsStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Mode = 'classic' | 'reverse';

interface SettingsState {
  focusTime: number;
  shortBreak: number;
  longBreak: number;
  mode: Mode;
  setFocusTime: (minutes: number) => void;
  setShortBreak: (minutes: number) => void;
  setLongBreak: (minutes: number) => void;
  setMode: (mode: Mode) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      focusTime: 60,
      shortBreak: 5,
      longBreak: 15,
      mode: 'classic',
      setFocusTime: (minutes) => set({ focusTime: minutes }),
      setShortBreak: (minutes) => set({ shortBreak: minutes }),
      setLongBreak: (minutes) => set({ longBreak: minutes }),
      setMode: (mode) => set({ mode }),
    }),
    { name: 'settings-storage' } // localStorage key
  )
);
