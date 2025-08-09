import React from 'react'
import { Label } from '../ui/label'

const FocusMode = () => {
  return (
        <div className='flex flex-col items-center gap-4 p-20'>

         {/* Additional content can be added here */}
        <Label className='text-9xl font-mono tracking-widest'>00:42:00</Label>
        {/* Timer display can be enhanced with actual timer logic */}
        <Label className='text-sm text-green-600'>Break: 14 min</Label>

      </div>
  )
}

export default FocusMode