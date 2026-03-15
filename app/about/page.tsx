import type { Metadata } from "next"
import { About } from "@/components/about"
import { CompanyValues } from "@/components/company-values"
import { Vision } from "@/components/vision"
import { ProfessionalStatement } from "@/components/professional-statement"
import { AboutExtraSections } from "@/components/about-sections"

export const metadata: Metadata = {
  title: "عن ذات العماد | ذات العماد للمقاولات العموميه",
  description: "تعرف على شركة ذات العماد للمقاولات العموميه — رؤيتنا وقيمنا وفريقنا الهندسي المتخصص الذي يبني المشروعات الكبرى في مصر.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="relative pt-36 lg:pt-52 pb-20 bg-[#001F3F] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="/modern-construction-site-building-concrete-structu.jpg" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-black text-[#C5A023] mb-4">عن ذات العماد</h1>
            <p className="text-white/70 text-base md:text-lg max-w-4xl md:max-w-5xl mx-auto leading-relaxed">أكثر من عقد من الزمان في بناء الصروح وتشييد المستقبل بأعلى المعايير الهندسية والاحترافية.</p>
        </div>
      </section>

      <About />
      <AboutExtraSections />
      <Vision />
      <div className="bg-muted/30">
        <CompanyValues />
      </div>
      <ProfessionalStatement />
    </main>
  )
}
