# 🍅 RePomodoro

> Work on your terms. Rest what you've earned.

RePomodoro flips the classic Pomodoro technique on its head. Instead of locking yourself into rigid 25-minute intervals, **you decide how long you focus** — and your break is automatically calculated as **1/3 of your work time**.

Work for 60 minutes → earn 20 minutes of rest.  
Work for 30 minutes → earn 10 minutes of rest.  
Flow naturally, then be rewarded proportionally.

**Live demo → [re-pomodoro.vercel.app](https://re-pomodoro.vercel.app)**

---

## Why RePomodoro?

The traditional Pomodoro technique works great for some, but the fixed 25-minute window can feel arbitrary — especially for deep work sessions like coding, writing, or studying where getting into flow takes time. RePomodoro lets you ride that flow, then rewards your effort with a rest period that scales with how hard you worked.

| Traditional Pomodoro | RePomodoro |
|---|---|
| Fixed 25-min work intervals | You set the work duration |
| Fixed 5-min breaks | Break = 1/3 of work time |
| Interrupts deep work | Respects your flow state |
| One-size-fits-all | Scales with your session |

---

## The Science Behind 1/3

RePomodoro's rest ratio isn't a guess. A study by the **Draugiem Group** found
that the most productive workers followed a roughly **52-minutes-of-work to
17-minutes-of-rest** pattern — nearly exactly a 1:3 ratio. Researchers
attributed this to how the brain naturally cycles: about an hour of high
energy, followed by 15–20 minutes of lower energy.

RePomodoro is built around this insight. Whatever your work duration,
your earned rest is always **1/3 of that time** — scaling naturally with
how long you actually worked.

> Source: ["The Perfect Amount of Time to Work Each Day"](https://www.globalleadership.org/article/the-perfect-amount-of-time-to-work-each-day) — Travis Bradberry, TalentSmart

---

## Features

- **Proportional rest** — break duration is always 1/3 of your work session
- **Flexible focus timer** — set any work duration that suits your session
- **Sound notifications** — audio cues when work and rest periods end
- **Clean, distraction-free UI** — built to keep you focused, not fidgeting

---

## Tech Stack

- **Framework** — [Next.js](https://nextjs.org) (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS + [shadcn/ui](https://ui.shadcn.com)
- **State Management** — Zustand (`/store`)
- **Deployment** — Vercel

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

---

## Project Structure

```
RePomodoro/
├── app/              # Next.js App Router pages and layouts
├── components/       # Reusable UI components
├── lib/              # Utility functions and helpers
├── store/            # Zustand state management
├── sounds-libary/    # Audio assets for timer notifications
└── public/           # Static assets
```

---

## How the Math Works

```
Rest Duration = Work Duration ÷ 3

Examples:
  15 min work  →  5 min rest
  30 min work  →  10 min rest
  60 min work  →  20 min rest
  90 min work  →  30 min rest
```

---

## Status

🚧 **In progress** — core timer is functional, more features on the way.

---

## License

MIT
