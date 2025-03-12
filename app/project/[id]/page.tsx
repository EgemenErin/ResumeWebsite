import { ProjectDetail } from "@/components/project-detail"

// Sample project data - in a real app, this would come from a database or CMS
const projects = {
  "project-1": {
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js 13 and TypeScript. Features include product listings, cart functionality, user authentication, payment processing with Stripe, and an admin dashboard for managing products and orders.",
    image: "/placeholder.svg?height=800&width=1200",
    category: "Full Stack Development",
    year: "2023",
    client: "Retail Company",
    role: "Lead Developer",
    link: {
      url: "https://example.com",
      text: "Visit website",
    },
  },
  "project-2": {
    title: "AI Code Assistant",
    description:
      "An AI-powered code completion tool using OpenAI's GPT-4. The application provides intelligent code suggestions, bug detection, and code refactoring recommendations. Built with a Python backend and React frontend.",
    image: "/placeholder.svg?height=800&width=1200",
    category: "Machine Learning",
    year: "2022",
    client: "Developer Tools Startup",
    role: "ML Engineer & Frontend Developer",
    link: {
      url: "https://example.com",
      text: "Try the demo",
    },
  },
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch this data from an API or database
  const project = projects[params.id as keyof typeof projects] || projects["project-1"]

  return <ProjectDetail {...project} />
}

