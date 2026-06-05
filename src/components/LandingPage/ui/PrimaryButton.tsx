'use client'

import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PrimaryButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  /** Renders a trailing ArrowRight that translates on hover */
  icon?: boolean
  variant?: 'default' | 'filled'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  'aria-label'?: string
}

export function PrimaryButton({
  children,
  onClick,
  className,
  icon = false,
  variant = 'default',
  type = 'button',
  disabled,
  'aria-label': ariaLabel,
}: PrimaryButtonProps) {
  const variants = {
    default: 'bg-[#EADDCF] text-[#2E2017] hover:bg-[#2E2017] hover:text-[#FAF6EF]',
    filled: 'bg-[#C9523A] text-white hover:bg-[#b04530]',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cn(
        'group inline-flex items-center justify-center gap-2',
        'rounded-full px-6 py-2.5 text-sm font-medium',
        'border border-transparent shadow-sm',
        'transition-all duration-300',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        className,
      )}
    >
      {children}
      {icon && (
        <ArrowRight
          size={16}
          aria-hidden="true"
          className="transform group-hover:translate-x-1 transition-transform"
        />
      )}
    </button>
  )
}