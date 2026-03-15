"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft, ZoomIn } from "lucide-react"

const galleryItems = [
  {
    src: "/images/Zatproject (1).jpeg",
    label: "المشاريع السكنية الكبري",
    category: "إنشاءات",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/Zatproject (3).jpeg",
    label: "تشطيبات إدارية فاخرة",
    category: "تشطيبات",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/Zatproject (5).jpeg",
    label: "تطوير البنية التحتية",
    category: "طرق ومرافق",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/Zatproject (7).jpeg",
    label: "منشآت تعليمية متطورة",
    category: "إنشاءات",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    src: "/images/Zatproject (9).jpeg",
    label: "شبكات الري والصرف",
    category: "بنية تحتية",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/Zatproject (2).jpeg",
    label: "أعمال الهياكل الخرسانية",
    category: "إنشاءات",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/Zatproject (4).jpeg",
    label: "تنسيق لاندسكيب",
    category: "تجميل",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/Zatproject (11).jpeg",
    label: "تصميم واجهات مودرن",
    category: "ديكور خارجي",
    span: "md:col-span-1 md:row-span-1",
  },
]

export function ServicesGallery() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">

        {/* headline */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A023]/10 border border-[#C5A023]/20 text-[#C5A023] text-[10px] font-black tracking-widest uppercase">
            مستوى التنفيذ
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#001F3F]">
            مشروعاتنا <span className="text-[#C5A023]">تتحدث عنّا</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            نماذج حقيقية من مشروعات نفّذناها على أرض الواقع، كل صورة تحكي قصة التزامنا بالجودة والذكاء الهندسي.
          </p>
        </div>

        {/* mosaic grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[240px] gap-4 max-w-7xl mx-auto">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`group relative rounded-3xl overflow-hidden border-4 border-zinc-50 dark:border-zinc-900 shadow-xl transition-all duration-700 hover:shadow-2xl hover:border-[#C5A023]/20 ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-linear-to-t from-[#001F3F]/90 via-[#001F3F]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                   <div className="space-y-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center justify-between">
                        <span className="text-[#C5A023] text-[10px] font-black tracking-widest uppercase">
                          {item.category}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                          <ZoomIn className="w-4 h-4" />
                        </div>
                      </div>
                      <h4 className="text-white font-black text-lg leading-tight">
                        {item.label}
                      </h4>
                   </div>
                </div>
              </div>

              {/* Minimalist category badge (visible by default) */}
              <div className="absolute top-4 right-4 group-hover:opacity-0 transition-opacity">
                 <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md px-3 py-1 rounded-xl text-[#001F3F] text-[9px] font-black uppercase tracking-wider shadow-sm">
                   {item.category}
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/projects-gallery"
            className="inline-flex items-center gap-3 bg-[#001F3F] text-white hover:bg-[#C5A023] hover:text-[#001F3F] font-black px-8 py-4 rounded-2xl transition-all duration-500 text-sm group shadow-xl shadow-[#001F3F]/10 overflow-hidden relative"
          >
            <span className="relative z-10">تصفح كامل سابقة الأعمال</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </Link>
        </div>
      </div>
    </section>
  )
}

