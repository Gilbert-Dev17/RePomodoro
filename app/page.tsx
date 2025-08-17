'use client';

import React from 'react';
import ButtonControls from '@/components/custom/ButtonControls';
import Header from '@/components/layout/Header';
import TimerDisplay from '@/components/timers/TimerDisplay';
import { Label } from '@/components/ui/label';
import { useTimerStore } from '@/store/useTimerStore';
import { useSettingsStore } from '@/store/useSettingsStore';


const Page = () => {

  const { phase} = useTimerStore();
  const { mode } = useSettingsStore();

    // dynamic header
    const header = (() => {
      if (mode === 'reverse') return 'Repomodoro';
      if (phase === 'focus') return 'Pomodoro';
      if (phase === 'shortBreak') return 'Short Break';
      if (phase === 'longBreak') return 'Long Break';
      return 'Timer';
    })();

  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Timer Section */}
      <section className="flex flex-1 flex-col justify-center items-center gap-8 ">
        {/* Custom Tabs */}
        <Label className="text-sm md:text-2xl font-semibold text-muted-foreground">
          {header}
        </Label>

        <TimerDisplay />

        {/* Controls */}
        <ButtonControls />
      </section>
    </main>
  );
}

export default Page;
