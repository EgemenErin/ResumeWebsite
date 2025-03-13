"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { Calendar, MapPin, ExternalLink } from "lucide-react"

type WorkExperience = {
    id: number
    company: string
    position: string
    location: string
    startDate: string
    endDate: string
    description: string[]
    technologies: string[]
    website?: string
}

const experiences: WorkExperience[] = [
    {
        id: 1,
        company: "OneRamp",
        position: "Full Stack Developer",
        location: "Remote",
        startDate: "Jul 2024",
        endDate: "Sep 2024",
        description: [
            "Utilized technologies such as Next.js, Tailwind CSS, and TypeScript to build a scalable and efficient web application",
            "Implemented responsive design techniques to ensure optimal user experience across devices, increasing mobile user engagement",
            "Optimized website performance, achieving a reduction of load time and improving user retention rates",
            "Collaborated closely with stakeholders to gather requirements and iteratively refine the product, resulting in measurable outcomes",
        ],
        technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
        website: "https://www.oneramp.io",
    },
    {
        id: 2,
        company: "Boem Games",
        position: "Game Developer",
        location: "Istanbul, Sisli",
        startDate: "Jun 2024",
        endDate: "Aug 2024",
        description: [
            "Utilized technologies such as C# and Unity to develop a prototype game called 'Slide Cubes Puzzle'",
            "Contributed to the core mechanics, designed level progression, and collaborated closely with the team to refine gameplay elements",
            "Ensured a balanced and intuitive user experience through iterative design and testing",
        ],
        technologies: ["C#", "Unity"],
        website: "NULL",
    }
]

export function WorkExperience() {
    const [hoveredId, setHoveredId] = useState<number | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <div ref={containerRef} className="space-y-12">
            {experiences.map((experience, index) => (
                <motion.div
                    key={experience.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative"
                    onHoverStart={() => setHoveredId(experience.id)}
                    onHoverEnd={() => setHoveredId(null)}
                >
                    {/* Timeline connector */}
                    {index < experiences.length - 1 && (
                        <div className="absolute left-[7px] top-[70px] w-[2px] h-[calc(100%_-_40px)] bg-black/10"></div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6">
                        {/* Timeline dot */}
                        <div className="hidden md:flex flex-col items-center">
                            <motion.div
                                className="w-4 h-4 rounded-full bg-black mt-2"
                                animate={hoveredId === experience.id ? { scale: 1.5 } : { scale: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        {/* Content */}
                        <motion.div
                            className="bg-[#F5F5DC] p-6 rounded-lg"
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-medium">{experience.position}</h3>
                                    <div className="flex items-center mt-1">
                                        <span className="font-medium">{experience.company}</span>
                                        {experience.website && (
                                            <a
                                                href={experience.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="ml-2 text-gray-600 hover:text-black transition-colors"
                                            >
                                                <ExternalLink size={14} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-2 md:mt-0 text-sm text-gray-600">
                                    <div className="flex items-center">
                                        <Calendar size={14} className="mr-1" />
                                        {experience.startDate} - {experience.endDate}
                                    </div>
                                    <div className="flex items-center mt-1">
                                        <MapPin size={14} className="mr-1" />
                                        {experience.location}
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-2 mb-4">
                                {experience.description.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-start text-sm"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <span className="mr-2 text-black">•</span>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech, i) => (
                                    <motion.span
                                        key={i}
                                        className="text-xs px-2 py-1 bg-[#FFFFE6] rounded-md"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

