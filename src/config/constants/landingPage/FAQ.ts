// --- Types ---

interface FAQ {
  id: number
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: 'What if I stop working before the timer finishes?',
    answer: 'There is no countdown timer to finish. Re.Focus uses a stopwatch that counts up. You stop when you naturally lose focus, and it calculates your earned break based on your actual effort.',
  },
  {
    id: 2,
    question: 'Do I need to sign up to use it?',
    answer: 'No. You can start a session immediately without creating an account. Sign up is only required if you want to save your session history and track your streaks over time.',
  },
  {
    id: 3,
    question: 'Where does the 1 hr = 20 min formula come from?',
    answer: "It's derived from a synthesis of DeskTime's 52:17 rule, Nathaniel Kleitman's Ultradian rhythms, and Mihaly Csikszentmihalyi's flow state research—equating to roughly a 3:1 biological ratio of work to rest.",
  },
  {
    id: 4,
    question: 'How is this different from Forest or Pomofocus?',
    answer: 'Traditional apps lock you into rigid 25-minute countdowns. Re.Focus tracks your natural workflow and rewards you with proportional rest, actively protecting your flow states rather than interrupting them.',
  },
  {
    id: 5,
    question: 'Is my session history saved?',
    answer: 'Yes. Once you create a free account, your session history, earned breaks, and daily streaks are securely saved to the cloud.',
  },
]