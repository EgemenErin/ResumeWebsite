"use client"

import Link from "next/link"
import { Github, Mail, Linkedin } from "lucide-react"
import { Menu } from "@/components/menu"
import { CustomCursor } from "@/components/cursor"
import { ProjectCard } from "@/components/project-card"
import { ContactForm } from "@/components/contact-form"
import { SkillsSection } from "@/components/skills-section"
import Image from 'next/image';
import { motion } from "framer-motion"
import {Testimonials} from "@/components/testimonials";
import {WorkExperience} from "@/components/work-experience";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className="min-h-screen bg-[#FFFFE6] text-black relative px-6 md:px-12 selection:bg-black selection:text-white">
        {/* Navigation */}
        <nav className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <img
                src="https://egemenerin.github.io/Portfolio/assets/img/clipboard-image-1.png"
                alt="Logo"
                className="h-8 w-auto mr-2"
            />
            <span className="text-2xl font-serif tracking-tighter">
              E<span className="mx-2">G</span>E
            </span>
          </Link>
          <Menu />
        </nav>

        {/* Hero section */}
        <div className="flex flex-col justify-between mt-32 md:mt-48">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] items-end gap-x-8">
            {/* Column 1: Heading */}
            <motion.h1
                className="font-serif text-[clamp(3rem,15vw,12rem)] leading-[0.85] tracking-[-0.03em]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
              >
                EGEMEN
              </motion.div>
              <motion.div
                  className="md:ml-[37.7%]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
              >
                ERIN
              </motion.div>
            </motion.h1>
            <motion.div
                className="mt-8 md:mt-0 md:-ml-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Image
                  src="/images/headshot.jpg"
                  alt="headshot"
                  width={400}
                  height={400}
                  className="object-cover mr-20"
              />
            </motion.div>
            {/* Column 2: "FULLSTACK DEVELOPER" text */}
            <motion.div
                className="mt-8 md:mt-0 md:mb-8 text-right"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="text-xs tracking-wider whitespace-nowrap font-medium">FULLSTACK DEVELOPER</div>
            </motion.div>
          </div>
        </div>

        {/* Introduction */}
        <motion.section
            className="mt-40"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl leading-relaxed tracking-tight">
              I'm a full-stack developer proficient in React, Next.js, TypeScript, and modern backend frameworks. I
              create fast, accessible, and visually captivating web applications, committed to delivering user-focused
              digital experiences from front-end to backend.{" "}
            </p>
            <div className="flex gap-4 mt-8">
              <motion.a
                  href="https://github.com/egemenerin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:underline underline-offset-4"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
              >
                <Github size={16} />
                GitHub
              </motion.a>
              <motion.a
                  href="https://linkedin.com/in/egemenerin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:underline underline-offset-4"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
              >
                <Linkedin size={16} />
                LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <section className="mt-40">
          <h2 className="text-sm font-medium mb-8 tracking-wider">SKILLS & TECHNOLOGIES</h2>
          <SkillsSection />
        </section>

        {/* Work Experience Section */}
        <motion.section
            id="experience"
            className="mt-40"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-sm font-medium mb-8 tracking-wider">WORK EXPERIENCE</h2>
          <WorkExperience />
        </motion.section>

        {/* Projects */}
        <section id="projects" className="mt-40 md:mt-60">
          <h2 className="text-sm font-medium mb-16 tracking-wider">SELECTED PROJECTS</h2>
          <div className="grid grid-cols-1 gap-32">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <motion.section
            id="testimonials"
            className="mt-40 md:mt-60"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-sm font-medium mb-8 tracking-wider">WHAT PEOPLE SAY</h2>
          <Testimonials />
        </motion.section>



        <motion.section
            id="contact"
            className="mt-40 md:mt-60 mb-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-sm font-medium mb-8 tracking-wider">GET IN TOUCH</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-lg leading-relaxed mb-8">
                Interested in working together? Feel free to reach out through the contact form or directly via email.
              </p>
              <div className="space-y-4">
                <motion.a
                    href="mailto:work@egemenerin.com"
                    className="flex items-center gap-2 text-sm hover:underline underline-offset-4"
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ duration: 0.2 }}
                >
                  <Mail size={16} />
                  work@egemenerin.com
                </motion.a>
                <motion.a
                    href="https://github.com/egemenerin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:underline underline-offset-4"
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ duration: 0.2 }}
                >
                  <Github size={16} />
                  GitHub
                </motion.a>
                <motion.a
                    href="https://linkedin.com/in/egemenerin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:underline underline-offset-4"
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ duration: 0.2 }}
                >
                  <Linkedin size={16} />
                  LinkedIn
                </motion.a>
              </div>
            </div>
            <ContactForm />
          </div>
        </motion.section>
      </main>
    </>
  )
}

// Project data structure
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

// Sample project data
const projects: Project[] = [
  {
    "id": 1,
    "title": "Resume Website",
    "category": "Front End Development",
    "description": "A personal resume website built with Next.js and Tailwind CSS.",
    "longDescription":
        "This project showcases a responsive and modern personal resume website designed to highlight professional experiences, projects, and skills. Built with Next.js for optimal performance and SEO, styled using Tailwind CSS for rapid and customizable UI development, and structured with a modular approach for maintainability.",
    "tech": ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    "image": "/images/portfolio.png",
    "url": "https://www.egemenerin.com/",
    "github": "https://github.com/EgemenErin/ResumeWebsite/",
    "features": [
      "Responsive Design: Optimized for viewing on various devices.",
      "SEO Friendly: Built with Next.js for improved SEO performance.",
      "Modular Structure: Components and hooks organized for maintainability.",
      "Custom Styling: Rapid UI development with Tailwind CSS.",
      "Static Generation: Fast loading with static site generation provided by Next.js."
    ]
  },
  {
    id: 2,
    title: "One Ramp Landing Page",
    category: "Front End Development",
    description: "Cryptocurrency ramping platform landing page built using Next.js, Tailwind CSS, and TypeScript.",
    longDescription:
        "The website allows users to seamlessly convert fiat currency into cryptocurrency. Users can sign up, securely link their digital wallets, and begin purchasing crypto instantly. The platform offers real-time market data, user-friendly dashboards, and robust security measures, ensuring a smooth and safe experience for all users.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "images/oneramp.png",
    url: "https://oneramp.io",
    github: "",
    features: [
      "Server-side rendering for improved SEO and performance",
      "Optimistic UI updates for a responsive user experience",
      "Responsive design for all device sizes",
    ],
  },
  {
    id: 3,
    title: "Book Collection App",
    category: "Web Development",
    description: "A simple Flask web application to manage a collection of books.",
    longDescription:
        "This app allows users to view all books on the homepage, add new books with their title, author, and rating, remove books from the database, and update book ratings. Data is stored persistently in a SQLite database.",
    tech: ["Python", "Flask", "SQLite", "Flask-WTF", "Bootstrap"],
    image: "images/book.png",
    url: "https://github.com/EgemenErin/Book_Library_App",
    github: "https://github.com/EgemenErin/Book_Library_App",
    features: [
      "View Books: Display a list of all books on the homepage.",
      "Add Book: Submit a form to add a new book with title, author, and rating.",
      "Remove Book: Delete a book from the database.",
      "Update Rating: Edit the rating of an existing book.",
      "Persistent Storage: Data is saved in a SQLite database.",
    ],
  },
  {
    id: 4,
    title: "Audio Recorder & Shazam Clone",
    category: "Data structures and Algorithms, Machine Learning",
    description: "An audio fingerprinting application inspired by Shazam.",
    longDescription:
        "This project allows users to record audio, visualize the waveform in real time, generate unique fingerprints for audio clips, and identify songs by matching them against a database. It also supports adding new songs to the fingerprint database.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
    image: "images/audio.png",
    url: "https://github.com/EgemenErin/ShazamAlgorithm",
    github: "https://github.com/EgemenErin/ShazamAlgorithm",
    features: [
      "Audio Recording: Capture audio from your device's microphone.",
      "Real-Time Visualization: Display a live audio waveform during recording.",
      "Audio Fingerprinting: Generate unique fingerprints for audio clips.",
      "Song Identification: Match audio fingerprints with a pre-built database to identify songs.",
      "Database Management: Add new songs to the fingerprint database.",
    ],
  },
  {
    id: 5,
    title: "Pathfinding Visualizer in Python",
    category: "Algorithm Visualization",
    description: "A simple pathfinding visualizer built using Python and Pygame that demonstrates the A* algorithm.",
    longDescription:
        "This project visually demonstrates the A* algorithm on a grid. Users can interactively set the start and end nodes, place obstacles, and reset nodes—all while watching the algorithm compute the shortest path in real time. The code is organized into separate modules for clarity and easy maintenance.",
    tech: ["Python", "Pygame"],
    image: "images/pathfind.png",
    url: "https://www.youtube.com/watch?v=O0MvdhQdj6I&t=6s",
    github: "https://github.com/EgemenErin/Pathfinding_Visualizer",
    features: [
      "Interactive Grid: Set start and end nodes, place barriers with clicks, and reset nodes with a right-click.",
      "A* Algorithm Visualization: Get visual feedback on nodes being considered (open/closed) and see the path reconstruction once the goal is reached.",
      "Modular Codebase: Organized into separate files for improved readability and maintenance."
    ],
  },
]

