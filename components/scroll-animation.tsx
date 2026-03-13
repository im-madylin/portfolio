"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "fade"
  delay?: number
  duration?: number
}

export function ScrollAnimation({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 500,
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  const baseStyles = "transition-all"

  const hiddenStyles: Record<string, string> = {
    "fade-up": "opacity-0 translate-y-8",
    "fade-down": "opacity-0 -translate-y-8",
    "fade-left": "opacity-0 translate-x-8",
    "fade-right": "opacity-0 -translate-x-8",
    "scale": "opacity-0 scale-95",
    "fade": "opacity-0",
  }

  const visibleStyles = "opacity-100 translate-x-0 translate-y-0 scale-100"

  return (
    <div
      ref={ref}
      className={cn(
        baseStyles,
        isVisible ? visibleStyles : hiddenStyles[animation],
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}
