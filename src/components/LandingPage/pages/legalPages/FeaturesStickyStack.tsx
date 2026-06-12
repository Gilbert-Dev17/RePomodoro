import { BellOff, CloudRain, Coffee, History, Settings2, Sparkles, VolumeX, type LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

// --- Types ---

interface Feature {
  id: string
  title: string
  desc: string
  icon: LucideIcon
}

// --- Data ---

const featureData: Feature[] = [
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

// --- Feature Visuals ---

const AdaptiveBreaksVisual = () => (
  <div className="w-full max-w-sm flex justify-center">
    <div className="w-full flex flex-col gap-6 bg-white border border-[#F6EEE5] rounded-[2rem] p-6 shadow-md">
      <div className="flex justify-between items-center px-2">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2.5 h-2.5 rounded-full bg-[#C9523A]"
          />
          <span className="text-xs font-bold text-[#A08878] uppercase tracking-widest">Focusing</span>
        </div>
        <span className="font-mono text-[#2E2017] font-bold text-lg tracking-tight">01:15:00</span>
      </div>

      <div className="bg-[#FAF6EF] rounded-2xl p-5 border border-[#F6EEE5]">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold text-[#2E2017] uppercase tracking-widest">Break Bank</span>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2, delay: 1 }}
            className="bg-white text-[#C9523A] font-bold px-3 py-1 rounded-lg shadow-sm border border-[#E1D4C5] text-sm"
          >
            25m earned
          </motion.div>
        </div>
        <div className="h-2 w-full bg-[#E1D4C5] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '30%' }}
            animate={{ width: ['30%', '85%', '30%'] }}
            transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
            className="h-full bg-[#C9523A] rounded-full"
          />
        </div>
      </div>
    </div>
  </div>
)

const soundscapeItems = [
  { id: 'volume', icon: VolumeX,   yOffset: -10, duration: 2,   delay: 0,   className: 'text-[#C9523A] shadow-md' },
  { id: 'rain',   icon: CloudRain, yOffset: -15, duration: 2.5, delay: 0.2, className: 'text-[#A08878]' },
  { id: 'coffee', icon: Coffee,    yOffset: -8,  duration: 1.8, delay: 0.4, className: 'text-[#A08878]' },
]

const SoundscapesVisual = () => (
  <div className="flex gap-6 items-end">
    {soundscapeItems.map(({ id, icon: Icon, yOffset, duration, delay, className }) => (
      <motion.div
        key={id}
        animate={{ y: [0, yOffset, 0] }}
        transition={{ repeat: Infinity, duration, delay, ease: 'easeInOut' }}
        className={`w-20 h-20 bg-white rounded-full flex items-center justify-center border border-[#F6EEE5] ${className}`}
      >
        <Icon size={32} />
      </motion.div>
    ))}
  </div>
)

const historyItems = [
  { label: 'Deep Work', time: '1h 10m' },
  { label: 'Writing',   time: '45m' },
  { label: 'Planning',  time: '20m' },
]

const SessionHistoryVisual = () => (
  <div className="flex flex-col gap-6 w-full max-w-sm bg-white p-8 rounded-[2rem] border border-[#F6EEE5] shadow-sm">
    {historyItems.map(({ label, time }, i) => (
      <div
        key={label}
        className={`flex justify-between items-center ${i < historyItems.length - 1 ? 'border-b border-[#F6EEE5] pb-3' : ''}`}
      >
        <span className="text-[#2E2017] font-medium text-lg">{label}</span>
        <span className="text-[#A08878] font-mono">{time}</span>
      </div>
    ))}
  </div>
)

const MinimalistZenVisual = () => (
  <div className="relative flex items-center justify-center">
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      className="absolute w-64 h-64 bg-[#EADDCF] rounded-full blur-3xl"
    />
    <div className="relative z-10 w-40 h-40 bg-white rounded-[2.5rem] border-[6px] border-[#F6EEE5] flex items-center justify-center shadow-lg">
      <BellOff size={48} className="text-[#C8B8A9]" />
    </div>
  </div>
)

const featureVisuals = [AdaptiveBreaksVisual, SoundscapesVisual, SessionHistoryVisual, MinimalistZenVisual]

// --- Feature Card ---

interface FeatureCardProps {
  feature: Feature
  index: number
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const Visual = featureVisuals[index]

  return (
    <div
      className="sticky shadow-xl rounded-[2.5rem]"
      style={{ top: `calc(7.5rem + ${index * 2.5}rem)` }}
    >
      <div className="flex flex-col md:flex-row items-stretch bg-white border border-[#F6EEE5] rounded-[2.5rem] overflow-hidden min-h-[450px]">
        <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center z-10">
          <h3 className="text-3xl md:text-4xl font-serif text-[#2E2017] leading-tight mb-4">
            {feature.title}
          </h3>
          <p className="text-lg text-[#A08878] leading-relaxed">{feature.desc}</p>
        </div>
        <div className="w-full md:w-1/2 bg-[#FAF6EF] p-8 md:p-10 flex items-center justify-center border-t md:border-t-0 md:border-l border-[#F6EEE5]">
          <Visual />
        </div>
      </div>
    </div>
  )
}

// --- Main Export ---

const FeaturesStickyStack = () => (
  <div className="flex flex-col gap-12 ">
    {featureData.map((feature, i) => (
      <FeatureCard key={feature.id} feature={feature} index={i} />
    ))}
  </div>
)

export default FeaturesStickyStack