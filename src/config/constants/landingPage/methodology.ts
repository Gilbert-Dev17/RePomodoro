/**
 * Methodology page constants
 * Contains data for the Re.Focus method explanation and use case information
 */

export interface UseCase {
  n: string
  title: string
  body: string
}

export interface DeveloperInfo {
  name: string
  role: string
  location: string
  initials: string
}

export const methodologyHero = {
  heading: 'A timer that takes deep work seriously.',
  quote:
    'When you\'re architecting a system, writing a critical section, or solving a hard design problem, you can spend 15 minutes just loading the context into working memory. A 25-minute alarm doesn\'t interrupt your task — it interrupts your thinking. Re.Focus was built to fix that.',
}

export const methodFormula = {
  description:
    'The Re.Focus model is simple. Work freely — without a countdown creating background anxiety. When you\'re done, your earned break is waiting.',
  focusTime: '1 hr focus',
  restTime: '20 min rest',
  detail:
    'This ratio — roughly 1 minute of rest per 5 minutes of focus — is backed by data from DeskTime\'s study of 5.5 million workers, Nathaniel Kleitman\'s research on ultradian rhythms, and Mihaly Csikszentmihalyi\'s work on flow states.',
}

export const methodologyPrinciple = 'Work until you naturally lose focus. Rest what you\'ve earned. Then go again.'

export const useCases: UseCase[] = [
  {
    n: '01',
    title: 'Software developers',
    body: 'Loading a complex codebase into working memory takes time. Re.Focus protects your flow so you can architect, debug, and ship without an alarm cutting your concentration at the worst moment.',
  },
  {
    n: '02',
    title: 'Students & researchers',
    body: 'Whether synthesizing data for a thesis or reviewing for high-stakes exams, track your longest study blocks and earn proportional rest — so you can sustain focus across a full day without burning out.',
  },
  {
    n: '03',
    title: 'UI/UX designers',
    body: 'Creative work doesn\'t operate on a rigid schedule. Stay on the canvas as long as inspiration is flowing. Let the app handle the math on your break while you handle the craft.',
  },
  {
    n: '04',
    title: 'Writers',
    body: 'Escape the anxiety of a counting-down clock. Draft freely until you reach a natural stopping point — then rest knowing you\'ve genuinely earned it.',
  },
]

export const developerInfo: DeveloperInfo = {
  name: 'Gilbert',
  role: 'Developer',
  location: 'Tarlac City, PH',
  initials: 'G',
}

export const originStory =
  'Re.Focus is a project made for my girlfriend, as when she is reviewing or coming activitis, quizzes, or exams. She gets burnt as the amount of breaktime she gets isn\'t enough with the classic Pomodoro timer. So I thought why not create a pomodoro but is an inverse of it.'

export const originGoal =
  'The goal is simple: build the timer, that is instead of'
