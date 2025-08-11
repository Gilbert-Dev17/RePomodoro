'use client'
import React from 'react'
import { Label } from '../ui/label'
import { useSettingsStore } from '@/store/useSettingsStore';

const ShortBreak = () => {
  const { shortBreak } = useSettingsStore();
  const displayTime = `${String(shortBreak).padStart(2, '0')}:00`;

  return (
    <div className='flex flex-col items-center gap-4 min-h-96 p-40'>
        {/* Additional content can be added here */}
        <Label className='text-9xl font-mono tracking-widest'>{displayTime}</Label>
        {/* Timer display can be enhanced with actual timer logic */}

    </div>
  )
}

export default ShortBreak