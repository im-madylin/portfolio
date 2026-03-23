"use client"

import { experiences } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BriefcaseBusiness } from "lucide-react"
import { ScrollAnimation } from "./scroll-animation"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">경력</h2>
            <p className="text-muted-foreground">운영 서비스에서 문제를 해결하며 만든 실무 경험입니다.</p>
          </div>
        </ScrollAnimation>

        <div className="space-y-4">
          {experiences.map((experience, index) => (
            <ScrollAnimation key={`${experience.company}-${experience.period}`} animation="fade-up" delay={index * 100}>
              <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-lg bg-primary/10">
                        <BriefcaseBusiness className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-foreground">{experience.company}</CardTitle>
                        <p className="text-primary font-medium mt-1">{experience.role}</p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{experience.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{experience.summary}</p>

                  <ul className="space-y-2">
                    {experience.achievements.map((achievement) => (
                      <li key={achievement} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="rounded-full text-xs font-normal">
                        {tech}
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
