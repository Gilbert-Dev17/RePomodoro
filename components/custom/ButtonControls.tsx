import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRightToLine } from 'lucide-react'
import { useTimerStore } from '@/store/useTimerStore'
import { useSettingsStore } from '@/store/useSettingsStore'

const ButtonControls = () => {
  const { start, pause, skip, isRunning } = useTimerStore();
  const { mode } = useSettingsStore();

  // Ensure the button controls are only rendered when the mode is set
  if (!mode) return null;

  // Adjust button text based on mode
  const buttonText = mode === 'classic' ? 'START' : 'RESTART';
  const buttonText2 = mode === 'classic' ? 'PAUSE' : 'BREAK';

  const buttonFunction = mode === 'classic' ? pause : skip;

  return (
      <section className="flex flex-wrap justify-center items-center gap-4 mt-6">
        {isRunning ? (
          <>
            <Button
              variant="secondary"
              size="lg"
              className="px-6 py-3 font-bold text-base sm:text-lg md:text-xl"
              onClick={buttonFunction}
            >
              {buttonText2}
            </Button>
            {mode === 'classic' ? (
              <Button
                variant="destructive"
                size="icon"
                className="text-lg sm:text-xl"
                onClick={() => {
                  // reset();
                  skip();
                }
              }
              >
                <ArrowRightToLine />
              </Button>
              ): (
                null
              )
            }

          </>
        ) : (
          <Button
            variant="default"
            size="lg"
            className="font-bold px-8 py-4 text-xl sm:text-2xl"
            onClick={start}
          >
            {buttonText}
          </Button>
        )}
      </section>
  )

}

export default ButtonControls
