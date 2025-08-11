'use client';

import React from 'react';
import CustomTabs from '@/components/custom/CustomTabs';
import ButtonControls from '@/components/custom/ButtonControls';
import Header from '@/components/layout/Header';

const Page = () => {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Timer Section */}
      <section className="flex flex-col justify-center items-center gap-8">
        {/* Custom Tabs */}
        <CustomTabs />

        {/* Controls */}
        <ButtonControls />
      </section>
    </main>
  );
}

export default Page;
