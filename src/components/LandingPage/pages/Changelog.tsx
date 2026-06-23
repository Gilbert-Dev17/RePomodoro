import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { MegaFooter } from '../layout/MegaFooter'
import { changelog } from '@/config/constants/landingPage/changelog'

const Changelog = () => {
  return (
   <div id="changelog" className="min-h-full flex flex-col bg-white text-[#2E2017] animate-[fadeIn_0.4s_ease-out]">

    <div className="max-w-[90rem] mx-auto px-6 relative flex items-start justify-center w-full border-t border-[#F6EEE5] xl:border-t-0">
      <div className="hidden xl:block absolute left-6 2xl:left-12 top-0 bottom-0 w-56">
        {/* <FloatingSidebar navigate={navigate} activePage="changelog" /> */}
      </div>

      <main className="w-full max-w-3xl pt-12 pb-32 z-10 flex-1">
        <Link href="/">
          <button
            className="flex items-center gap-2 text-[#A08878] hover:text-[#C9523A] transition-colors mb-10 font-medium w-fit"
          >
            <ArrowLeft size={16} /> Back to Home
          </button>
        </Link>

        <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-12 text-[#2E2017]">Changelog</h1>

        <div className="flex flex-col gap-12">
          {changelog.map((entry, index) => (
            <div key={entry.version} className="relative pl-8 border-l-2 border-[#F6EEE5]">
              <div
                className="absolute w-3 h-3 rounded-full -left-[7px] top-2"
                style={{ backgroundColor: entry.dotColor }}
              ></div>
              <p className="text-sm font-bold tracking-widest uppercase text-[#C9523A] mb-2">{entry.date}</p>
              <h3 className="text-2xl font-serif text-[#2E2017] mb-4">v{entry.version} — {entry.title}</h3>
              <ul className="list-disc pl-5 text-[#A08878] space-y-2">
                {entry.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>

    <MegaFooter />
  </div>
  )
}

export default Changelog