"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { profileData } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Mail, Github, Download } from "lucide-react"
import { ScrollAnimation } from "./scroll-animation"

export function HeroSection() {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  const prefixText = profileData.title
  const nameText = profileData.name
  const suffixText = "입니다"
  const fullTitle = useMemo(
    () => `${prefixText} ${nameText}${suffixText}`,
    [prefixText, nameText, suffixText]
  )

  const prefixChars = useMemo(() => Array.from(prefixText), [prefixText])
  const nameChars = useMemo(() => Array.from(nameText), [nameText])
  const suffixChars = useMemo(() => Array.from(suffixText), [suffixText])
  const titleChars = useMemo(
    () => [...prefixChars, ...nameChars, ...suffixChars],
    [prefixChars, nameChars, suffixChars]
  )
  const [typedCount, setTypedCount] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const timer = window.setInterval(() => {
      setTypedCount((prevCount) => {
        if (prevCount >= titleChars.length) {
          window.clearInterval(timer)
          return prevCount
        }
        return prevCount + 1
      })
    }, 130)

    return () => window.clearInterval(timer)
  }, [prefersReducedMotion, titleChars.length])

  const resolvedTypedCount = prefersReducedMotion ? titleChars.length : typedCount
  const isTypingDone = resolvedTypedCount >= titleChars.length

  const { typedPrefix, typedName, typedSuffix } = useMemo(() => {
    let remaining = resolvedTypedCount

    const prefixLength = Math.min(remaining, prefixChars.length)
    const typedPrefixValue = prefixChars.slice(0, prefixLength).join("")
    remaining -= prefixLength

    const nameLength = Math.min(remaining, nameChars.length)
    const typedNameValue = nameChars.slice(0, nameLength).join("")
    remaining -= nameLength

    const suffixLength = Math.min(remaining, suffixChars.length)
    const typedSuffixValue = suffixChars.slice(0, suffixLength).join("")

    return {
      typedPrefix: typedPrefixValue,
      typedName: typedNameValue,
      typedSuffix: typedSuffixValue,
    }
  }, [resolvedTypedCount, prefixChars, nameChars, suffixChars])

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center">
          <ScrollAnimation animation="scale" duration={600}>
            <div className="mb-6 inline-block hero-avatar-bounce">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg ring-4 ring-primary/20">
                <Image
                  src="/profile-photo.png"
                  alt={profileData.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={100}>
            <p className="text-primary font-medium mb-2">안녕하세요!</p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={200}>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              <span className="sr-only">{fullTitle}</span>
              <span aria-hidden="true" className="hero-typing-wrap">
                <span className="hero-typing-base">{typedPrefix}</span>
                {typedName.length > 0 && <span className="hero-typing-base">{"\u00A0"}</span>}
                <span className="hero-typing-name">{typedName}</span>
                <span className="hero-typing-base">{typedSuffix}</span>
                <span className={`hero-typing-cursor${isTypingDone ? " is-visible" : ""}`} />
              </span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={300}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8 text-pretty whitespace-pre-line">
              {profileData.bio}
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={400}>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Button
                variant="outline"
                asChild
                className="rounded-full border-border/70 bg-background/80 text-foreground hover:bg-gray-100 hover:text-foreground hover:border-gray-200 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 dark:hover:text-foreground dark:hover:border-input"
              >
                <a href={`mailto:${profileData.email}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  이메일
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="rounded-full border-border/70 bg-background/80 text-foreground hover:bg-gray-100 hover:text-foreground hover:border-gray-200 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 dark:hover:text-foreground dark:hover:border-input"
              >
                <a href={profileData.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button asChild className="rounded-full">
                <a href={profileData.resumeUrl} download>
                  <Download className="w-4 h-4 mr-2" />
                  이력서 PDF
                </a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
