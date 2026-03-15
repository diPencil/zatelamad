import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "نماذج مشاريعنا | ذات العماد للمقاولات العامة",
  description: "سجل حافل من المشروعات الناجحة التي نفذتها ذات العماد للمقاولات العامة على مدار أكثر من 15 عاماً.",
}

export default function ProjectsSamplesPage() {
  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="relative pt-36 lg:pt-52 pb-20 bg-[#001F3F] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/modern-concrete-building-architecture-construction.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#001F3F]/60 to-[#001F3F]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-[#C5A023] mb-4">نماذج مشاريعنا</h1>
          <p className="text-white/70 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            تفتخر ذات العماد بسجل حافل من المشروعات الناجحة التي تعكس التزامنا بالجودة والتميز على مدى أكثر من 15 عاماً.
          </p>
        </div>
      </section>

      <Projects />
      <Experience />
    </main>
  )
}
