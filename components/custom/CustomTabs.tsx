'use client';

import React, {useState, useEffect} from 'react';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import FocusMode from '../timers/FocusMode';
import ShortBreak from '../timers/ShortBreak';
import LongBreak from '../timers/LongBreak';
import ClassicMode from '../timers/ClassicMode';
import { useSettingsStore } from '@/store/useSettingsStore';
import ModeToggle from './ModeToggle';

const CustomTabs = () => {
  const mode = useSettingsStore((state) => state.mode);
  const [selectedTab, setSelectedTab] = useState('focus');

  useEffect(() => {
  if (mode !== 'classic' && selectedTab === 'long') {
      setSelectedTab('focus');
    }
  }, [mode, selectedTab]);

  return (
    <section className="flex flex-col items-center justify-center gap-4 w-[400px]">
      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        defaultValue="focus"
        className="w-full flex flex-col items-center justify-center ">
        <TabsList className="bg-muted text-muted-foreground flex justify-center w-full gap-4">
          <TabsTrigger value="focus">
            {mode === 'classic' ? 'Classic Mode' : 'Focus Mode'}
          </TabsTrigger>
          <TabsTrigger value="short">
            {mode === 'classic' ? 'Short Break' : 'Break'}
          </TabsTrigger>
          {mode === 'classic' && (
            <TabsTrigger value="long">Long Break</TabsTrigger>
          )}

           <ModeToggle />
        </TabsList>


        <TabsContent value="focus" className="flex justify-center w-full">
          {mode === 'classic' ? <ClassicMode /> : <FocusMode />}
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
  );
};

export default CustomTabs;
