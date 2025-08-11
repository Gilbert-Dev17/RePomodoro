'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Settings } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
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
import { useSettingsStore } from '@/store/useSettingsStore';
import { useTimerStore } from '@/store/useTimerStore';

type SettingsFormValues = {
  focusTime: number;
  shortBreak: number;
  longBreak: number;
  mode: 'classic' | 'reverse';
};

const DEFAULT_VALUES: SettingsFormValues = {
  focusTime: 60,
  shortBreak: 5,
  longBreak: 15,
  mode: 'classic',
};

const SettingsButton = () => {
  const { syncWithSettings } = useTimerStore.getState();

  const {
    focusTime,
    shortBreak,
    longBreak,
    mode,
    setFocusTime,
    setShortBreak,
    setLongBreak,
    setMode
  } =
    useSettingsStore();

  const form = useForm<SettingsFormValues>({
    defaultValues: {
      focusTime,
      shortBreak,
      longBreak,
      mode,
    },
  });

  const handleSave = (data: SettingsFormValues) => {
    syncWithSettings();
    setFocusTime(data.focusTime);
    setShortBreak(data.shortBreak);
    setLongBreak(data.longBreak);
    setMode(data.mode);
  };

  const handleReset = () => {
    form.reset(DEFAULT_VALUES);
    setFocusTime(DEFAULT_VALUES.focusTime);
    setShortBreak(DEFAULT_VALUES.shortBreak);
    setLongBreak(DEFAULT_VALUES.longBreak);
    setMode(DEFAULT_VALUES.mode);
  };

  const inputFields = [
    { label: 'Focus Time (minutes)', name: 'focusTime', min: 1 },
    { label: 'Short Break (minutes)', name: 'shortBreak', min: 1 },
    { label: 'Long Break (minutes)', name: 'longBreak', min: 1 },
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
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Adjust your timer preferences below.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={form.handleSubmit(handleSave)}
          className="flex flex-col gap-6"
        >
          {/* Focus and Break Times */}
          {inputFields.map((field) => (
            <div key={field.name} className="flex flex-col gap-2">
              <Label htmlFor={field.name}>{field.label}</Label>
              <Input
                id={field.name}
                type="number"
                min={field.min}
                {...form.register(field.name as keyof SettingsFormValues, {
                  valueAsNumber: true,
                  required: true,
                })}
              />
            </div>
          ))}

          <Separator />

          {/* Mode Selector */}
          <div>
            <Label>Mode</Label>
            <p className="text-sm text-muted-foreground">
              Choose between Classic and Reverse Pomodoro modes.
            </p>
          </div>
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

          <DialogFooter className="mt-4">
            <Button
              type="button"
              variant="secondary"
              onClick={handleReset}
            >
              Reset to Default
            </Button>
            <DialogClose asChild>
              <Button type="submit" variant="default">
                Save Changes
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsButton;
