import {create} from 'zustand';
import {persist} from 'zustand/middleware';

type Sound = {
    name: string;
    file: string;
}

const availableSounds: Sound[] = [
    { name: 'Alarm', file: '/sounds/Alarm.mp3' },
    { name: 'Clock', file: '/sounds/Clock.mp3' },
];

type SoundManagerState = {
    selectedSound: string;
    setSelectedSound: (soundName: string) => void;
    playsound: (soundName?: string) => void;
    stopSound: () => void;
};

export const useSoundStore = create<SoundManagerState>()(
    persist(
        (set, get) => ({
            selectedSound: availableSounds[0].name,
            setSelectedSound: (soundName) => set({ selectedSound: soundName }),
            playsound: (soundName) => {
                const nameToPlay = soundName ?? get().selectedSound;
                const sound = availableSounds.find(s => s.name === nameToPlay);
                if (sound) {
                    const audio = new Audio(sound.file);
                    audio.play();
                }
            },
            stopSound: () => {
                // Placeholder for stopping sound logic
                // This would require keeping track of the audio instance
            }
        }),
        {name: 'sound-storage'} // localStorage key
    )
);


export { availableSounds };