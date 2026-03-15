"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Bot, ChevronDown, Building2, Newspaper, Images, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/* ── Dropdown items under "عن الشركة" ── */
const aboutDropdown = [
  {
    name: "عن ذات العماد",
    href: "/about",
    icon: Building2,
    desc: "تعرّف على شركتنا ورؤيتنا وقيمنا",
  },
  {
    name: "المدونة والأخبار",
    href: "/blog",
    icon: Newspaper,
    desc: "أحدث المقالات والأخبار الهندسية",
  },
  {
    name: "معرض المشروعات",
    href: "/projects-gallery",
    icon: Images,
    desc: "صور وفيديوهات من مواقع العمل",
  },
  {
    name: "الإنجازات",
    href: "/achievements",
    icon: Trophy,
    desc: "سابقة أعمالنا — قابل للتحميل PDF",
  },
]

const topLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "خدماتنا", href: "/services" },
  { name: "تواصل معنا", href: "/contact" },
]

/* ── mobile flat list ── */
const mobileLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "عن ذات العماد", href: "/about" },
  { name: "المدونة والأخبار", href: "/blog" },
  { name: "معرض المشروعات", href: "/projects-gallery" },
  { name: "نماذج مشاريعنا", href: "/projects-samples" },
  { name: "الإنجازات", href: "/achievements" },
  { name: "خدماتنا", href: "/services" },
  { name: "تواصل معنا", href: "/contact" },
  { name: "مستشارك الذكي", href: "/ai-consultant" },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [dropOpen, setDropOpen] = React.useState(false)
  const dropRef = React.useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* close dropdown on outside click */
  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  /* close dropdown on route change */
  React.useEffect(() => { setDropOpen(false); setIsOpen(false) }, [pathname])

  const isAboutActive = aboutDropdown.some((d) => pathname === d.href)

  return (
    <header
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 no-print w-[95%] max-w-7xl",
        "bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-full py-2 lg:py-3 px-6 lg:px-10",
        scrolled ? "top-4 lg:top-6 scale-95" : "top-8 lg:top-14 scale-100"
      )}
    >
      <div className="flex justify-between items-center w-full">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-4 shrink-0">
          <img src="/zatlogo.png" alt="Logo" className="h-10 md:h-12" />
          <div className="flex flex-col border-r-2 border-[#C5A023] pr-4 text-[#001F3F]">
            <span className="text-base md:text-xl font-black leading-tight tracking-tight">ذات العماد</span>
            <span className="text-[8px] md:text-[10px] font-extrabold tracking-[0.2em] opacity-80 uppercase leading-none mt-1">للمقاولات العموميه</span>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-8 mx-auto">

          {/* الرئيسية */}
          <Link href="/" className={cn("text-xs font-black uppercase tracking-wider transition-all hover:text-[#C5A023] relative group", pathname === "/" ? "text-[#C5A023]" : "text-[#001F3F]")}>
            الرئيسية
            <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#C5A023] transition-all group-hover:w-full" />
          </Link>

          {/* عن الشركة dropdown */}
          <div ref={dropRef} className="relative">
            <button
              onClick={() => setDropOpen((p) => !p)}
              className={cn(
                "flex items-center gap-1 text-xs font-black uppercase tracking-wider transition-all hover:text-[#C5A023] relative group",
                isAboutActive ? "text-[#C5A023]" : "text-[#001F3F]"
              )}
            >
              عن الشركة
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", dropOpen && "rotate-180")} />
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#C5A023] transition-all group-hover:w-full" />
            </button>

            {/* Dropdown panel */}
            <div className={cn(
              "absolute top-full right-0 mt-4 w-72 bg-white rounded-2xl shadow-2xl border border-[#001F3F]/8 overflow-hidden transition-all duration-300 origin-top-right",
              dropOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            )}>
              <div className="p-2">
                {aboutDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-start gap-3 p-3 rounded-xl transition-all hover:bg-[#F7F8FA] group",
                      pathname === item.href && "bg-[#F7F8FA]"
                    )}
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#C5A023]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C5A023]/20 transition-colors mt-0.5">
                      <item.icon className="w-4 h-4 text-[#C5A023]" />
                    </div>
                    <div>
                      <p className={cn("text-sm font-black leading-tight", pathname === item.href ? "text-[#C5A023]" : "text-[#001F3F]")}>
                        {item.name}
                      </p>
                      <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="border-t border-[#001F3F]/6 px-4 py-2 bg-[#F7F8FA]">
                <p className="text-[10px] text-muted-foreground text-center">ذات العماد للمقاولات العموميه</p>
              </div>
            </div>
          </div>

          {/* خدماتنا */}
          <Link href="/services" className={cn("text-xs font-black uppercase tracking-wider transition-all hover:text-[#C5A023] relative group", pathname.startsWith("/services") ? "text-[#C5A023]" : "text-[#001F3F]")}>
            خدماتنا
            <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#C5A023] transition-all group-hover:w-full" />
          </Link>

          {/* نماذج مشاريعنا */}
          <Link href="/projects-samples" className={cn("text-xs font-black uppercase tracking-wider transition-all hover:text-[#C5A023] relative group", pathname.startsWith("/projects-samples") ? "text-[#C5A023]" : "text-[#001F3F]")}>
            نماذج مشاريعنا
            <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#C5A023] transition-all group-hover:w-full" />
          </Link>

          {/* تواصل معنا */}
          <Link href="/contact" className={cn("text-xs font-black uppercase tracking-wider transition-all hover:text-[#C5A023] relative group", pathname === "/contact" ? "text-[#C5A023]" : "text-[#001F3F]")}>
            تواصل معنا
            <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#C5A023] transition-all group-hover:w-full" />
          </Link>
        </nav>

        {/* ── CTA + Mobile Toggle ── */}
        <div className="flex items-center gap-4">
          <Link href="/ai-consultant">
            <Button className="hidden lg:flex items-center gap-3 bg-[#1A1A1A] hover:bg-[#C5A023] text-white rounded-full px-6 py-6 font-bold shadow-lg transition-all hover:scale-105 group">
              <Bot className="w-5 h-5 text-[#C5A023] group-hover:text-white transition-colors animate-pulse" />
              <span className="text-sm tracking-widest">مستشارك الذكي</span>
            </Button>
          </Link>
          <button className="lg:hidden p-2 text-[#001F3F]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div className={cn(
        "fixed inset-0 bg-[#001F3F]/98 backdrop-blur-2xl z-60 flex flex-col items-center justify-center transition-all duration-700 lg:hidden rounded-4xl overflow-hidden m-4",
        isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-10"
      )}>
        <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
          <X className="w-10 h-10" />
        </button>
        <nav className="flex flex-col items-center gap-8">
          {mobileLinks.map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn("text-2xl font-black transition-all hover:text-[#C5A023] hover:tracking-widest", pathname === item.href ? "text-[#C5A023]" : "text-white")}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col items-center gap-4 mt-12 text-white/60 text-sm">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-[#C5A023]" />
            <span dir="ltr" className="text-xl font-bold text-white tracking-widest">+20 10 23610692</span>
          </div>
        </div>
        <Button
          variant="outline"
          className="mt-10 border-[#C5A023] text-[#C5A023] text-xl px-12 py-8 rounded-full hover:bg-[#C5A023] hover:text-white transition-all transform hover:scale-110"
          onClick={() => setIsOpen(false)}
        >
          تواصل معنا الآن
        </Button>
      </div>
    </header>
  )
}
