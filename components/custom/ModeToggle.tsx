import { useSettingsStore } from '@/store/useSettingsStore';
import React from 'react';
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Repeat } from 'lucide-react';

const ModeToggle = () => {
  const mode = useSettingsStore((state) => state.mode);
  const setMode = useSettingsStore((state) => state.setMode);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          title={mode === 'classic' ? "Switch to Reverse Pomodoro" : "Switch to Classic Pomodoro"}
          onClick={() => setMode(mode === 'classic' ? 'reverse' : 'classic')}
        >
          <Repeat size={18} />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{mode === 'classic' ? "Switch to Reverse Mode" : "Switch to Classic Mode"}</p>
    </TooltipContent>

    </Tooltip>
  );
};

export default ModeToggle