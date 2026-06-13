/**
 * Changelog entries for the landing page
 * Displays version history and feature updates
 */

export interface ChangelogEntry {
  version: string
  date: string
  title: string
  items: string[]
  dotColor: string
}

export const changelog: ChangelogEntry[] = [
  {
    version: '1.2.0',
    date: 'May 26, 2026',
    title: 'The Stack Update',
    items: [
      'Redesigned Features section into a pure CSS sticky card stack.',
      'Cards now physically peel away and overlap seamlessly as you scroll.',
    ],
    dotColor: '#C9523A',
  },
  {
    version: '1.1.0',
    date: 'May 24, 2026',
    title: 'The Editorial Update',
    items: [
      'Added fully functional stopwatch logic with proportional rest calculation.',
      'Introduced task naming to give session history context.',
      'Keyboard shortcuts mapped (Space to pause, R to reset).',
      'Revamped mobile navigation with a responsive slide-down menu.',
      'Improved accessibility across icon buttons and accordions.',
    ],
    dotColor: '#E1D4C5',
  },
  {
    version: '1.0.0',
    date: 'May 15, 2026',
    title: 'Initial Release',
    items: [
      'Launched the Re.Focus method timer.',
      'Published the first 5 articles in The Journal.',
    ],
    dotColor: '#E1D4C5',
  },
]
