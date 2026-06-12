import { ArrowRight } from 'lucide-react'
import { MegaFooter } from '../layout/MegaFooter'

const MethodologyPage = () => {
  return (
   <div className="min-h-full flex flex-col bg-white text-[#2E2017] animate-[fadeIn_0.4s_ease-out]">

    <div className="max-w-[90rem] mx-auto px-6 relative flex items-start justify-center w-full">
      <div className="hidden xl:block absolute left-6 2xl:left-12 top-0 bottom-0 w-56">
        {/* <FloatingSidebar navigate={navigate} activePage="about" /> */}
      </div>

      <main className="w-full max-w-4xl pt-24 pb-32 flex flex-col gap-24 z-10 border-t border-[#F6EEE5] xl:border-t-0">

        {/* About Hero / Context Problem Hook */}
        <section className="text-center pt-8">
          <h1 className="text-5xl md:text-6xl font-medium italic tracking-tight mb-12 text-[#2E2017]">
            A timer that takes <br className="hidden md:block" /> deep work seriously.
          </h1>
          <p className="text-2xl md:text-3xl text-[#2E2017] leading-relaxed font-serif italic">
            "When you're architecting a system, writing a critical section, or solving a hard
            design problem, you can spend 15 minutes just loading the context into working
            memory. A 25-minute alarm doesn't interrupt your task — it interrupts your
            thinking. Re.Focus was built to fix that."
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
              The Re.Focus model is simple. Work freely — without a countdown creating
              background anxiety. When you're done, your earned break is waiting.
            </p>

            {/* Formula */}
            <div className="flex items-baseline gap-4 mb-8 pl-6 border-l-[3px] border-[#C9523A]">
              <span className="font-mono text-sm text-[#A08878] tracking-wider">1 hr focus</span>
              <span className="text-[#C9523A] text-lg">→</span>
              <span className="font-serif text-2xl font-bold text-[#2E2017]">20 min rest</span>
            </div>

            <p className="text-lg text-[#A08878] leading-relaxed mb-5">
              This ratio — roughly 1 minute of rest per 5 minutes of focus — is backed by
              data from DeskTime's study of 5.5 million workers, Nathaniel Kleitman's research
              on ultradian rhythms, and Mihaly Csikszentmihalyi's work on flow states.
            </p>
            <button
              // onClick={() => {}}
              className="text-[#C9523A] font-medium hover:text-[#2E2017] transition-colors flex items-center gap-2 text-sm"
            >
              Read the full research <ArrowRight size={14} />
            </button>
          </div>
        </section>

        {/* ── FULL-WIDTH DARK PULL QUOTE ── */}
        <section className="bg-[#2E2017] w-full py-24 px-10 rounded-[2.5rem]">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-3xl md:text-4xl font-medium italic text-[#FAF6EF] leading-snug mb-6">
              "Work until you naturally lose focus. Rest what you've earned. Then go again."
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

          {[
            {
              n: "01",
              title: "Software developers",
              body: "Loading a complex codebase into working memory takes time. Re.Focus protects your flow so you can architect, debug, and ship without an alarm cutting your concentration at the worst moment.",
            },
            {
              n: "02",
              title: "Students & researchers",
              body: "Whether synthesizing data for a thesis or reviewing for high-stakes exams, track your longest study blocks and earn proportional rest — so you can sustain focus across a full day without burning out.",
            },
            {
              n: "03",
              title: "UI/UX designers",
              body: "Creative work doesn't operate on a rigid schedule. Stay on the canvas as long as inspiration is flowing. Let the app handle the math on your break while you handle the craft.",
            },
            {
              n: "04",
              title: "Writers",
              body: "Escape the anxiety of a counting-down clock. Draft freely until you reach a natural stopping point — then rest knowing you've genuinely earned it.",
            },
          ].map((item, i) => (
            <div key={i}>
              <div className="py-10 grid grid-cols-[48px_1fr] md:grid-cols-[48px_200px_1fr] gap-6 md:gap-10 items-start">
                <span className="font-mono text-sm text-[#C9523A] pt-1">{item.n}</span>
                <h3 className="text-xl font-medium text-[#2E2017]">{item.title}</h3>
                <p className="text-[#A08878] leading-relaxed col-span-1 md:col-span-1">{item.body}</p>
              </div>
              {i < 3 && <hr className="border-[#F0E8DF]" />}
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
              Re.Focus is a project made for my girlfriend, as when she is reviewing or
              coming activitis, quizzes, or exams. She gets burnt as the amount of breaktime
              she gets isn't enough with the classic Pomodoro timer. So I thought why not
              create a pomodoro but is an inverse of it.
            </p>
            <p className="text-lg text-[#A08878] leading-relaxed mb-12">
              The goal is simple: build the timer, that is instead of
            </p>

            {/* Closing CTA */}
            <div className="bg-[#FAF6EF] p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#F6EEE5]">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#EADDCF] flex items-center justify-center text-[#C9523A] font-bold font-serif text-lg border-2 border-white shadow-sm">
                    G
                  </div>
                  <div>
                    <p className="font-medium text-[#2E2017] text-sm">Gilbert</p>
                    <p className="text-[#A08878] text-xs">Developer · Tarlac City, PH</p>
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