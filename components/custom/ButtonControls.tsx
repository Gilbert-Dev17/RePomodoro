import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRightToLine } from 'lucide-react'
import { useTimerStore } from '@/store/useTimerStore'

const ButtonControls = () => {
  const { start, pause, reset, isRunning } = useTimerStore();

  return (
    <section className="flex flex-wrap justify-center items-center gap-4 mt-6">
      {isRunning ? (
        <>
          <Button
            variant="secondary"
            size="lg"
            className="px-6 py-3 text-base sm:text-lg md:text-xl"
            onClick={pause}
          >
            PAUSE
          </Button>
          <Button
            variant="destructive"
            size="icon"
            // className=" sm:w-12 sm:h-12"
            onClick={reset}
          >
            <ArrowRightToLine />
          </Button>
        </>
      ) : (
        <Button
          variant="default"
          size="lg"
          className="font-bold px-8 py-4 text-xl sm:text-2xl"
          onClick={start}
        >
          START
        </Button>
      )}
    </section>
  )
}

export default ButtonControls
