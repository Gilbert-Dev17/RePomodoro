'use client'

import { useEffect } from 'react'
import { Label } from '@/components/ui/label'
import { Coffee } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/motion'
import { cn } from '@/lib/utils'

const WelcomePage = () => {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      // router.push('/home')
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <main className="min-h-screen flex items-center justify-center">
      <motion.div {...fadeIn()}>
        <Label
          className={cn("text-xl flex items-center font-[var(--font-poppins)] font-medium animate-pulse")}
        >
          <Coffee className="mr-1 h-10 w-10" />
          Warming things up for you...
        </Label>
      </motion.div>
    </main>
  )
}

export default WelcomePage
