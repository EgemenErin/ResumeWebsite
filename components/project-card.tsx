"use client"

import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { useRef, useState } from "react"

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
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  return (
      <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
      >
        <div className="order-2 md:order-1">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-4"
          >
            <span className="text-xs text-gray-600 tracking-wider">{project.category}</span>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight mt-1">{project.title}</h3>
          </motion.div>

          <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-base text-gray-800 leading-relaxed mb-6"
          >
            {project.longDescription || project.description}
          </motion.p>

          {project.features && (
              <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-6"
              >
                <h4 className="text-sm font-medium mb-3">Key Features</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {project.features.map((feature, i) => (
                      <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start"
                      >
                        <span className="mr-2 text-black">•</span>
                        {feature}
                      </motion.li>
                  ))}
                </ul>
              </motion.div>
          )}

          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mb-6"
          >
            {project.tech.map((tech, i) => (
                <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                    viewport={{ once: true }}
                    className="text-xs px-2 py-1 bg-[#F5F5DC] rounded-md"
                >
                  {tech}
                </motion.span>
            ))}
          </motion.div>

          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex gap-4"
          >
            {project.github && (
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:underline underline-offset-4 transition-all duration-300 hover:text-gray-600"
                >
                  <Github size={16} />
                  View Code
                </a>
            )}
            <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:underline underline-offset-4 transition-all duration-300 hover:text-gray-600"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          </motion.div>
        </div>

        <motion.div
            className="overflow-hidden order-1 md:order-2 rounded-lg"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
          <motion.img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-[300px] md:h-[400px] object-cover"
              initial={{ scale: 1 }}
              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.7 }}
          />
        </motion.div>
      </motion.div>
  )
}

