"use client"

import { Github, ExternalLink } from "lucide-react"

type Project = {
  id: number
  title: string
  category: string
  description: string
  longDescription?: string
  tech: string[]
  image: string
  url: string
  github?: string
  features?: string[]
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      <div className="order-2 md:order-1">
        <div className="mb-4">
          <span className="text-xs text-gray-600 tracking-wider">{project.category}</span>
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight mt-1">{project.title}</h3>
        </div>

        <p className="text-base text-gray-800 leading-relaxed mb-6">{project.longDescription || project.description}</p>

        {project.features && (
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3">Key Features</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-black">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 bg-[#F5F5DC] rounded-md">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:underline underline-offset-4"
            >
              <Github size={16} />
              View Code
            </a>
          )}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:underline underline-offset-4"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>

      <div className="overflow-hidden order-1 md:order-2">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-[300px] md:h-[400px] object-cover transition-all duration-700 hover:scale-105"
        />
      </div>
    </div>
  )
}

