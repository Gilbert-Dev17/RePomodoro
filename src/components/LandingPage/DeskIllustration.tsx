import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'



const TimerRingPreview = ({ progress = 0, scale = 1, showLabel = true, timeString = "25:00" }) => {
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  const offset = circumference - (clampedProgress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ transform: `scale(${scale})` }}>
      <svg width="300" height="300" className="transform -rotate-90">
        <circle cx="150" cy="150" r={radius} stroke="#EBE0D2" strokeWidth="16" fill="transparent" />
        <circle cx="150" cy="150" r={radius} stroke="#C9523A" strokeWidth="16" fill="transparent" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
      </svg>
      <div className="absolute flex flex-col items-center mt-2">
        <span className="text-6xl font-serif font-bold tracking-tight text-[#2E2017]">{timeString}</span>
        {showLabel && <span className="text-[#A08878] text-sm mt-2 font-medium tracking-[0.2em] uppercase">Focus</span>}
      </div>
    </div>
  );
};

const DeskIllustration = () => (

<div>
    {/* Background blob */}
    <div className="absolute right-0 top-[15%] w-[420px] h-[260px] bg-[#F6EEE5] rounded-[100px]" />

    {/* Desk surface */}
    <div className="absolute bottom-[20%] right-[30px] w-[360px] h-3 bg-[#E1D4C5] rounded-full" />

    {/* Notebook */}
    <div className="absolute bottom-[calc(20%+12px)] right-[270px] w-[70px] h-[32px] border-[3px] border-[#C8B8A9] bg-[#F6EEE5] rounded-[6px] flex flex-col justify-center items-start pl-2 gap-1.5 z-10">
      <div className="w-[35px] h-[2px] bg-[#C8B8A9] rounded-full" />
      <div className="w-[20px] h-[2px] bg-[#C8B8A9] rounded-full" />
    </div>

    {/* Mug */}
    <div className="absolute bottom-[calc(20%+12px)] right-[150px] w-[55px] h-[65px] border-[3px] border-[#C8B8A9] bg-[#F6EEE5] rounded-[12px_12px_16px_16px] flex justify-center pt-3 z-20">
      <div className="w-[28px] h-[6px] bg-[#E1D4C5] rounded-full" />
      <div className="absolute top-[12px] -right-[15px] w-[15px] h-[30px] border-[3px] border-[#C8B8A9] border-l-0 rounded-r-[16px] -z-10" />
    </div>

    {/* Plant */}
    <div className="absolute bottom-[calc(20%+12px)] right-[50px] flex flex-col items-center z-10">
      <div className="absolute bottom-[30px] w-[60px] h-[60px] z-0">
        <svg width="60" height="60" viewBox="0 0 80 80" className="text-[#A2B19C] overflow-visible" fill="currentColor">
          <path d="M40 80 Q35 50 15 35" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M40 80 Q45 50 65 35" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M40 80 L40 40"       stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
          <circle cx="15" cy="35" r="12" />
          <circle cx="65" cy="35" r="12" />
          <circle cx="40" cy="26" r="12" />
        </svg>
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-[44px] h-[8px] border-[3px] border-[#C8B8A9] bg-[#F6EEE5] rounded-[4px] z-20" />
        <div className="w-[36px] h-[28px] border-[3px] border-t-0 border-[#C8B8A9] bg-[#F6EEE5] rounded-b-[8px] -mt-[2px] z-10" />
      </div>
    </div>

    {/* Ratio badge */}
    <div className="absolute top-[38%] left-0 bg-[#3C312B] px-5 py-3 rounded-[2rem] shadow-lg z-30 flex items-center gap-2">
      <span className="text-[#A5958A] font-mono text-sm tracking-widest">1 hr work</span>
      <ArrowRight size={14} className="text-[#A5958A]" />
      <span className="text-[#C9523A] font-bold font-serif text-lg tracking-wide">20 min</span>
    </div>

    {/* Timer ring */}
    <div className="absolute top-[0%] right-[20px] bg-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(46,32,23,0.06)] border-[6px] border-[#F6EEE5] z-30 w-[130px] h-[130px] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <TimerRingPreview progress={80} scale={0.4} showLabel={true} />
      </div>
    </div>

  </div>
)

export default DeskIllustration