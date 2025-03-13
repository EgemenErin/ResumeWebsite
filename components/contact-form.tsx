"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"

export function ContactForm() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isFocused, setIsFocused] = useState({
        name: false,
        email: false,
        message: false,
    })
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const { name, email, message } = formState
        const subject = encodeURIComponent(`Message from ${name}`)
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)
        window.location.href = `mailto:work@egemenerin.com?subject=${subject}&body=${body}`
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-[#F5F5DC] rounded-md border-0 focus:ring-1 focus:ring-black"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-[#F5F5DC] rounded-md border-0 focus:ring-1 focus:ring-black"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 bg-[#F5F5DC] rounded-md border-0 focus:ring-1 focus:ring-black resize-none"
                />
            </div>

            <button
                type="submit"
                className="px-6 py-3 bg-black text-white rounded-md text-sm font-medium transition-all hover:bg-opacity-90"
            >
                Send Message
            </button>
        </form>
    )
}
