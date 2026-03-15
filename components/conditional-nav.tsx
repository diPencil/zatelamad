"use client"

import { usePathname } from "next/navigation"
import { Topbar } from "./topbar"
import { Header } from "./header"
import { Footer } from "./footer"

export function ConditionalNav({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAiPage = pathname === "/ai-consultant"

  if (isAiPage) {
    return <main>{children}</main>
  }

  return (
    <>
      <Topbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
