"use client"

import { useState } from "react"
import { projects, Project } from "@/lib/data"
import { ProjectCard } from "./project-card"
import { ProjectModal } from "./project-modal"
import { ScrollAnimation } from "./scroll-animation"

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">프로젝트</h2>
            <p className="text-muted-foreground">직접 진행한 프로젝트입니다.</p>
          </div>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollAnimation key={project.id} animation="fade-up" delay={index * 100} className="h-full">
              <ProjectCard
                project={project}
                onViewDetails={handleViewDetails}
              />
            </ScrollAnimation>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  )
}
