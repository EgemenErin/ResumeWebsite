import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { absoluteUrl } from "@/lib/site";
import "./waitlist.css";

const ogImage = {
  url: absoluteUrl("/images/foru-og.png"),
  width: 1200,
  height: 1200,
  alt: "for(u) — join the loop",
};

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
    url: absoluteUrl("/waitlist"),
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "for(u) — join the loop",
    description:
      "A community for devs, analysts, engineers, and students to connect, debate, and share their projects.",
    images: [ogImage.url],
  },
};

export default function WaitlistLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={`${mono.variable} foru-root`}>{children}</div>;
}
