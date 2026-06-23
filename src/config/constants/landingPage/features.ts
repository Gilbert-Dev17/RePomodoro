// Import Lucide React icons for feature cards and UI elements
import { BellOff, CloudRain, Coffee, History, Settings2, Sparkles, VolumeX, type LucideIcon } from 'lucide-react'

// Props interface for rendering individual feature cards
export interface FeatureCardProps {
  feature: Feature
  index: number
}

// Feature type definition representing each capability of the app
export type Feature ={
  id: string
  title: string
  desc: string
  icon: LucideIcon
}

// Core features displayed on landing page and marketing materials
export const features: Feature[] = [
  {
    id: 'adaptive',
    title: 'Adaptive Breaks',
    desc: 'No alarms breaking your flow. Your rest time accrues automatically in the background based on your actual focus effort.',
    icon: Sparkles,
  },
  {
    id: 'sound',
    title: 'Soundscapes',
    desc: 'Built-in ambient soundscapes. Mix rain, coffee shop chatter, and white noise to drown out distractions instantly.',
    icon: VolumeX,
  },
  {
    id: 'history',
    title: 'Session History',
    desc: 'Review your focus logs, see what you worked on, and track your deepest work sessions automatically.',
    icon: History,
  },
  {
    id: 'zen',
    title: 'Minimalist Zen',
    desc: 'A UI that gets out of your way. No ads, no social feeds, just a clean, warm environment designed for concentration.',
    icon: Settings2,
  },
]


// Soundscape options for ambient audio background - includes animation config (yOffset, duration, delay)
export const soundscapeItems = [
  { id: 'volume', icon: VolumeX,   yOffset: -10, duration: 2,   delay: 0,   className: 'text-[#C9523A] shadow-md' },
  { id: 'rain',   icon: CloudRain, yOffset: -15, duration: 2.5, delay: 0.2, className: 'text-[#A08878]' },
  { id: 'coffee', icon: Coffee,    yOffset: -8,  duration: 1.8, delay: 0.4, className: 'text-[#A08878]' },
]

// Example history items displayed to showcase user's session tracking capability
export const historyItems = [
  { label: 'Deep Work', time: '1h 10m' },
  { label: 'Writing',   time: '45m' },
  { label: 'Planning',  time: '20m' },
]