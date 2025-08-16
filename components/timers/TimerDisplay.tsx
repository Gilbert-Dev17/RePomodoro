'use client';

import React, { useState, useEffect } from 'react';
import { Label } from '../ui/label';
import { useTimerStore } from '@/store/useTimerStore';
import { useSettingsStore } from '@/store/useSettingsStore';

const TimerDisplay = () => {
  const { timeLeft } = useTimerStore();
  const mode = useSettingsStore((state) => state.mode); // ✅ fresh mode from settings
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // formatting for any mode
  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return h > 0
      ? `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
      : `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  // break rule for reverse mode (example: 1/3 of work time)
  const breakMinutes = mode === 'reverse'
    ? Math.floor((timeLeft / 60) / 3)
    : null;

  return (
    <div className="flex flex-col items-center justify-center gap-4 min-h-[60vh] px-4">
      <Label
        className="
          font-mono tracking-widest text-center
          text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
        "
      >
        {formatTime(timeLeft)}
      </Label>

      {mode === 'reverse' && (
        <Label className="text-xs sm:text-sm md:text-base text-green-600 z-50">
          Break: {breakMinutes} min
        </Label>
      )}
    </div>
  );
};

export default TimerDisplay;
