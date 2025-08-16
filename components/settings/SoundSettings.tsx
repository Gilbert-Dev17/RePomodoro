'use client';

import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Volume2 } from 'lucide-react';
import { availableSounds, useSoundStore } from '@/sounds-libary/soundManager';
import { useSettingsStore } from '@/store/useSettingsStore';

const SoundSettings = () => {
  const { selectSound, setSelectSound } = useSettingsStore();
  const { playsound, stopSound, volume, setVolume } = useSoundStore();

  return (
    <section>
      <Label className="mb-2 font-bold flex items-center gap-2">
        <Volume2 size={16}/> Sound
      </Label>

      <div className="flex flex-row gap-4 items-center">
        <Label className="whitespace-nowrap">Alarm Sound</Label>
        <Select
          value={selectSound}
          onValueChange={(value) => {
            stopSound();
            setSelectSound(value);
            playsound(value);
          }}
        >
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Select Sound" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Available Sounds</SelectLabel>
              {availableSounds.map((sound) => (
                <SelectItem key={sound.name} value={sound.name}>
                  {sound.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button
          variant="destructive"
          size="icon"
          title="Stop Sound"
          onClick={() => stopSound()}
        >
          ✕
        </Button>
      </div>

      <div className="mt-4 flex flex-row items-center gap-4">
        <span className="text-sm w-12">Volume</span>
        <Slider
          value={[volume * 100]}
          onValueChange={(val) => {
            const newVolume = val[0] / 100;
            setVolume(newVolume);

            const currentAudio = useSoundStore.getState().audioInstance;
            if (currentAudio) {
              currentAudio.volume = newVolume;
            }
          }}
          onClick={() => {playsound(selectSound)}}
          max={100}
          step={1}
          className="w-48"
        />
        <span className="w-10 text-right text-sm">{Math.round(volume * 100)}%</span>
      </div>
    </section>
  );
};

export default SoundSettings;
