import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ConditionalNav } from "@/components/conditional-nav"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "900"],
})

export const metadata: Metadata = {
  title: {
    default: "ذات العماد للمقاولات العموميه | جودة وبناء متكامل",
    template: "%s | ذات العماد للمقاولات العموميه",
  },
  description: "شركة ذات العماد للمقاولات العموميه، رائدة في المشروعات الإنشائية، التشطيبات الفاخرة، والترميم في مصر. جودة، التزام، وإدارة احترافية.",
  keywords: ["مقاولات عمومية", "شركة بناء", "تشطيبات فاخرة", "ترميم مباني", "هندسة معمارية", "ذات العماد", "مقاولات مصر"],
  authors: [{ name: "Zat Al-Emad" }],
  creator: "diPencil Studio",
  publisher: "Zat Al-Emad",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ذات العماد للمقاولات العموميه",
    description: "شركة رائدة في مجال المقاولات والإنشاءات والتشطيبات الفاخرة في مصر.",
    url: "https://zatelamad.com",
    siteName: "ذات العماد",
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ذات العماد للمقاولات العموميه",
    description: "حلول هندسية وإنشائية متكاملة بأعلى معايير الجودة.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} antialiased bg-[#F8F9FA]`}>
        <ConditionalNav>
          {children}
        </ConditionalNav>
        <Analytics />
      </body>
    </html>
  )
}
