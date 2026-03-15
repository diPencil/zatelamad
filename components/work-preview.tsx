"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function WorkPreview() {
  return (
    <section className="relative py-24 bg-[#001F3F] overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A023]/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C5A023]/5 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[#C5A023] font-black tracking-widest text-sm uppercase">سجل الإنجازات</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight">
                أكثر من <span className="text-[#C5A023]">عقد من الزمان</span> في بناء الثقة والتطوير
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                نحن لا نبني مجرد جدران، بل نصنع صروحاً تخدم المجتمع وتدوم لأجيال. سابقتنا تتحدث عن التزامنا بالمعايير العالمية في كل متر مربع ننفذه.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "دقة متناهية في الهياكل الخرسانية",
                "تشطيبات معمارية فاخرة",
                "التزام كامل بالجداول الزمنية",
                "كفاءة عالية في إدارة الموارد",
                "مطابقة لأعلى معايير السلامة",
                "إشراف هندسي متخصص",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A023]" />
                  <span className="font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button size="lg" className="bg-[#C5A023] hover:bg-white text-[#001F3F] px-10 py-7 text-lg font-black rounded-2xl transition-all hover:scale-105 group" asChild>
                <Link href="/projects-gallery">
                  تصفح سابقة أعمالنا الكاملة
                  <ArrowLeft className="mr-3 h-5 w-5 transition-transform group-hover:-translate-x-2" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-3xl overflow-hidden aspect-square border-2 border-[#C5A023]/20 shadow-2xl">
                    <img src="/images/Zatproject (2).jpeg" alt="Works" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-video border-2 border-[#C5A023]/20 shadow-2xl">
                    <img src="/images/Zatproject (5).jpeg" alt="Works" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden aspect-video border-2 border-[#C5A023]/20 shadow-2xl">
                    <img src="/images/Zatproject (8).jpeg" alt="Works" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-square border-2 border-[#C5A023]/20 shadow-2xl">
                    <img src="/images/Zatproject (3).jpeg" alt="Works" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C5A023] text-[#001F3F] p-8 rounded-3xl shadow-2xl text-center border-4 border-[#001F3F] min-w-[180px]">
                <div className="text-4xl font-black">+10</div>
                <div className="text-sm font-bold mt-1">سنوات من الخبرة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
