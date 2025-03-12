// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type Data = {
    message: string
    info?: any
    error?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST')
        return res.status(405).json({ message: 'Method Not Allowed' })
    }

    const { name, email, message } = req.body

    // Create a nodemailer transporter using your email service credentials
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST, // e.g., smtp.gmail.com
        port: Number(process.env.EMAIL_PORT), // e.g., 465 for secure
        secure: Number(process.env.EMAIL_PORT) === 465, // true for 465, false for others
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    })

    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_FROM, // sender address
            to: process.env.EMAIL_TO, // list of receivers
            subject: `New message from ${name}`,
            text: message,
            html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
        })

        res.status(200).json({ message: 'Email sent successfully', info })
    } catch (error) {
        console.error('Error sending email:', error)
        res.status(500).json({ message: 'Error sending email', error: (error as Error).message })
    }
}
