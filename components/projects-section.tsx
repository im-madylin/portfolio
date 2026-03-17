"use client"

import { useState } from "react"
import { projects, Project } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "./project-card"
import { ProjectModal } from "./project-modal"
import { ScrollAnimation } from "./scroll-animation"

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState<"전체" | Project["category"]>("전체")
  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime()
  )
  const filteredProjects = sortedProjects.filter((project) =>
    selectedFilter === "전체" ? true : project.category === selectedFilter
  )

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
            <div className="mt-5 flex items-center justify-center gap-2">
              {(["전체", "실무", "사이드"] as const).map((filter) => (
                <Button
                  key={filter}
                  type="button"
                  variant={selectedFilter === filter ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
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
