import React from 'react'
import { HelpCircle } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../button'

const About = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="fixed top-4 right-4 z-50 rounded-full p-0 shadow-lg text-foreground hover:bg-accent hover:text-accent-foreground"
            aria-label="About RePomodoro"
            title="About RePomodoro"
          >
            <HelpCircle className="h-10 w-10" />
          </Button>
        </DialogTrigger>
        <DialogContent style={{ fontFamily: 'var(--font-poppins)' }} className="max-w-md">
            <DialogHeader>
                <DialogTitle className='text-tertiary'>About RePomodoro</DialogTitle>
                <DialogDescription suppressHydrationWarning>
                  <p className="mb-2">
                    RePomodoro is a productivity app that combines the Pomodoro Technique with a unique break-earning system.
                  </p>
                  <p>
                    Choose between Pomodoro Mode for focused work sessions or Repomodoro Mode to earn breaks based on your productivity.
                  </p>
                </DialogDescription>
            </DialogHeader>

              {/* <DialogHeader>
                <DialogTitle className='text-tertiary'>Why these Timings?</DialogTitle>
                <DialogDescription suppressHydrationWarning>
                  <p className="mb-2">
                    Short focus sessions (25–45 min) align with how attention naturally fluctuates, helping reduce mental fatigue.
                  </p>
                  <p>
                    Breaks proportional to effort support recovery and long‑term focus. One‑third balances rest without breaking momentum.
                  </p>
                </DialogDescription>
            </DialogHeader> */}
        </DialogContent>
    </Dialog>
  )
}

export default About