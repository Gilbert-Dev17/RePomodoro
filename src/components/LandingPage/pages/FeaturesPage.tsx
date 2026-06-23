import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import FeaturesStickyStack from '../FeaturesStickyStack'
import Link from 'next/link'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {faqs} from "@/config/constants/landingPage/FAQ";
import {researchQuotes} from "@/config/constants/landingPage/researchQuotes";


const FeaturesPage = () => {

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
              {researchQuotes.map((quote) => (
                 <div key={quote.id} className="flex flex-col justify-between">
                    <p className="text-lg font-medium italic text-[#EADDCF] mb-6">{quote.quote}</p>
                    <p className="text-xs text-[#A08878] font-bold tracking-widest uppercase">{quote.source}</p>
                  </div>
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
          <section id="faq" className="scroll-mt-32 mb-32">
            <h2 className="text-4xl md:text-5xl font-medium italic tracking-tight mb-10 text-[#2E2017]">
              Frequently asked questions
            </h2>
            <div className="flex flex-col border-t border-[#E1D4C5]">
              <Accordion
                type="single"
                collapsible
                className="w-full">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.question}>
                    <AccordionTrigger className="items-start text-xl font-serif text-[#2E2017] hover:text-[#C9523A] transition-colors pr-8 [&>svg]:mt-1">
                        {faq.question}
                      </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-[#A08878] leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

        </main>
      </div>
    </div>
  )
}

export default FeaturesPage