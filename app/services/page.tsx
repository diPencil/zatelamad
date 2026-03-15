"use client"

import { Services } from "@/components/services"
import { Capabilities } from "@/components/capabilities"
import { Methodology } from "@/components/methodology"
import { ServicesGallery } from "@/components/services-gallery"
import { ServicesWhyUs } from "@/components/services-why-us"
import Link from "next/link"
import { Phone, Mail } from "lucide-react"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="relative pt-36 lg:pt-52 pb-20 bg-[#001F3F] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="/modern-concrete-building-architecture-construction.jpg" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-black text-[#C5A023] mb-4">خدماتنا الهندسية</h1>
            <p className="text-white/70 text-base md:text-lg max-w-4xl md:max-w-5xl mx-auto leading-relaxed">نقدم مجموعة متكاملة من حلول التشييد والبناء، من التصميم المبدئي وحتى التسليم النهائي للمشروع.</p>
        </div>
      </section>

      <Services />
      <Methodology />
      <Capabilities />
      <ServicesGallery />
      <ServicesWhyUs />

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#F7F8FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">

              {/* left: dark panel */}
              <div className="bg-[#001F3F] p-10 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#C5A023]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <span className="inline-block text-[10px] font-black tracking-[0.3em] uppercase text-[#C5A023] mb-4">ابدأ الآن</span>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-snug">
                    هل لديك مشروع
                    <span className="block text-[#C5A023]">تريد تنفيذه؟</span>
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    فريقنا الهندسي جاهز لدراسة مشروعك وتقديم عرض سعر مفصّل خلال 48 ساعة من تاريخ تواصلك معنا.
                  </p>
                </div>
                <div className="mt-8 relative z-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-[#C5A023] hover:bg-white text-[#001F3F] font-bold px-6 py-3 rounded-full text-sm transition-all hover:scale-105"
                  >
                    احجز استشارتك المجانية
                  </Link>
                </div>
              </div>

              {/* right: contact options */}
              <div className="p-10 flex flex-col justify-center gap-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  يسعدنا الردّ على كل استفساراتكم والتعاون معكم في تنفيذ مشاريعكم بكل احترافية.
                </p>

                <a href="tel:+201023610692" className="group flex items-center gap-4 p-4 rounded-2xl border border-[#001F3F]/8 hover:border-[#C5A023]/40 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#C5A023]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#C5A023]" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">اتصل بنا مباشرة</div>
                    <div className="font-black text-[#001F3F] text-sm" dir="ltr">+20 10 23610692</div>
                  </div>
                </a>

                <a href="mailto:info@zatelamad.com" className="group flex items-center gap-4 p-4 rounded-2xl border border-[#001F3F]/8 hover:border-[#C5A023]/40 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#C5A023]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#C5A023]" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">راسلنا بالبريد</div>
                    <div className="font-black text-[#001F3F] text-sm">info@zatelamad.com</div>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
