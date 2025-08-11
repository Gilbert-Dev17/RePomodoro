import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRightToLine } from 'lucide-react';
import { useTimerStore } from '@/store/useTimerStore';

const ButtonControls = () => {
  const { start, pause, reset, isRunning } = useTimerStore();

  return (
    <section className="flex gap-4">
      {isRunning ? (
        <>
          <Button
            variant="secondary"
            size="lg"
            onClick={pause}
          >
            PAUSE
          </Button>
          <Button
            variant="destructive"
            size="icon"
            onClick={reset}
          >
            <ArrowRightToLine />
          </Button>
        </>
      ) : (
        <Button
          variant="default"
          size="lg"
          className="font-bold p-8 text-2xl"
          onClick={start}
        >
          START
        </Button>
      )}
    </section>
  );
};

export default ButtonControls;
