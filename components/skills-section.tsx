"use client"

import Image from "next/image"
import { skills } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "./scroll-animation"

const invertOnDarkIcons = new Set([
  "/skills/nextdotjs.svg",
  "/skills/antdesign.svg",
  "/skills/gsap.svg",
])

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">기술 스택</h2>
            <p className="text-muted-foreground">실제 활용 맥락을 기준으로 정리한 기술입니다.</p>
          </div>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <ScrollAnimation key={skill.name} animation="fade-up" delay={index * 50}>
              <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                <CardContent className="p-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-card shadow-sm ring-1 ring-border/60">
                      <Image
                        src={skill.icon}
                        alt={`${skill.name} 아이콘`}
                        width={20}
                        height={20}
                        className={invertOnDarkIcons.has(skill.icon) ? "dark:invert" : undefined}
                      />
                    </div>
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{skill.context}</p>

                  <div className="flex flex-wrap gap-2">
                    {skill.keywords.map((keyword) => (
                      <Badge
                        key={`${skill.name}-${keyword}`}
                        variant="secondary"
                        className="rounded-full text-xs font-normal"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
