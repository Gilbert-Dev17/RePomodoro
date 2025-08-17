'use client';

import React, { useCallback} from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Settings } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
  DialogTrigger, DialogFooter
} from "@/components/ui/dialog";
import { Separator } from '@/components/ui/separator';
import { useSettingsStore } from '@/store/useSettingsStore';
import { useTimerStore } from '@/store/useTimerStore';
import { useSoundStore, availableSounds } from '@/sounds-libary/soundManager';
import { debounce } from '@/lib/debounce';
import TimerSettings from './TimerSettings';
import SoundSettings from './SoundSettings';

type SettingsFormValues = {
  Pomodoro: number;
  shortBreak: number;
  longBreak: number;
  mode: 'classic' | 'reverse';
  AutoStart: boolean;
  BreakInterval: number;
};

const DEFAULT_VALUES: SettingsFormValues = {
  Pomodoro: 30,
  shortBreak: 5,
  longBreak: 15,
  mode: 'reverse',
  AutoStart: true,
  BreakInterval: 5,
};

const SettingsButton = () => {
  const { syncWithSettings } = useTimerStore.getState();
  const {
    Pomodoro, shortBreak, longBreak, mode, AutoStart, BreakInterval,
    setPomodoro, setShortBreak, setLongBreak, setMode, setAutoStart, setBreakInterval,
    setSelectSound
  } = useSettingsStore();
  const { stopSound, setVolume } = useSoundStore();

  const form = useForm<SettingsFormValues>({
    defaultValues: { Pomodoro, shortBreak, longBreak, mode, AutoStart, BreakInterval },
  });

  const debounceSave = useCallback(
    debounce((data: SettingsFormValues) => {

      if (
        !data.Pomodoro || data.Pomodoro < 1 ||
        !data.shortBreak || data.shortBreak < 1 ||
        !data.longBreak || data.longBreak < 1 ||
        !data.BreakInterval || data.BreakInterval < 1
      ) {
        console.warn('Invalid settings values, not saving:', data);
        return;
      }

      setPomodoro(data.Pomodoro);
      setShortBreak(data.shortBreak);
      setLongBreak(data.longBreak);
      setMode(data.mode);
      setAutoStart(data.AutoStart);
      setBreakInterval?.(data.BreakInterval);
      syncWithSettings();
    }, 250),
    []
  );

  const handleReset = () => {
    form.reset(DEFAULT_VALUES);
    setPomodoro(DEFAULT_VALUES.Pomodoro);
    setShortBreak(DEFAULT_VALUES.shortBreak);
    setLongBreak(DEFAULT_VALUES.longBreak);
    setMode(DEFAULT_VALUES.mode);
    setAutoStart(DEFAULT_VALUES.AutoStart);
    setBreakInterval?.(DEFAULT_VALUES.BreakInterval);
    setSelectSound(availableSounds[0].name);
    setVolume(0.2);
    stopSound();
  };

  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" title="Settings">
              <Settings size={18} />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>Settings</TooltipContent>
      </Tooltip>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-2'>
            <Settings size={16} /> Settings
          </DialogTitle>
          <Separator />
        </DialogHeader>

        <form className="flex flex-col gap-8">
          <TimerSettings form={form} debounceSave={debounceSave} />
          <Separator />
          <SoundSettings />
          <DialogFooter className="mt-4 flex flex-row gap-2">
            <Button type="button" variant="secondary" onClick={handleReset}>
              Reset to Default
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default SettingsButton;
