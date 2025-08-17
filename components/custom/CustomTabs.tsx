'use client'
import React, { useState, useEffect } from 'react'
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"
import ShortBreak from '../timers/ShortBreak'
import LongBreak from '../timers/LongBreak'
import TimerDisplay from '../timers/TimerDisplay'
import { useSettingsStore } from '@/store/useSettingsStore'
import { useTimerStore } from '@/store/useTimerStore'

const CustomTabs = () => {
  const mode = useSettingsStore((state) => state.mode)
  const [selectedTab, setSelectedTab] = useState('focus')
  const {isRunning} = useTimerStore()

  useEffect(() => {
    if (mode !== 'classic' && selectedTab === 'long') {
      setSelectedTab('focus')
    }
  }, [mode, selectedTab])

  return (
    <section className="flex flex-col items-center justify-center w-full max-w-lg px-4">
      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        defaultValue="focus"
        className="w-full flex flex-col items-center"
      >
        <TabsList className="bg-muted text-muted-foreground flex justify-center w-full gap-2 sm:gap-4 flex-wrap">
          <TabsTrigger value="focus">
            {mode === 'classic' ? 'Pomodoro' : 'RePomodoro'}
          </TabsTrigger>
          <TabsTrigger value="short">
            {mode === 'classic' ? 'Short Break' : 'Break'}
          </TabsTrigger>
          {mode === 'classic' && (
            <TabsTrigger value="long">Long Break</TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="focus" className="flex justify-center w-full">
          <TimerDisplay />
        </TabsContent>

        <TabsContent value="short" className="flex justify-center w-full">
          <ShortBreak />
        </TabsContent>

        {mode === 'classic' && (
          <TabsContent value="long" className="flex justify-center w-full">
            <LongBreak />
          </TabsContent>
        )}
      </Tabs>
    </section>
  )
}

export default CustomTabs
