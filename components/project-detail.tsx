import Link from "next/link"
import { ArrowLeft } from "lucide-react"


type ProjectDetailProps = {
  title: string
  description: string
  image: string
  category: string
  year: string
  client: string
  role: string
  link?: {
    url: string
    text: string
  }
}

export function ProjectDetail({ title, description, image, category, year, client, role, link }: ProjectDetailProps) {
  return (
    <div className="container mx-auto px-6 md:px-12 py-20">
      {/* 
        container: Centers content and sets max width based on screen size
        mx-auto: Centers horizontally with auto margins
        px-6: Adds horizontal padding (1.5rem) on mobile
        md:px-12: Increases horizontal padding to 3rem on medium screens and up
        py-20: Adds vertical padding (5rem)
      */}
      <Link href="/" className="inline-flex items-center text-sm mb-12 hover:underline">
        {/* 
          inline-flex: Creates an inline flexbox layout
          items-center: Centers items along the cross axis
          text-sm: Sets font size to 0.875rem
          mb-12: Adds margin bottom (3rem)
          hover:underline: Adds underline on hover
        */}
        <ArrowLeft className="w-4 h-4 mr-2" />
        {/* 
          w-4 h-4: Sets width and height to 1rem
          mr-2: Adds margin right (0.5rem)
        */}
        Back to projects
      </Link>

      <h1 className="font-serif text-4xl md:text-6xl mb-8">{title}</h1>
      {/* 
        font-serif: Uses the serif font family (Playfair Display)
        text-4xl: Sets font size to 2.25rem on mobile
        md:text-6xl: Increases font size to 3.75rem on medium screens and up
        mb-8: Adds margin bottom (2rem)
      */}

      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 mb-12">
        {/* 
          grid: Creates a grid layout
          grid-cols-1: Single column on mobile
          md:grid-cols-[2fr_1fr]: On medium screens, first column takes 2/3 width, second takes 1/3
          gap-12: Adds gap between grid items (3rem)
          mb-12: Adds margin bottom (3rem)
        */}
        <p className="text-lg leading-relaxed">{description}</p>
        {/* 
          text-lg: Sets font size to 1.125rem
          leading-relaxed: Sets line height to 1.625 (more spacious)
        */}

        <div className="space-y-6">
          {/* space-y-6: Adds vertical spacing between children (1.5rem) */}
          <div>
            <h3 className="text-xs text-gray-500 mb-1">Category</h3>
            {/* 
              text-xs: Sets font size to 0.75rem
              text-gray-500: Sets text color to gray (rgb(107, 114, 128))
              mb-1: Adds margin bottom (0.25rem)
            */}
            <p className="text-sm">{category}</p>
            {/* text-sm: Sets font size to 0.875rem */}
          </div>

          <div>
            <h3 className="text-xs text-gray-500 mb-1">Year</h3>
            <p className="text-sm">{year}</p>
          </div>

          <div>
            <h3 className="text-xs text-gray-500 mb-1">Client</h3>
            <p className="text-sm">{client}</p>
          </div>

          <div>
            <h3 className="text-xs text-gray-500 mb-1">Role</h3>
            <p className="text-sm">{role}</p>
          </div>

          {link && (
            <div>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm inline-flex items-center hover:underline"
              >
                {/* 
                  text-sm: Sets font size to 0.875rem
                  inline-flex: Creates an inline flexbox layout
                  items-center: Centers items along the cross axis
                  hover:underline: Adds underline on hover
                */}
                {link.text}
                <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                {/* 
                  w-4 h-4: Sets width and height to 1rem
                  ml-1: Adds margin left (0.25rem)
                  rotate-180: Rotates the element 180 degrees (points right)
                */}
              </a>
            </div>
          )}
        </div>
      </div>

      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-auto object-cover mb-20" />
      {/* 
        w-full: Sets width to 100%
        h-auto: Sets height to auto (maintains aspect ratio)
        object-cover: Resizes the image to cover the container while maintaining aspect ratio
        mb-20: Adds margin bottom (5rem)
      */}

      {/* Additional project images could be added here */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 
          grid: Creates a grid layout
          grid-cols-1: Single column on mobile
          md:grid-cols-2: Two columns on medium screens and up
          gap-8: Adds gap between grid items (2rem)
        */}
        <img src="/placeholder.svg?height=600&width=800" alt="Project detail" className="w-full h-auto" />
        <img src="/placeholder.svg?height=600&width=800" alt="Project detail" className="w-full h-auto" />
      </div>
    </div>
  )
}

