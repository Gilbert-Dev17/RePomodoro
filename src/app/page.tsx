"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { MarketingNav } from '@/components/LandingPage/layout/MarketingNav';
import { MegaFooter } from '@/components/LandingPage/layout/MegaFooter';



export default function page() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-full flex flex-col bg-white text-[#111111] animate-[fadeIn_0.4s_ease-out]">
      <MarketingNav />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full relative">
        <div className="absolute right-0 top-0 w-150 h-150 bg-[#F4EAE0] rounded-full blur-3xl opacity-60 -z-10 pointer-events-none translate-x-1/4 -translate-y-1/4"></div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex-1 text-center lg:text-left z-10">
          <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] font-serif font-bold tracking-tighter leading-[1.05] mb-6 text-[#2E2017]">
            Rethink <br className="hidden lg:block" /> how you <span className="text-[#C9523A] italic font-serif">rest.</span>
          </h1>
          <div className="flex flex-col items-center lg:items-start gap-6 mt-4">
             {/* CTA Buttons here */}
             {/* <PrimaryButton onClick={() => router.push('/app')} variant="filled" icon>Start a session</PrimaryButton> */}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="flex-1 flex justify-center lg:justify-end w-full relative z-10">
          {/* <DeskIllustration /> */}
        </motion.div>
      </section>

      {/* Main Content Layout */}
      <div className="bg-[#FAF6EF] w-full border-t border-[#F6EEE5]">
        <div className="max-w-360 mx-auto px-6 relative flex items-start justify-center">
          <div className="hidden xl:block absolute left-6 2xl:left-12 top-0 bottom-0 w-56">
            {/* <FloatingSidebar activePage="landing" /> */}
          </div>

          <main className="w-full max-w-4xl py-24 flex flex-col gap-32 z-10">
            {/* Sections go here (Philosophy, FeaturesStickyStack, FAQ) */}
            <section id="features" className="scroll-mt-32">
              {/* <FeaturesStickyStack /> */}
            </section>
          </main>
        </div>
      </div>

      <MegaFooter />
    </div>
  );
}
