import { useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import FeaturesStickyStack from './legalPages/FeaturesStickyStack'
import Link from 'next/link'

// --- Types ---

interface Faq {
  q: string
  a: string
}

interface ResearchQuote {
  quote: string
  source: string
}

// --- Data ---

const faqs: Faq[] = [
  {
    q: 'What if I stop working before the timer finishes?',
    a: 'There is no countdown timer to finish. Re.Focus uses a stopwatch that counts up. You stop when you naturally lose focus, and it calculates your earned break based on your actual effort.',
  },
  {
    q: 'Do I need to sign up to use it?',
    a: 'No. You can start a session immediately without creating an account. Sign up is only required if you want to save your session history and track your streaks over time.',
  },
  {
    q: 'Where does the 1 hr = 20 min formula come from?',
    a: "It's derived from a synthesis of DeskTime's 52:17 rule, Nathaniel Kleitman's Ultradian rhythms, and Mihaly Csikszentmihalyi's flow state research—equating to roughly a 3:1 biological ratio of work to rest.",
  },
  {
    q: 'How is this different from Forest or Pomofocus?',
    a: 'Traditional apps lock you into rigid 25-minute countdowns. Re.Focus tracks your natural workflow and rewards you with proportional rest, actively protecting your flow states rather than interrupting them.',
  },
  {
    q: 'Is my session history saved?',
    a: 'Yes. Once you create a free account, your session history, earned breaks, and daily streaks are securely saved to the cloud.',
  },
]

const researchQuotes: ResearchQuote[] = [
  {
    quote: '"The top 10% of performers worked for exactly 52 minutes, then rested 17."',
    source: '— DeskTime',
  },
  {
    quote: '"It takes 10–15 min just to enter a flow state. Short timers kill concentration."',
    source: '— Csikszentmihalyi',
  },
  {
    quote: '"The brain operates optimally in 90-minute focus cycles."',
    source: '— N. Kleitman',
  },
]

// --- Sub-components ---

const ResearchQuoteCard = ({ quote, source }: ResearchQuote) => (
  <div className="flex flex-col justify-between">
    <p className="text-lg font-medium italic text-[#EADDCF] mb-6">{quote}</p>
    <p className="text-xs text-[#A08878] font-bold tracking-widest uppercase">{source}</p>
  </div>
)

interface FaqItemProps {
  faq: Faq
  isOpen: boolean
  onToggle: () => void
}

const FaqItem = ({ faq, isOpen, onToggle }: FaqItemProps) => (
  <div className="border-b border-[#E1D4C5]">
    <button
      onClick={onToggle}
      className="w-full py-6 flex justify-between items-center text-left transition-colors group"
      aria-expanded={isOpen}
    >
      <span className="text-xl font-serif text-[#2E2017] group-hover:text-[#C9523A] transition-colors pr-8">
        {faq.q}
      </span>
      <ChevronDown
        size={20}
        className={`text-[#A08878] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[600px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
      <p className="text-[#A08878] leading-relaxed">{faq.a}</p>
    </div>
  </div>
)

// --- Page ---

const FeaturesPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="bg-[#FAF6EF] w-full border-t border-[#F6EEE5]">
      <div className="max-w-[90rem] mx-auto px-6 flex items-start justify-center">
        <main className="w-full max-w-4xl py-24 flex flex-col gap-32 z-10">

          {/* Philosophy */}
          <section id="philosophy" className="scroll-mt-32">
            <h2 className="text-[3rem] md:text-[4rem] font-medium italic tracking-tight leading-[1.1] text-[#2E2017] mb-8">
              Flow state doesn't fit into 25-minute boxes.
            </h2>
            <div className="prose prose-lg text-[#2E2017]">
              <p className="text-xl leading-relaxed text-[#A08878] mb-8 font-medium">
                The standard productivity techniques are broken for modern knowledge workers. Right when you
                enter that beautiful, frictionless state of "flow", the alarm demands you stop.
              </p>
              <div className="border-l-[3px] border-[#C9523A] pl-6 py-2 mb-8">
                <h3 className="text-sm font-bold tracking-widest uppercase mb-3 text-[#C9523A]">The Re.Focus Method</h3>
                <p className="text-xl leading-relaxed text-[#A08878] mb-0">
                  <strong>Work until you naturally lose focus, then take a break proportional to your effort.</strong>{' '}
                  It's a softer, more human approach to productivity that respects your flow state while ensuring
                  you still take the rest required to prevent burnout.
                </p>
              </div>
              <Link href="/about" className="text-[#C9523A] font-medium hover:text-[#2E2017] transition-colors flex items-center gap-2">
                Read our full story <ArrowRight size={16} />
              </Link>
            </div>
          </section>

          {/* Research */}
          <section className="bg-[#2E2017] rounded-[2.5rem] p-10 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-3 gap-10">
              {researchQuotes.map(({ quote, source }) => (
                <ResearchQuoteCard key={source} quote={quote} source={source} />
              ))}
            </div>
          </section>

          {/* Features */}
          <section id="features" className="scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-medium italic tracking-tight mb-4 text-[#2E2017]">
                Tools for deep work.
              </h2>
              <p className="text-lg text-[#A08878]">Everything you need to stay in the zone, arranged beautifully.</p>
            </motion.div>
            <FeaturesStickyStack />
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-32">
            <h2 className="text-4xl md:text-5xl font-medium italic tracking-tight mb-10 text-[#2E2017]">
              Frequently asked questions
            </h2>
            <div className="flex flex-col border-t border-[#E1D4C5]">
              {faqs.map((faq, i) => (
                <FaqItem
                  key={faq.q}
                  faq={faq}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  )
}

export default FeaturesPage