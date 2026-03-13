"use client"

import { certificates } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"
import { ScrollAnimation } from "./scroll-animation"

export function CertificatesSection() {
  const gridClassName =
    certificates.length <= 2
      ? "grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"

  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">자격증</h2>
            <p className="text-muted-foreground">취득한 자격증입니다.</p>
          </div>
        </ScrollAnimation>
        <div className={gridClassName}>
          {certificates.map((cert, index) => (
            <ScrollAnimation key={index} animation="scale" delay={index * 100}>
              <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md text-center h-full">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">
                    {cert.date}
                  </span>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
