'use client'
import React from 'react'
import { Label } from '../ui/label'
import { useSettingsStore } from '@/store/useSettingsStore';

const ShortBreak = () => {
  const { shortBreak } = useSettingsStore();
  const displayTime = `${String(shortBreak).padStart(2, '0')}:00`;

  return (
    <div className="flex flex-col items-center justify-center gap-4 min-h-[60vh] px-4 py-8">
      <Label
        className="
          font-mono tracking-widest text-center
          text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
        "
      >
        {displayTime}
      </Label>
    </div>
  )
}

export default ShortBreak
