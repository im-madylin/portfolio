"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Project } from "@/lib/data"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Calendar,
  Users,
  Briefcase,
  CheckCircle2,
  Lightbulb,
  Rocket,
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

interface ProjectModalProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [failedImageIndexes, setFailedImageIndexes] = useState<number[]>([])

  const imageList = project?.images?.length
    ? project.images
    : project?.thumbnail
      ? [project.thumbnail]
      : []

  const hasMultipleImages = imageList.length > 1

  useEffect(() => {
    setCurrentImageIndex(0)
    setFailedImageIndexes([])
  }, [project?.id, open])

  if (!project) return null

  const moveToPrevImage = () => {
    if (!imageList.length) return
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
    )
  }

  const moveToNextImage = () => {
    if (!imageList.length) return
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handleImageError = () => {
    setFailedImageIndexes((prevIndexes) =>
      prevIndexes.includes(currentImageIndex)
        ? prevIndexes
        : [...prevIndexes, currentImageIndex]
    )
  }

  const isCurrentImageFailed = failedImageIndexes.includes(currentImageIndex)
  const fallbackEmoji =
    project.id === "1" ? "📡" : project.id === "2" ? "🗂️" : project.id === "3" ? "📍" : "🧩"

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
        <div className="project-modal-scroll max-h-[90vh] overflow-y-auto overscroll-contain">
          <div className="relative h-60 md:h-80 bg-gradient-to-br from-primary/20 to-accent/20">
            {imageList.length > 0 && !isCurrentImageFailed ? (
              <Image
                src={imageList[currentImageIndex]}
                alt={`${project.title} 이미지 ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                onError={handleImageError}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-8xl">
                {fallbackEmoji}
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/20 to-transparent" />

            {hasMultipleImages && (
              <>
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-card/90 backdrop-blur-sm hover:bg-card"
                  onClick={moveToPrevImage}
                  aria-label="이전 이미지"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-card/90 backdrop-blur-sm hover:bg-card"
                  onClick={moveToNextImage}
                  aria-label="다음 이미지"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 rounded-full bg-card/80 px-3 py-2 backdrop-blur-sm">
                  {imageList.map((_, index) => (
                    <button
                      key={`dot-${index}`}
                      type="button"
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2.5 w-2.5 rounded-full transition-all cursor-pointer ${
                        currentImageIndex === index ? "bg-primary" : "bg-muted-foreground/40"
                      }`}
                      aria-label={`${index + 1}번 이미지로 이동`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="p-6 space-y-6">
            <DialogHeader>
              <div>
                <Badge variant="outline" className="rounded-full">
                  {project.category}
                </Badge>
              </div>
              <DialogTitle className="text-2xl text-foreground">
                {project.title}
              </DialogTitle>
              <p className="text-muted-foreground">{project.description}</p>
            </DialogHeader>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">{project.period}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">{project.details.role}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">{project.details.teamSize}</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">사용 기술</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="rounded-full">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              주요 기능
            </h4>
            <ul className="space-y-2">
              {project.details.features.map((feature, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Rocket className="w-4 h-4 text-primary" />
              도전과 해결
            </h4>
            <ul className="space-y-2">
              {project.details.challenges.map((challenge, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-primary" />
              배운 점
            </h4>
            <ul className="space-y-2">
              {project.details.learnings.map((learning, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {learning}
                </li>
              ))}
            </ul>
          </div>

            {project.details.links && (
              <>
                <Separator />
                <div className="flex gap-3">
                  {project.details.links.github && (
                    <Button asChild variant="outline" className="rounded-full">
                      <a
                        href={project.details.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.details.links.live && (
                    <Button asChild className="rounded-full">
                      <a
                        href={project.details.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
