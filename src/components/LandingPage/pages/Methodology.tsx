import { ArrowRight } from 'lucide-react'
import { MegaFooter } from '../layout/MegaFooter'
import {
  methodologyHero,
  methodFormula,
  methodologyPrinciple,
  useCases,
  developerInfo,
  originStory,
  originGoal,
} from '@/config/constants/landingPage/methodology'

const MethodologyPage = () => {
  return (
   <div id="methodology" className="min-h-full flex flex-col bg-white text-[#2E2017] animate-[fadeIn_0.4s_ease-out]">

    <div className="max-w-[90rem] mx-auto px-6 relative flex items-start justify-center w-full">
      <div className="hidden xl:block absolute left-6 2xl:left-12 top-0 bottom-0 w-56">
      </div>

      <main className="w-full max-w-4xl pt-24 pb-32 flex flex-col gap-24 z-10 border-t border-[#F6EEE5] xl:border-t-0">

        {/* About Hero / Context Problem Hook */}
        <section className="text-center pt-8">
          <h1 className="text-5xl md:text-6xl font-medium italic tracking-tight mb-12 text-[#2E2017]">
            {methodologyHero.heading.split('<br className="hidden md:block" />').map((part, i) => (
              <span key={i}>
                {part}
                {i === 0 && <br className="hidden md:block" />}
              </span>
            ))}
          </h1>
          <p className="text-2xl md:text-3xl text-[#2E2017] leading-relaxed font-serif italic">
            "{methodologyHero.quote}"
          </p>
        </section>

        <hr className="border-[#F0E8DF]" />

        {/* ── THE METHOD ── */}
        <section className="grid md:grid-cols-[180px_1fr] gap-12 items-start">
          <p className="text-sm font-bold tracking-widest uppercase text-[#A08878] pt-1">
            The method
          </p>
          <div>
            <p className="text-lg text-[#A08878] leading-relaxed mb-8">
              {methodFormula.description}
            </p>

            {/* Formula */}
            <div className="flex items-baseline gap-4 mb-8 pl-6 border-l-[3px] border-[#C9523A]">
              <span className="font-mono text-sm text-[#A08878] tracking-wider">{methodFormula.focusTime}</span>
              <span className="text-[#C9523A] text-lg">→</span>
              <span className="font-serif text-2xl font-bold text-[#2E2017]">{methodFormula.restTime}</span>
            </div>

            <p className="text-lg text-[#A08878] leading-relaxed mb-5">
              {methodFormula.detail}
            </p>
          </div>
        </section>

        {/* ── FULL-WIDTH DARK PULL QUOTE ── */}
        <section className="bg-[#2E2017] w-full py-24 px-10 rounded-[2.5rem]">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-3xl md:text-4xl font-medium italic text-[#FAF6EF] leading-snug mb-6">
              "{methodologyPrinciple}"
            </p>
            <p className="text-sm font-bold tracking-widest uppercase text-[#A08878]">
              The Re.Focus principle
            </p>
          </div>
        </section>

        {/* ── WHO IT'S FOR ── */}
        <section>
          <div className="mb-14">
            <p className="text-sm font-bold tracking-widest uppercase text-[#C9523A] mb-3">
              Who it's for
            </p>
            <h2 className="text-4xl font-medium italic tracking-tight text-[#2E2017]">
              Built for deep work.
            </h2>
          </div>

          {useCases.map((item, i) => (
            <div key={i}>
              <div className="py-10 grid grid-cols-[48px_1fr] md:grid-cols-[48px_200px_1fr] gap-6 md:gap-10 items-start">
                <span className="font-mono text-sm text-[#C9523A] pt-1">{item.n}</span>
                <h3 className="text-xl font-medium text-[#2E2017]">{item.title}</h3>
                <p className="text-[#A08878] leading-relaxed col-span-1 md:col-span-1">{item.body}</p>
              </div>
              {i < useCases.length - 1 && <hr className="border-[#F0E8DF]" />}
            </div>
          ))}
        </section>

        <hr className="border-[#F0E8DF]" />

        {/* ── ORIGIN / BUILDER ── */}
        <section className="grid md:grid-cols-[180px_1fr] gap-12 items-start">
          <p className="text-sm font-bold tracking-widest uppercase text-[#A08878] pt-1">
            Origin
          </p>
          <div>
            <p className="text-lg text-[#A08878] leading-relaxed mb-5">
              {originStory}
            </p>
            <p className="text-lg text-[#A08878] leading-relaxed mb-12">
              {originGoal}
            </p>

            {/* Closing CTA */}
            <div className="bg-[#FAF6EF] p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#F6EEE5]">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#EADDCF] flex items-center justify-center text-[#C9523A] font-bold font-serif text-lg border-2 border-white shadow-sm">
                    {developerInfo.initials}
                  </div>
                  <div>
                    <p className="font-medium text-[#2E2017] text-sm">{developerInfo.name}</p>
                    <p className="text-[#A08878] text-xs">{developerInfo.role} · {developerInfo.location}</p>
                  </div>
               </div>
               {/* <PrimaryButton onClick={() => {}} variant="filled">Start your session</PrimaryButton> */}
            </div>
          </div>
        </section>

      </main>
    </div>

    <MegaFooter />
  </div>
  )
}

export default MethodologyPage