'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Philosophy', id: 'philosophy', href: '#philosophy' },
  { label: 'Features',   id: 'features',   href: '#features' },
  { label: 'FAQ',        id: 'faq',        href: '#faq' },
]

export function FloatingSidebar() {
  const [isPastHero, setIsPastHero]     = useState(false)
  const [activeSection, setActiveSection] = useState('philosophy')
  const intersectingRef                 = useRef(new Set<string>())

  // Show/hide: watch the hero section
  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsPastHero(!entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  // Active link: track which sections are visible, pick the topmost
  useEffect(() => {
    const elements = NAV_LINKS
      .map(l => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) intersectingRef.current.add(entry.target.id)
          else intersectingRef.current.delete(entry.target.id)
        })
        // NAV_LINKS is ordered top-to-bottom, so first match = topmost
        const active = NAV_LINKS.find(l => intersectingRef.current.has(l.id))
        if (active) setActiveSection(active.id)
      },
      { threshold: 0.3 }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <AnimatePresence>
      {isPastHero && (
        <motion.aside
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          aria-label="Sidebar navigation"
          className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-50 w-48 flex-col gap-6"
        >
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map(link => (
              <Link
                key={link.id}
                href={link.href}
                className={`text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-[#C9523A]'
                    : 'text-[#A08878] hover:text-[#2E2017]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}