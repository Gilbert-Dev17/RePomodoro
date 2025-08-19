'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { FileQuestion } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
  DialogTrigger, DialogFooter, DialogClose
} from "@/components/ui/dialog";
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from "@/components/ui/scroll-area";

const HowTo = () => {
  return (
    <Dialog>
      {/* Trigger with Tooltip */}
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="How to use RePomodoro"
            >
              <FileQuestion size={18} />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>How to use</TooltipContent>
      </Tooltip>

      {/* Dialog Content */}
      <DialogContent aria-label="How to Use">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileQuestion size={16} /> How to Use RePomodoro
          </DialogTitle>
          <Separator />
        </DialogHeader>

        {/* Scrollable Content */}
        <ScrollArea className="max-h-[60vh] pr-2">
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              <strong>RePomodoro</strong> is a productivity timer that helps you
              manage focus and breaks with two modes:
            </p>

            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Choose a Mode</strong>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    <span className="font-medium">Pomodoro Mode</span> – Work
                    for a set duration (e.g., 30 min), then take a break.
                  </li>
                  <li>
                    <span className="font-medium">Reverse Mode</span> – Enter
                    your available time, and the app calculates work & break
                    cycles for you.
                    <br />
                    The rule is simple:{" "}
                    <em>for every 1 hour of focused work, you earn 20 minutes of break</em>{" "}
                    (or one-third of your work time).
                    <br />
                    Example: 30 minutes of work → 10 minutes of break.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Start the Timer</strong> – Press <em>Start</em> to begin.
                The countdown runs according to your settings.
              </li>

              <li>
                <strong>Stay on Track</strong> – The display shows your remaining
                time. In Reverse Mode, break times are auto-calculated.
              </li>

              <li>
                <strong>Take Breaks</strong> – When a session ends, follow the
                break timer to recharge before the next round.
              </li>

              <li>
                <strong>Adjust Settings</strong> – Customize durations, sound
                alerts, and themes anytime in <em>Settings</em>.
              </li>
            </ol>

            <p className="text-muted-foreground text-xs">
              💡 Tip: Use <span className="font-medium">Pomodoro</span> for
              structured study/work sessions, and{" "}
              <span className="font-medium">Reverse Mode</span> when you only
              know your total available time.
            </p>
          </div>
        </ScrollArea>

        {/* Footer */}
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Got it
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HowTo;
