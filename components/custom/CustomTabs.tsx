'use client';
import React from 'react';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import FocusMode from './FocusMode';
import ShortBreak from './ShortBreak';
import LongBreak from './LongBreak';
import ClassicMode from './ClassicMode';
import { useSettingsStore } from '@/store/useSettingsStore';
import ModeToggle from './ModeToggle';

const CustomTabs = () => {
  const mode = useSettingsStore((state) => state.mode);

  return (
    <section className="flex flex-col items-center justify-center gap-4 w-[400px]">
      <Tabs defaultValue="focus" className="w-full flex flex-col items-center justify-center ">
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
