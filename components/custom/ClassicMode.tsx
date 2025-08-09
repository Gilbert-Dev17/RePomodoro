'use client'
import React from 'react'
import { Label } from '../ui/label'

const ClassicMode = () => {
  return (
    <div className='flex flex-col items-center gap-4 p-20'>

      {/* Additional content can be added here */}
      <Label className='text-9xl font-mono tracking-widest'>00:42:13</Label>

    </div>
  )
}

export default ClassicMode