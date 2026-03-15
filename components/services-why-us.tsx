"use client"

import * as React from "react"
import Link from "next/link"
import { CheckCircle2, ArrowLeft } from "lucide-react"

const reasons = [
  "فريق هندسي داخلي بلا اعتماد على مقاولين من الباطن",
  "تنفيذ أكثر من 120 مشروع بنسبة رضا 98%",
  "التزام صارم بالجداول الزمنية المتفق عليها",
  "تغطية كاملة لكافة محافظات مصر",
  "ضمان هندسي موثق بعد التسليم",
  "شفافية كاملة في التكاليف بلا مفاجآت",
]

export function ServicesWhyUs() {
  return (
    <section className="py-20 md:py-28 bg-[#001F3F] relative overflow-hidden">

      {/* blobs */}
      <div className="absolute -top-40 -right-40 w-[480px] h-[480px] bg-[#C5A023]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[480px] h-[480px] bg-[#C5A023]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* image collage */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden h-52 col-span-2">
              <img
                src="/residential-towers-under-construction.jpg"
                alt="أبراج سكنية"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-44">
              <img
                src="/images/Zatproject (4).jpeg"
                alt="تنفيذ مشروع"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-44">
              <img
                src="/images/Zatproject (6).jpeg"
                alt="تشطيبات"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A023]/15 border border-[#C5A023]/30 text-[#C5A023] text-xs font-bold tracking-widest uppercase mb-5">
              لماذا ذات العماد؟
            </span>

            <h2 className="text-3xl md:text-4xl font-black text-white mb-5 leading-snug">
              الفرق الحقيقي يظهر
              <span className="block text-[#C5A023]">في التفاصيل</span>
            </h2>

            <p className="text-white/60 leading-relaxed mb-8 text-sm">
              لا نؤمن بالحلول المؤقتة. كل مشروع نتولاه يُعامَل كأنه مشروعنا نحن —
              بنفس المعايير والالتزام والاهتمام بكل تفصيلة صغيرة.
            </p>

            <ul className="space-y-3 mb-10">
              {reasons.map((reason, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A023] shrink-0 mt-0.5" />
                  {reason}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#C5A023] hover:bg-white text-[#001F3F] font-bold px-7 py-3 rounded-full text-sm transition-all duration-300 hover:scale-105 group"
            >
              تواصل مع فريقنا الهندسي
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
