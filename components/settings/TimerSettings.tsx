'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select, SelectTrigger, SelectValue,
  SelectContent, SelectGroup, SelectLabel, SelectItem
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Clock3, Repeat } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';

type SettingsFormValues = {
  Pomodoro: number;
  shortBreak: number;
  longBreak: number;
  mode: 'classic' | 'reverse';
  AutoStart: boolean;
  BreakInterval: number;
};

type TimerSettingsProps = {
  form: UseFormReturn<SettingsFormValues>;
  debounceSave: (data: SettingsFormValues) => void;
};

const TimerSettings = ({ form, debounceSave }: TimerSettingsProps) => {
  const mode = form.watch('mode');

  const inputFields = [
    { label: 'Focus Time', name: 'Pomodoro', min: 1 },
    { label: 'Short Break', name: 'shortBreak', min: 1 },
    { label: 'Long Break', name: 'longBreak', min: 1 },
  ];

  return (
    <section className="space-y-6">
      {/* Mode Selector */}
      <div>
        <Label className="font-bold mb-2 flex items-center gap-2">
          <Repeat size={16} /> Mode
        </Label>
        <p className="text-sm text-muted-foreground mb-4">
          Choose between Classic and Reverse Pomodoro modes.
        </p>
        <Select
          value={form.watch('mode')}
          onValueChange={(value) => {
            form.setValue('mode', value as 'classic' | 'reverse');
            debounceSave(form.getValues());
          }}
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
      </div>

      {/* Timer Inputs */}
      <div>
        <Label className="font-bold mb-2 flex items-center gap-2">
          <Clock3 size={16} /> Timer
        </Label>
        <p className="text-sm text-muted-foreground mb-4">
          Timer inputs are disabled in Reverse Pomodoro mode.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  onChange: () => debounceSave(form.getValues()),
                })}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Toggles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-row justify-between items-center">
          <Label>Auto Start Breaks</Label>
          <Switch
            disabled={mode !== 'classic'}
            checked={form.watch('AutoStart') ?? false}
            onCheckedChange={(checked) => {
              form.setValue('AutoStart', checked);
              debounceSave(form.getValues());
            }}
          />
        </div>
        <div className="flex flex-row justify-between items-center">
          <Label>Long Break Interval</Label>
          <Input
            className="w-20"
            type="number"
            min={1}
            disabled={mode !== 'classic' || !form.watch('AutoStart')}
            {...form.register('BreakInterval', {
              valueAsNumber: true,
              required: true,
              onChange: () => debounceSave(form.getValues()),
            })}
          />
        </div>
      </div>
    </section>
  );
};

export default TimerSettings;
