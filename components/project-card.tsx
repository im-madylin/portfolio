"use client"

import { Project } from "@/lib/data"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Eye } from "lucide-react"

interface ProjectCardProps {
  project: Project
  onViewDetails: (project: Project) => void
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <Card className="group h-full flex flex-col overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
          <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50 group-hover:scale-110 transition-transform duration-500">
            {project.id === "1" ? "📡" : project.id === "2" ? "🗂️" : "📍"}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        </div>
      </CardHeader>
      <CardContent className="p-5 flex-1">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Calendar className="w-4 h-4" />
          <span>{project.period}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="rounded-full text-xs font-normal"
            >
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 3 && (
            <Badge
              variant="secondary"
              className="rounded-full text-xs font-normal"
            >
              +{project.techStack.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button
          onClick={() => onViewDetails(project)}
          className="w-full rounded-full"
        >
          <Eye className="w-4 h-4 mr-2" />
          상세보기
        </Button>
      </CardFooter>
    </Card>
  )
}
