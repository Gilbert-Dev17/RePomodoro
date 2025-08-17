import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Sound = {
  name: string;
  file: string;
};

const availableSounds: Sound[] = [
  { name: 'Alarm', file: '/sounds/Alarm.mp3' },
  // { name: 'Clock', file: '/sounds/Clock.mp3' },
];

type SoundManagerState = {
  selectedSound: string;
  audioInstance: HTMLAudioElement | null;
  volume: number;
  setVolume: (volume: number) => void;
  setSelectedSound: (soundName: string) => void;
  playsound: (soundName?: string) => void;
  stopSound: () => void;
};

export const useSoundStore = create<SoundManagerState>()(
  persist(
    (set, get) => ({
      selectedSound: availableSounds[0].name,
      audioInstance: null,
      volume: 0.15,

      setSelectedSound: (soundName) => set({ selectedSound: soundName }),

      setVolume: (vol) => {
        const clamped = Math.max(0, Math.min(1, vol));
        set({ volume: clamped });
        const audio = get().audioInstance;
        if (audio) audio.volume = clamped;
      },

      playsound: (soundName) => {
        get().stopSound();
        const nameToPlay = soundName ?? get().selectedSound;
        const sound = availableSounds.find((s) => s.name === nameToPlay);

        if (sound) {
          const audio = new Audio(sound.file);
          audio.volume = get().volume;
          audio.play();
          set({ audioInstance: audio });
        }
      },

      stopSound: () => {
        const currentAudio = get().audioInstance;
        if (currentAudio instanceof HTMLAudioElement) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
        }
        set({ audioInstance: null });
      },
    }),
    {
      name: 'sound-storage',
      partialize: (state) => ({
        selectedSound: state.selectedSound,
        volume: state.volume,
      }), // persist only these keys
    }
  )
);


export { availableSounds };
