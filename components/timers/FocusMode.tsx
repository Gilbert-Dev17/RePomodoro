'use client'

import React from 'react'
import { Label } from '../ui/label'
import { useTimerStore } from '@/store/useTimerStore'


const FocusMode = () => {
  return (
    <section className='flex flex-col items-center gap-4 min-h-96 p-40'>

         {/* Additional content can be added here */}
        <Label className='text-9xl font-mono tracking-widest'>00:42:00</Label>
        {/* Timer display can be enhanced with actual timer logic */}
        <Label className='text-sm text-green-600 z-50'>Break: 14 min</Label>

    </section>
  )
}

export default FocusMode