"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { MegaFooter } from '@/components/LandingPage/layout/MegaFooter';
import { PrimaryButton } from '@/components/LandingPage/ui/PrimaryButton';
import FeaturesPage from '@/components/LandingPage/pages/FeaturesPage';
import DeskIllustration from '@/components/LandingPage/DeskIllustration';
import {FloatingSidebar} from '@/components/LandingPage/layout/FloatingSidebar';

export default function page() {

  return (
    <div className="min-h-full flex flex-col bg-white text-[#111111] animate-[fadeIn_0.4s_ease-out]">

      {/* Hero Section */}
      <section id="hero" className="max-w-7xl h-full mx-auto px-6 pt-16 pb-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full relative">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex-1 text-center lg:text-left z-10">
          <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] font-serif font-bold tracking-tighter leading-[1.05] mb-6 text-[#2E2017]">
            Rethink <br className="hidden lg:block" /> how you <span className="text-[#C9523A] italic font-serif">rest.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#A08878] font-medium mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Stop letting a 25-minute timer cut your flow short. <br className="hidden md:block" />
            Re.Focus adapts to how you actually work — and rewards you with rest you've genuinely earned.
          </p>
          <div className="flex flex-col items-center lg:items-start gap-6 mt-4">
            <PrimaryButton className="flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </PrimaryButton>
          </div>
        </motion.div>

          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
              className="relative w-full max-w-[480px] h-[340px] flex items-center justify-center mt-8 lg:mt-0"
            >
            <DeskIllustration />
        </motion.div>
      </section>

      {/* Main Content Layout */}
      <main className="bg-[#FAF6EF] w-full border-t border-[#F6EEE5]">
        <div className="max-w-7xl mx-auto px-6 flex gap-12 relative">
          <FloatingSidebar />

          {/* Centered content */}
        <div className="max-w-5xl mx-auto px-6">
          <FeaturesPage />
        </div>
        </div>
      </main>

      <MegaFooter />
    </div>
  );
}
