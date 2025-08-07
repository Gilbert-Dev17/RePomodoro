import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
     <main className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <header className="w-full py-6 flex justify-center items-center border-b">
        <h1 className="text-3xl font-bold tracking-tight">🕒 RePomodoro</h1>
      </header>

      {/* Main Content Section */}
      <section className="flex-1 flex flex-col justify-center items-center p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Focus Session</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6">
            {/* Timer Display */}
            <div className="text-6xl font-mono tracking-widest">00:42:13</div>
            <p className="text-muted-foreground">You're in Focus Mode</p>

            {/* Controls */}
            <div className="flex gap-4">
              <Button variant="default">Start</Button>
              <Button variant="secondary">Pause</Button>
              <Button variant="destructive">End</Button>
            </div>

            {/* Break Preview */}
            <div className="mt-6 text-center text-sm">
              <p className="text-muted-foreground">Earned Break Time:</p>
              <span className="text-xl font-semibold text-green-600">14 mins</span>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer Section */}
      <footer className="w-full py-4 flex justify-center items-center border-t text-sm text-muted-foreground">
        <div className="flex gap-6">
          <button className="hover:underline">🌗 Toggle Theme</button>
          <button className="hover:underline">📜 Session History</button>
          <button className="hover:underline">🔁 Classic Mode</button>
        </div>
      </footer>
    </main>
  )
}

export default Page