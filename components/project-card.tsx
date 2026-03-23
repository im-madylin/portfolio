"use client"

import { useState } from "react"
import Image from "next/image"
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
  const projectEmoji =
    project.id === "1" ? "📡" : project.id === "2" ? "🗂️" : project.id === "3" ? "📍" : "🧩"
  const previewImage = project.images?.[0] ?? project.thumbnail
  const [failedImageSrc, setFailedImageSrc] = useState<string | null>(null)
  const isImageFailed = !previewImage || failedImageSrc === previewImage

  return (
    <Card className="group h-full flex flex-col overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
          {previewImage && !isImageFailed ? (
            <Image
              src={previewImage}
              alt={`${project.title} 썸네일`}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setFailedImageSrc(previewImage)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50 group-hover:scale-110 transition-transform duration-500">
              {projectEmoji}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        </div>
      </CardHeader>
      <CardContent className="p-5 flex-1">
        <Badge variant="outline" className="rounded-full mb-3">
          {project.category}
        </Badge>
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
          aria-label={`${project.title} 상세 보기`}
        >
          <Eye className="w-4 h-4 mr-2" />
          상세보기
        </Button>
      </CardFooter>
    </Card>
  )
}
