"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { Quote } from "lucide-react"

type Testimonial = {
    id: number
    quote: string
    name: string
    position: string
    company: string
    image?: string
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote:
            "We had the pleasure of working with Egemen on the design and development of our landing page for OneRamp Inc. Egemen delivered an outstanding design in Figma that perfectly captured our vision. His attention to detail and creative expertise truly impressed us. Moreover, Egemen's ability to bring the design to life through flawless development was exceptional. He completed the project within the agreed timeframe, exceeding our expectations in both quality and efficiency. We highly recommend Egemen for any design and development projects.",
        name: "Elias Hezron",
        position: "CEO",
        company: "OneRamp Inc.",
        image: "https://media.licdn.com/dms/image/v2/D4D0BAQGQWQSPXnoSWA/company-logo_200_200/company-logo_200_200/0/1694067527015?e=1749686400&v=beta&t=jutSqTiUH1kg2viF1RbgLjMrHnh1f3IgaWdZo4fm6wQ",
    },
    {
        id: 2,
        quote:
            "Working with Egemen on the prototype game 'Slide Cubes Puzzle' at Boem Games was a fantastic experience. Egemen contributed significantly to the core mechanics, designed engaging level progression, and collaborated closely with our team to refine gameplay elements. His focus on interactive design and optimization made the game accessible and enjoyable across various platforms.",
        name: "Emirhan Ozger",
        position: "Product Manager",
        company: "Longhorn Games",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQHDgu-cnHYX9g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693854521200?e=1747267200&v=beta&t=sozNX4s9jq7PZYimiSWq4zS1MupxAH8HF1CmhpGjhtQ",
    },
    {
        id: 3,
        quote:
            "Egemen is a dedicated and insightful team member in our diploma project at WSB University Poznan. His technical expertise and commitment to excellence greatly contribute to the project's progress and success. His collaboration and proactive approach make him invaluable to our team.",
        name: "Eric Muganga",
        position: "Student",
        company: "WSB University Poznan",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQHopYNgMJ3w3w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680935477667?e=1747267200&v=beta&t=Bie-DF2cwavOAT-_ISvBJsj3Gpf_hs86St4dfsk-roU",
    },
    {
        id: 4,
        quote:
            "Working alongside Egemen on our diploma project at WSB University Poznan has been a rewarding experience. Egemen consistently brings innovative ideas and effective solutions, demonstrating both technical proficiency and excellent teamwork. He is instrumental in driving the project forward.",
        name: "Ivan Andreu",
        position: "Student",
        company: "WSB University Poznan",
        image: "https://media.licdn.com/dms/image/v2/D5635AQHYc4qqDJnU2w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1698093658168?e=1742486400&v=beta&t=WnjRMk3IxrqGY8uf2zDDvgOHVlh_giJSsLG1KEQELQ0",
    },
]

export function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0)
    const controls = useAnimation()
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const goToTestimonial = (index: number) => {
        setActiveIndex(index)
    }

    // Reset the interval when activeIndex changes
    useEffect(() => {
        controls.start({
            opacity: [0, 1],
            y: [20, 0],
            transition: { duration: 0.5 },
        })

        // Auto-advance testimonials
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }

        intervalRef.current = setInterval(() => {
            nextTestimonial()
        }, 8000)

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [activeIndex, controls])

    return (
        <div className="relative">
            <motion.div
                className="absolute -top-10 -left-10 opacity-10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Quote size={80} />
            </motion.div>

            <div className="relative z-10">
                <motion.div key={activeIndex} animate={controls} className="bg-[#F5F5DC] p-8 rounded-lg">
                    <p className="text-lg italic mb-6">{testimonials[activeIndex].quote}</p>

                    <div className="flex items-center">
                        {testimonials[activeIndex].image && (
                            <div className="mr-4 w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                <img
                                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                                    alt={testimonials[activeIndex].name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        <div>
                            <div className="font-medium">{testimonials[activeIndex].name}</div>
                            <div className="text-sm text-gray-600">
                                {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="flex justify-between items-center mt-6">
                    <div className="flex space-x-2">
                        {testimonials.map((_, index) => (
                            <motion.button
                                key={index}
                                className={`w-2 h-2 rounded-full ${index === activeIndex ? "bg-black" : "bg-gray-300"}`}
                                onClick={() => goToTestimonial(index)}
                                whileHover={{ scale: 1.5 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        ))}
                    </div>

                    <div className="flex space-x-4">
                        <motion.button
                            onClick={prevTestimonial}
                            className="w-10 h-10 rounded-full bg-[#F5F5DC] flex items-center justify-center"
                            whileHover={{ scale: 1.1, backgroundColor: "#EEEEDA" }}
                            whileTap={{ scale: 0.9 }}
                        >
                            ←
                        </motion.button>
                        <motion.button
                            onClick={nextTestimonial}
                            className="w-10 h-10 rounded-full bg-[#F5F5DC] flex items-center justify-center"
                            whileHover={{ scale: 1.1, backgroundColor: "#EEEEDA" }}
                            whileTap={{ scale: 0.9 }}
                        >
                            →
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}

