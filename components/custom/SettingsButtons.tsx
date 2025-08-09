import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Settings } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const SettingsButton = () => {
  const [focusTime, setFocusTime] = useState(60); // minutes
  const [shortBreak, setShortBreak] = useState(5); // minutes
  const [longBreak, setLongBreak] = useState(15); // minutes

  const handleSave = () => {
    console.log({ focusTime, shortBreak, longBreak });
    // Save logic here (LocalStorage, Context, etc.)
  };

  const handleReset = () => {
    setFocusTime(60);
    setShortBreak(5);
    setLongBreak(15);
  };

  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" title="Settings">
              <Settings size={18} />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>Settings</p>
        </TooltipContent>
      </Tooltip>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Adjust your timer preferences below.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-6">
          {/* Focus Time */}
          <div>
            <Label htmlFor="focusTime">Focus Time (minutes)</Label>
            <Input
              id="focusTime"
              type="number"
              value={focusTime}
              onChange={(e) => setFocusTime(Number(e.target.value))}
              min={1}
            />
          </div>

          {/* Break Times */}
          <div>
            <Label htmlFor="shortBreak">Short Break (minutes)</Label>
            <Input
              id="shortBreak"
              type="number"
              value={shortBreak}
              onChange={(e) => setShortBreak(Number(e.target.value))}
              min={1}
            />
          </div>

          <div>
            <Label htmlFor="longBreak">Long Break (minutes)</Label>
            <Input
              id="longBreak"
              type="number"
              value={longBreak}
              onChange={(e) => setLongBreak(Number(e.target.value))}
              min={1}
            />
          </div>

          <Separator />

          {/* Future: Focus Mode selector */}
          <div>
            <Label>Focus Mode</Label>
            <p className="text-sm text-muted-foreground">
              Switch to Focus Mode for a distraction-free experience.
            </p>
          </div>
        </div>

        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <Button variant="default" onClick={handleSave}>
              Save Changes
            </Button>
          </DialogClose>
          <Button variant="secondary" onClick={handleReset}>
            Reset to Default
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsButton;
