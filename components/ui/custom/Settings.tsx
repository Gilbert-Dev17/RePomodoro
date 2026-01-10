'use client'

import React, {useEffect, useState} from 'react'
import { Clock, Settings} from 'lucide-react'
import { Switch } from '../switch'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../button'
import { Label } from '../label'
import { Input } from '../input'
// !! change the defaults once done.

const SettingsButton = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button
                className="fixed bottom-4 right-4 z-50 rounded-full p-0 shadow-lg hover:bg-accent"
                aria-label="Settings"
                title="Settings"
                >
                <Settings className="h-10 w-10" />
            </Button>
        </DialogTrigger>
        <DialogContent style={{ fontFamily: 'var(--font-poppins)' }} className="max-w-md">
            <DialogHeader>
                <DialogTitle className='text-tertiary'> <Clock className="h-10 w-10" /> Settings</DialogTitle>
                <DialogDescription className='flex flex-col'>
                    <main className='grid-cols-3'>
                        <section className='flex flex-col'>
                            <Label htmlFor='pomodoro-duration' className='mb-2'>Work Minutes:</Label>
                            <Input type='number' id='pomodoro-duration' defaultValue={30} min={5} max={90} step={5} className='mb-4'/>
                        </section>
                        <section className='flex flex-col'>
                            <Label htmlFor='pomodoro-duration' className='mb-2'>Break Minutes:</Label>
                            <Input type='number' id='pomodoro-duration' defaultValue={30} min={5} max={90} step={5} className='mb-4'/>
                        </section>
                        <section className='flex flex-col'>
                            <Label htmlFor='pomodoro-duration' className='mb-2'>Break Intervals:</Label>
                            <Input type='number' id='pomodoro-duration' defaultValue={30} min={5} max={90} step={5} className='mb-4'/>
                        </section>
                    </main>

                    <section>
                        <Label htmlFor='auto-start' className='mb-2'>Auto-Start Next Session:</Label>
                        <Switch id='auto-start' defaultChecked />
                    </section>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default SettingsButton