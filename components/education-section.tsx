"use client"

import { education } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { ScrollAnimation } from "./scroll-animation"

export function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">교육</h2>
            <p className="text-muted-foreground">실무 역량의 기반이 된 학습 경험입니다.</p>
          </div>
        </ScrollAnimation>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <ScrollAnimation key={index} animation="fade-left" delay={index * 100}>
              <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-foreground">
                        {edu.institution}
                      </CardTitle>
                      <p className="text-primary font-medium">{edu.degree}</p>
                      {edu.organizer && (
                        <p className="text-sm text-muted-foreground mt-1">
                          주최: {edu.organizer}
                        </p>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                </CardHeader>
                {edu.description && (
                  <CardContent className="pt-0 pl-[4.5rem]">
                    <p className="text-muted-foreground break-keep">{edu.description}</p>
                  </CardContent>
                )}
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
