import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./waitlist.css";

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "for(u) — join the loop",
  description:
    "for(u) is a community built for devs, analysts, engineers, and students to connect, debate, and share their projects. Join the loop.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "for(u) — join the loop",
    description:
      "A community for devs, analysts, engineers, and students to connect, debate, and share their projects.",
    type: "website",
  },
};

export default function WaitlistLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={`${mono.variable} foru-root`}>{children}</div>;
}
