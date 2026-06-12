"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { MarketingNav } from '@/components/LandingPage/layout/MarketingNav';
import { MegaFooter } from '@/components/LandingPage/layout/MegaFooter';
import { PrimaryButton } from '@/components/LandingPage/ui/PrimaryButton';



export default function page() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-full flex flex-col bg-white text-[#111111] animate-[fadeIn_0.4s_ease-out]">
      <MarketingNav />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full relative">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex-1 text-center lg:text-left z-10">
          <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] font-serif font-bold tracking-tighter leading-[1.05] mb-6 text-[#2E2017]">
            Rethink <br className="hidden lg:block" /> how you <span className="text-[#C9523A] italic font-serif">rest.</span>
          </h1>
          <div className="flex flex-col items-center lg:items-start gap-6 mt-4">

          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="flex-1 flex justify-center lg:justify-end w-full relative z-10">

        </motion.div>
      </section>

      {/* Main Content Layout */}
      <main className="bg-[#FAF6EF] w-full border-t border-[#F6EEE5]">
        <div className="max-w-360 mx-auto px-6 relative flex items-start justify-center">
          <div className="hidden xl:block absolute left-6 2xl:left-12 top-0 bottom-0 w-56">
            {/* <FloatingSidebar activePage="landing" /> */}
          </div>

          <main className="w-full max-w-4xl py-24 flex flex-col gap-32 z-10">
            {/* Sections go here (Philosophy, FeaturesStickyStack, FAQ) */}

            <section id="philosophy" className="scroll-mt-32">
              <h2 className="text-3xl font-serif font-bold tracking-tight text-[#2E2017] mb-6">A softer, human approach to productivity.</h2>
              <p className="text-[#A08878] text-lg leading-relaxed mb-6">Re.Focus is built on the belief that true productivity comes from balance, not burnout. We designed our timer to be a gentle companion for your work sessions, helping you find flow without sacrificing your well-being.</p>
              <p className="text-[#A08878] text-lg leading-relaxed">With Re.Focus, you can customize your focus sessions with soothing sounds, set gentle reminders to take breaks, and track your progress over time. It's not just about getting things done—it's about creating a sustainable rhythm that keeps you energized and focused for the long haul.</p>
            </section>

            <section id="features" className="scroll-mt-32">
              {/* <FeaturesStickyStack /> */}
            </section>
          </main>
        </div>
      </main>

      <MegaFooter />
    </div>
  );
}
