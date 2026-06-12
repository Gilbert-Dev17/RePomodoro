import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { MegaFooter } from '../../layout/MegaFooter'

import { MarketingNav } from '../../layout/MarketingNav';

const Changelog = () => {
  return (
   <div className="min-h-full flex flex-col bg-white text-[#2E2017] animate-[fadeIn_0.4s_ease-out]">
    <MarketingNav />

    <div className="max-w-[90rem] mx-auto px-6 relative flex items-start justify-center w-full border-t border-[#F6EEE5] xl:border-t-0">
      <div className="hidden xl:block absolute left-6 2xl:left-12 top-0 bottom-0 w-56">
        {/* <FloatingSidebar navigate={navigate} activePage="changelog" /> */}
      </div>

      <main className="w-full max-w-3xl pt-12 pb-32 z-10 flex-1">
        <button
        //   onClick={() => { navigate('landing'); setTimeout(() => document.body.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100); }}
          className="flex items-center gap-2 text-[#A08878] hover:text-[#C9523A] transition-colors mb-10 font-medium w-fit"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-12 text-[#2E2017]">Changelog</h1>

        <div className="flex flex-col gap-12">
          <div className="relative pl-8 border-l-2 border-[#F6EEE5]">
             <div className="absolute w-3 h-3 bg-[#C9523A] rounded-full -left-[7px] top-2"></div>
             <p className="text-sm font-bold tracking-widest uppercase text-[#C9523A] mb-2">May 26, 2026</p>
             <h3 className="text-2xl font-serif text-[#2E2017] mb-4">v1.2.0 — The Stack Update</h3>
             <ul className="list-disc pl-5 text-[#A08878] space-y-2">
               <li>Redesigned Features section into a pure CSS sticky card stack.</li>
               <li>Cards now physically peel away and overlap seamlessly as you scroll.</li>
             </ul>
          </div>

          <div className="relative pl-8 border-l-2 border-[#F6EEE5]">
             <div className="absolute w-3 h-3 bg-[#E1D4C5] rounded-full -left-[7px] top-2"></div>
             <p className="text-sm font-bold tracking-widest uppercase text-[#A08878] mb-2">May 24, 2026</p>
             <h3 className="text-2xl font-serif text-[#2E2017] mb-4">v1.1.0 — The Editorial Update</h3>
             <ul className="list-disc pl-5 text-[#A08878] space-y-2">
               <li>Added fully functional stopwatch logic with proportional rest calculation.</li>
               <li>Introduced task naming to give session history context.</li>
               <li>Keyboard shortcuts mapped (Space to pause, R to reset).</li>
               <li>Revamped mobile navigation with a responsive slide-down menu.</li>
               <li>Improved accessibility across icon buttons and accordions.</li>
             </ul>
          </div>

          <div className="relative pl-8 border-l-2 border-[#F6EEE5]">
             <div className="absolute w-3 h-3 bg-[#E1D4C5] rounded-full -left-[7px] top-2"></div>
             <p className="text-sm font-bold tracking-widest uppercase text-[#A08878] mb-2">May 15, 2026</p>
             <h3 className="text-2xl font-serif text-[#2E2017] mb-4">v1.0.0 — Initial Release</h3>
             <ul className="list-disc pl-5 text-[#A08878] space-y-2">
               <li>Launched the Re.Focus method timer.</li>
               <li>Published the first 5 articles in The Journal.</li>
             </ul>
          </div>
        </div>
      </main>
    </div>

    <MegaFooter />
  </div>
  )
}

export default Changelog