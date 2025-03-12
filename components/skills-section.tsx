"use client"

type Skill = {
  name: string
  category: "languages" | "frontend" | "backend" | "tools"
}

const skills: Skill[] = [
  // Languages
  { name: "C", category: "languages" },
  { name: "C#", category: "languages" },
  { name: "Java", category: "languages" },
  { name: "Python ⭑⭑⭑", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "TypeScript", category: "languages" },

  // Frontend
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  // Backend
  { name: "PostgreSQL", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "SQLite", category: "backend" },

  // Tools
  { name: "Shell", category: "tools" },
  { name: "Pygame", category: "tools" },
  { name: "Pandas", category: "tools" },
  { name: "Microsoft Applications", category: "tools" },
  { name: "MacOS", category: "tools" },
  { name: "Linux", category: "tools" },
]

export function SkillsSection() {
  const categories = [
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools" },
  ]

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {categories.map((category) => (
            <div key={category.id}>
              <h3 className="text-lg font-medium mb-6">{category.label}</h3>
              <div className="space-y-4">
                {skills
                    .filter((skill) => skill.category === category.id)
                    .map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">{skill.name}</span>
                          </div>
                        </div>
                    ))}
              </div>
            </div>
        ))}
      </div>
  )
}
