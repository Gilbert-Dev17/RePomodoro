interface ResearchQuote {
  id: number
  quote: string
  source: string
}

export const researchQuotes: ResearchQuote[] = [
  {
    id: 1,
    quote: '"The top 10% of performers worked for exactly 52 minutes, then rested 17."',
    source: '— DeskTime',
  },
  {
    id: 2,
    quote: '"It takes 10–15 min just to enter a flow state. Short timers kill concentration."',
    source: '— Csikszentmihalyi',
  },
  {
    id: 3,
    quote: '"The brain operates optimally in 90-minute focus cycles."',
    source: '— N. Kleitman',
  },
]