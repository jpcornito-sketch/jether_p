"use client"

import { useState } from "react"
import { BasketballIcon } from "./basketball-icon"
import { Dialog, DialogClose, DialogContent, DialogTitle } from "@/components/ui/dialog"

const projects = [
  {
    title: "Banakon",
    description: "A Game named Banakon, it is simple with the concept of a snake game.",
    tags: ["Html", "JavaScript", "CSS"],
    imagePaths: [
      "/Projects/Banakon/Screenshot 2026-05-22 105345.png",
    ],
    link: "#",
  },
  {
    title: "Payroll",
    description: "A payroll dashboard with responsive layout and data-driven visualization.",
    tags: ["Html", "JavaScript", "CSS"],
    imagePaths: [
      "/Projects/Payroll/Screenshot 2026-05-22 105301.png",
    ],
    link: "#",
  },
  {
    title: "therj",
    description: "Thej is a website shop designed by me to sell shoes.",
    tags: ["Html", "JavaScript", "CSS"],
    imagePaths: [
      "/Projects/therj/Screenshot 2026-05-22 105442.png",
      "/Projects/therj/Screenshot 2026-05-22 105451.png",
      "/Projects/therj/Screenshot 2026-05-22 105456.png",
    ],
    link: "#",
  },
]

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [viewerOpen, setViewerOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedImageTitle, setSelectedImageTitle] = useState<string>("")

  const openImageViewer = (src: string, title: string) => {
    setSelectedImage(src)
    setSelectedImageTitle(title)
    setViewerOpen(true)
  }

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center gap-2 justify-center mb-4">
            <BasketballIcon className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              My Work
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/60"
              onClick={() => openImageViewer(project.imagePaths[0], project.title)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault()
                  openImageViewer(project.imagePaths[0], project.title)
                }
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Basketball decoration on hover */}
              <div
                className={`absolute top-4 right-4 text-primary transition-all duration-300 ${
                  hoveredIndex === index ? "opacity-100 rotate-12" : "opacity-0"
                }`}
              >
                <BasketballIcon className="w-8 h-8" />
              </div>

              <div className="mb-4 grid gap-3 sm:grid-cols-2">
                {project.imagePaths.map((src, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={src}
                    alt={`${project.title} screenshot ${imgIndex + 1}`}
                    className="w-full h-36 rounded-2xl object-cover border border-border cursor-pointer"
                    onClick={(event) => {
                      event.stopPropagation()
                      openImageViewer(src, project.title)
                    }}
                  />
                ))}
              </div>

              <div className="mb-4">
                <span className="text-primary font-mono text-sm">0{index + 1}</span>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View arrow */}
              <div className="mt-4 flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View Project</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={viewerOpen} onOpenChange={setViewerOpen}>
        <DialogContent
          showCloseButton={false}
          className="fixed inset-0 z-50 m-0 grid w-full max-w-none translate-x-0 translate-y-0 rounded-none border-0 p-0 shadow-none"
        >
          <DialogTitle className="sr-only">
            {selectedImageTitle || "Project screenshot viewer"}
          </DialogTitle>
          <div className="relative flex h-screen w-full items-center justify-center bg-black">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt={selectedImageTitle}
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />
            ) : null}
            <div className="pointer-events-none absolute bottom-5 left-5 text-sm text-white/80">
              {selectedImageTitle}
            </div>
            <DialogClose className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
