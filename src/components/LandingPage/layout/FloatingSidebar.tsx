'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'


const NAV_LINKS = [
  { label: 'Philosophy', id: 'philosophy', href: '#philosophy' },
  { label: 'Features', id: 'features', href: '#features' },
  { label: 'FAQ', id: 'faq', href: '#faq' },
]

export function FloatingSidebar() {
  const [activeSection, setActiveSection] = useState('philosophy' as string)

  useEffect(() => {
    const sections = NAV_LINKS.map(link =>
      document.getElementById(link.id)
    ).filter(Boolean)


    const observer = new IntersectionObserver(
      entries => {
        // Find the section closest to the top of the viewport
        let closest = entries[0]
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.boundingClientRect.top < closest.boundingClientRect.top) {
            closest = entry
          }
        })
        if (closest.isIntersecting) {
          setActiveSection(closest.target.id)
        }
      },
      {
        threshold: 0.1,
      }
    )

    sections.forEach(section => observer.observe(section!))

    return () => observer.disconnect()
  }, [])


  return (
    <aside className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-50 w-56 flex-col gap-10">
      <div>
        <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9523A] mb-4">
          Overview
        </h4>

        <div className="flex flex-col gap-5">
          {NAV_LINKS.map(link => (
            <Link
              key={link.id}
              href={link.href}
              className={`text-lg font-medium transition-colors ${
                activeSection === link.id
                  ? 'text-[#C9523A]'
                  : 'text-[#A08878] hover:text-[#2E2017]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}