"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Code, Database, Laptop, PenToolIcon as Tool } from "lucide-react"

type Skill = {
  name: string
  category: "languages" | "frontend" | "backend" | "tools"
  proficiency: number // 0-100
  icon?: string
}

const skills: Skill[] = [
  // Languages
  { name: "Python", category: "languages", proficiency: 90, icon: "🐍" },
  { name: "C", category: "languages", proficiency: 50, icon: "🔵" },
  { name: "C#", category: "languages", proficiency: 75, icon: "#️⃣"},
  { name: "Java", category: "languages", proficiency: 60, icon: "☕"},
  { name: "JavaScript", category: "languages", proficiency: 80, icon: "🟨" },
  { name: "TypeScript", category: "languages", proficiency: 80, icon: "🔷" },

  // Frontend
  { name: "HTML", category: "frontend", proficiency: 100, icon: "🌐" },
  { name: "CSS", category: "frontend", proficiency: 85, icon: "🎨" },
  { name: "React", category: "frontend", proficiency: 85, icon: "⚛️" },
  { name: "Next.js", category: "frontend", proficiency: 70, icon: "▲" },
  { name: "Tailwind CSS", category: "frontend", proficiency: 65, icon: "🌊" },

  // Backend
  { name: "Flask", category: "backend", proficiency: 85, icon: "🌶️" },
  { name: "Node.js", category: "backend", proficiency: 65, icon: "🟢" },
  { name: "PostgreSQL", category: "backend", proficiency: 80, icon: "🐘" },
  { name: "MySQL", category: "backend", proficiency: 80, icon: "🗄️" },
  { name: "SQLite", category: "backend", proficiency: 80, icon: "🗄️" },
  { name: "REST API", category: "backend", proficiency: 85, icon: "🗄️" },

  // Tools
  { name: "Git", category: "tools", proficiency: 100, icon: "🔄" },
  { name: "Shell", category: "tools", proficiency: 70, icon: "💻"},
  { name: "Pygame", category: "tools", proficiency: 85, icon: "👾"},
  { name: "Pandas", category: "tools", proficiency: 80, icon: "🐼" },
  { name: "Microsoft Applications", category: "tools", proficiency: 100, icon: "📝" },
  { name: "MacOS", category: "tools", proficiency: 100, icon: "🍎" },
  { name: "Linux", category: "tools", proficiency: 75, icon: "🐧" },
]

export function SkillsSection() {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        },
        { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const categories = [
    { id: "languages", label: "Languages", icon: Code },
    { id: "frontend", label: "Frontend", icon: Laptop },
    { id: "backend", label: "Backend", icon: Database },
    { id: "tools", label: "Tools", icon: Tool },
  ]

  const getProficiencyLabel = (proficiency: number) => {
    if (proficiency >= 90) return "Expert"
    if (proficiency >= 80) return "Advanced"
    if (proficiency >= 70) return "Intermediate"
    if (proficiency >= 50) return "Basic"
    return "Beginner"
  }

  return (
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {categories.map((category) => (
            <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: categories.indexOf(category) * 0.1 }}
                className="bg-[#F5F5DC] p-6 rounded-lg"
            >
              <div className="flex items-center gap-2 mb-6">
                <category.icon className="w-5 h-5" />
                <h3 className="text-lg font-medium">{category.label}</h3>
              </div>
              <div className="space-y-6">
                {skills
                    .filter((skill) => skill.category === category.id)
                    .map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                        >
                          <div className="flex justify-between mb-1">
                    <span className="text-sm flex items-center gap-1">
                      {skill.icon && <span>{skill.icon}</span>}
                      {skill.name}
                    </span>
                            <span className="text-xs text-gray-600">{getProficiencyLabel(skill.proficiency)}</span>
                          </div>
                          <div className="h-2 w-full bg-[#FFFFE6] rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-black rounded-full"
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 + index * 0.05, ease: "easeOut" }}
                            />
                          </div>
                        </motion.div>
                    ))}
              </div>
            </motion.div>
        ))}
      </div>
  )
}

