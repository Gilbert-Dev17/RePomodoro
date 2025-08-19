'use client';

import React from 'react'
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
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" title="How to use">
              <FileQuestion size={18} />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>How to?</TooltipContent>
      </Tooltip>

      <DialogContent aria-label="How to Use">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileQuestion size={16} /> How to Use RePomodoro
          </DialogTitle>
          <Separator />
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-2">
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              <strong>RePomodoro</strong> is a productivity timer that lets you
              choose between <em>Pomodoro Mode</em> and <em>Reverse Mode</em> to
              manage focus and break times.
            </p>

            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Choose a Mode</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    <span className="font-medium">Pomodoro Mode</span> – Work
                    for a set duration (e.g., 25 min), then take a break.
                  </li>
                  <li>
                    <span className="font-medium">Reverse Mode</span> – Start
                    with your available time. The app calculates optimal break
                    times for you.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Start the Timer</strong>
                Press <em>Start</em> to begin. The countdown will run based on
                your chosen settings.
              </li>

              <li>
                <strong>Stay on Track</strong>
                The display shows your remaining time. In Reverse Mode, your
                break duration is automatically displayed.
              </li>

              <li>
                <strong>Take Breaks</strong>
                When a session ends, follow the timer’s break instructions to
                recharge before continuing.
              </li>

              <li>
                <strong>Adjust Settings</strong>
                Open <em>Settings</em> to change durations, sound alerts, and
                theme preferences anytime.
              </li>
            </ol>

            <p className="text-muted-foreground text-xs">
              💡 Tip: Use Pomodoro for structured study/work sessions and
              Reverse Mode when you only know your total available time.
            </p>
          </div>
        </ScrollArea>

        <DialogFooter>
            <DialogClose asChild>
                <Button type="button" variant="secondary">Got it</Button>
            </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HowTo;
