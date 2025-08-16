'use client'
import React from 'react'
import { Label } from '../ui/label'
import { useSettingsStore } from '@/store/useSettingsStore';

const LongBreak = () => {
  const { longBreak } = useSettingsStore();
  const displayTime = `${String(longBreak).padStart(2, '0')}:00`;

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

export default LongBreak
