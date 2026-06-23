import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

export interface ArticleMeta {
  slug: string
  title: string
  readTime: string
  tag: string
  bgClass: string // tailwind bg class for card thumbnail
}

export interface Article extends ArticleMeta {
  icon: LucideIcon
  content: ReactNode
}