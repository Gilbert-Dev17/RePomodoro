'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Settings, Repeat, Clock3, Volume2 } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '../ui/switch';
import { useSettingsStore } from '@/store/useSettingsStore';
import { useTimerStore } from '@/store/useTimerStore';

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
    Pomodoro,
    shortBreak,
    longBreak,
    mode,
    AutoStart,
    BreakInterval,
    setPomodoro,
    setShortBreak,
    setLongBreak,
    setMode,
    setAutoStart,
    setBreakInterval,
  } = useSettingsStore();


  const form = useForm<SettingsFormValues>({

    defaultValues: { Pomodoro, shortBreak, longBreak, mode, AutoStart, BreakInterval },
  });

  const handleSave = (data: SettingsFormValues) => {
    setPomodoro(data.Pomodoro);
    setShortBreak(data.shortBreak);
    setLongBreak(data.longBreak);
    setMode(data.mode);
    setAutoStart(data.AutoStart);
    setBreakInterval?.(data.BreakInterval);
    syncWithSettings();
  };

  const handleReset = () => {
    form.reset(DEFAULT_VALUES);
    setPomodoro(DEFAULT_VALUES.Pomodoro);
    setShortBreak(DEFAULT_VALUES.shortBreak);
    setLongBreak(DEFAULT_VALUES.longBreak);
    setMode(DEFAULT_VALUES.mode);
    setAutoStart(DEFAULT_VALUES.AutoStart);
    setBreakInterval?.(DEFAULT_VALUES.BreakInterval);
  };

  // mapping input fields for timer settings
  const inputFields = [
    { label: 'Focus Time', name: 'Pomodoro', min: 1 },
    { label: 'Short Break', name: 'shortBreak', min: 1 },
    { label: 'Long Break', name: 'longBreak', min: 1 },
  ];

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
        <TooltipContent>
          <p>Settings</p>
        </TooltipContent>
      </Tooltip>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-2'>
            <Settings size={16} />
            Settings
          </DialogTitle>
          <Separator />
        </DialogHeader>

        <form
          onSubmit={form.handleSubmit(handleSave)}
          className="flex flex-col gap-8"
        >
          {/* Mode Selector */}
          <section>
            <Label className="font-bold mb-2">
              <Repeat size={16} />
              Mode
            </Label>
            <p className="text-sm text-muted-foreground mb-4">
              Choose between Classic and Reverse Pomodoro modes.
            </p>
            <Select
              value={form.watch('mode')}
              onValueChange={(value) =>
                form.setValue('mode', value as 'classic' | 'reverse')
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Mode</SelectLabel>
                  <SelectItem value="classic">Classic Pomodoro</SelectItem>
                  <SelectItem value="reverse">Reverse Pomodoro</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </section>

          <Separator />

          {/* Timer Inputs */}
          <section>
            <div className='flex flex-col'>
              <Label className="font-bold mb-2"> <Clock3 size={16} /> Timer</Label>
              <span className='text-muted-foreground text-sm mb-4'>
                Timer inputs are disabled in Reverse Pomodoro mode.
              </span>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
              {inputFields.map((field) => (
                <div key={field.name} className="flex flex-col gap-2">
                  <Label htmlFor={field.name}>{field.label}</Label>
                  <Input
                    id={field.name}
                    type="number"
                    min={field.min}
                    disabled={mode !== 'classic'}
                    {...form.register(field.name as keyof SettingsFormValues, {
                      valueAsNumber: true,
                      required: true,
                    })}
                  />
                </div>
              ))}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='flex flex-row justify-between items-center'>
                <Label>Auto Start Breaks</Label>
                <Switch
                disabled={mode !== 'classic'}
                checked={form.watch('AutoStart')?? false}
                onCheckedChange={(checked) => {
                  setAutoStart(checked);
                  form.setValue('AutoStart', checked);
                }}
                />
              </div>
              <div className='flex flex-row justify-between items-center'>
                <Label>Long Break Interval</Label>
                <Input
                  className='w-16'
                  type="number" min={1}
                  disabled={mode !== 'classic'}
                  {...form.register('BreakInterval', {
                    valueAsNumber: true,
                    required: true,
                  })}
                   />
              </div>
            </div>
          </section>

          <Separator />

          {/* Sound */}
          <section>
            <div className='flex flex-col gap-2'>
              <Label className='mb-2 font-bold'> <Volume2 size={16}/> Sound</Label>
            </div>
            {/* placeholder */}
            <div className='flex flex-row gap-2 justify-between items-center'>
              <Label>Alarm Sound</Label>
              <Select>
                <SelectTrigger className="w-1/2">
                  <SelectValue placeholder="Select Sound" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Available Sounds</SelectLabel>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="chime">Chime</SelectItem>
                    <SelectItem value="beep">Beep</SelectItem>
                    {/* Add more sound options as needed */}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </section>

          <DialogFooter className="mt-4 flex flex-row gap-2">
            <Button
              type="button"
              variant="secondary"
              onClick={handleReset}
              className="flex items-center gap-2"
            >
              Reset to Default
            </Button>
            <DialogClose asChild>
              <Button type="submit" variant="default" className="flex items-center gap-2">
                Save Changes
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default SettingsButton;