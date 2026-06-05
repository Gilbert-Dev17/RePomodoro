'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { PrimaryButton } from '../ui/PrimaryButton'

const NAV_LINKS = [
  { label: 'Philosophy', href: '/#philosophy' },
  { label: 'Features', href: '/#features' },
  { label: 'The Journal', href: '/journal' },
  { label: 'About Us', href: '/about' },
]

export function MarketingNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#F6EEE5]">
      <nav
        className="max-w-7xl w-full mx-auto px-6 py-4 flex justify-between items-center relative"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-medium italic text-2xl tracking-tight text-[#111111] hover:opacity-70 transition-opacity"
        >
          Re.Focus
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/login"
            className="text-sm font-medium text-[#A08878] hover:text-[#2E2017] transition-colors"
          >
            Log in
          </Link>
          <Link href="/app">
            <PrimaryButton icon>Start a session</PrimaryButton>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(prev => !prev)}
          className="lg:hidden text-[#2E2017] hover:opacity-70 transition-opacity"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            role="menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-[#F6EEE5] shadow-xl py-6 px-6 flex flex-col gap-6 z-40"
          >
            {NAV_LINKS.map(item => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="text-left text-lg font-medium text-[#2E2017] hover:text-[#C9523A] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <hr className="border-[#F6EEE5]" />
            <Link
              href="/login"
              role="menuitem"
              onClick={() => setIsOpen(false)}
              className="text-left text-lg font-medium text-[#A08878]"
            >
              Log in / Sign up
            </Link>
            <Link href="/app" onClick={() => setIsOpen(false)}>
              <PrimaryButton variant="filled" icon className="w-full justify-center py-3">
                Start a session
              </PrimaryButton>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}