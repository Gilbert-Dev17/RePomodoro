'use client'

import React, {useState, useEffect} from 'react'
import { Label } from '../ui/label'
import { useTimerStore } from '@/store/useTimerStore';

const ClassicMode = () => {
  const { timeLeft } = useTimerStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevent rendering until mounted


  // Format timeLeft (in seconds) into mm:ss or hh:mm:ss
  let displayTime;
  if (timeLeft >= 3600) {
    const hours = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    displayTime = `${hours}:${minutes}:${seconds}`;
  } else {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    displayTime = `${minutes}:${seconds}`;
  }

  return (
    <div className='flex flex-col items-center gap-4 min-h-96 md:p-40 p-0'>
      <Label className='text-9xl font-mono tracking-widest'>{displayTime}</Label>
    </div>
  )
}

export default ClassicMode
