import { Sparkles, VolumeX, History, Settings2 } from 'lucide-react'
import type { Feature } from '@/types/feature'

export const features: Feature[] = [
  {
    id: 'adaptive',
    title: 'Adaptive Breaks',
    description:
      'No alarms breaking your flow. Your rest time accrues automatically in the background based on your actual focus effort.',
    icon: Sparkles,
  },
  {
    id: 'sound',
    title: 'Soundscapes',
    description:
      'Built-in ambient soundscapes. Mix rain, coffee shop chatter, and white noise to drown out distractions instantly.',
    icon: VolumeX,
  },
  {
    id: 'history',
    title: 'Session History',
    description:
      'Review your focus logs, see what you worked on, and track your deepest work sessions automatically.',
    icon: History,
  },
  {
    id: 'zen',
    title: 'Minimalist Zen',
    description:
      'A UI that gets out of your way. No ads, no social feeds, just a clean, warm environment designed for concentration.',
    icon: Settings2,
  },
]