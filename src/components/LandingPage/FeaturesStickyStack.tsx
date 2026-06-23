import {features, soundscapeItems, historyItems, type FeatureCardProps} from "@/config/constants/landingPage/features";
import { BellOff} from 'lucide-react'
import { motion } from 'framer-motion'
import { pulseAnimation, scaleAnimation, progressBarAnimation, glowAnimation } from '@/utils/animationConfigs'

// --- Feature Visuals ---

/**
 * AdaptiveBreaksVisual
 * Displays an animated focus timer with adaptive break accrual progress bar.
 * Shows focus duration, break bank accumulated, and animated progress visualization.
 */
const AdaptiveBreaksVisual = () => (
  <div className="w-full max-w-sm flex justify-center">
    <div className="w-full flex flex-col gap-6 bg-white border border-[#F6EEE5] rounded-[2rem] p-6 shadow-md">
      <div className="flex justify-between items-center px-2">
        <div className="flex items-center gap-3">
          <motion.div
            {...pulseAnimation}
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
            {...scaleAnimation}
            className="bg-white text-[#C9523A] font-bold px-3 py-1 rounded-lg shadow-sm border border-[#E1D4C5] text-sm"
          >
            25m earned
          </motion.div>
        </div>
        <div className="h-2 w-full bg-[#E1D4C5] rounded-full overflow-hidden">
          <motion.div
            {...progressBarAnimation}
            className="h-full bg-[#C9523A] rounded-full"
          />
        </div>
      </div>
    </div>
  </div>
)

/**
 * SoundscapesVisual
 * Renders animated soundscape icon options (rain, coffee shop, white noise).
 * Each icon animates with staggered vertical movement based on config values.
 */
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

/**
 * SessionHistoryVisual
 * Displays a list of example session history with work type labels and durations.
 * Shows Deep Work, Writing, and Planning sessions with time spent.
 */
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

/**
 * MinimalistZenVisual
 * Represents the zen minimalist design with glowing background effect and centered bell icon.
 * Emphasizes the distraction-free, calm interface of the app.
 */
const MinimalistZenVisual = () => (
  <div className="relative flex items-center justify-center">
    <motion.div
      {...glowAnimation}
      className="absolute w-64 h-64 bg-[#EADDCF] rounded-full blur-3xl"
    />
    <div className="relative z-10 w-40 h-40 bg-white rounded-[2.5rem] border-[6px] border-[#F6EEE5] flex items-center justify-center shadow-lg">
      <BellOff size={48} className="text-[#C8B8A9]" />
    </div>
  </div>
)

/**
 * Explicit mapping of feature IDs to their visual components
 * Replaces implicit array indexing with clear, maintainable object-based lookup
 */
const featureVisuals = {
  adaptive: AdaptiveBreaksVisual,
  sound: SoundscapesVisual,
  history: SessionHistoryVisual,
  zen: MinimalistZenVisual,
} as const


/**
 * FeatureCard
 * Renders a sticky card displaying a single feature with its visual component.
 * @param feature - Feature data including title, description, and ID
 * @param index - Position in the feature list (for stacking effect)
 */
const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const Visual = featureVisuals[feature.id as keyof typeof featureVisuals]

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

/**
 * FeaturesStickyStack
 * Main component that renders all features as sticky-stacked cards with parallax effect.
 * Each card stays visible briefly before the next feature scrolls in, creating an engaging
 * presentation of the app's key capabilities.
 */
const FeaturesStickyStack = () => (
  <div className="flex flex-col gap-12 ">
    {features.map((feature, i) => (
      <FeatureCard key={feature.id} feature={feature} index={i} />
    ))}
  </div>
)

export default FeaturesStickyStack