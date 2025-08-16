import React from 'react'
import { DarkMode } from '@/components/layout/DarkMode';
import { ScrollText, Repeat } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SettingsButton from '@/components/settings/SettingsButtons';
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";
import { Label } from '@/components/ui/label';

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center">
        {/* Title */}
        <div className="text-center flex">
          <Label className="text-3xl font-bold">RePomodoro</Label>
        </div>

        {/* Utility Buttons */}
        <Card className="flex items-center gap-3 flex-row p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" title="History">
                <ScrollText size={18} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>History</p>
            </TooltipContent>
          </Tooltip>

          <SettingsButton />

          <DarkMode />
        </Card>
      </header>
  )
}

export default Header