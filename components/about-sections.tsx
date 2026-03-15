"use client"

import * as React from "react"
import Link from "next/link"
import { ShieldCheck, Clock, Leaf, BarChart3, Users, HeartHandshake, Lightbulb, Award } from "lucide-react"

/* ─────────────────────────────── data ────────────────────────────────── */
const missionCards = [
  { icon: ShieldCheck, title: "جودة تنفيذية عالية", desc: "نلتزم بأحدث معايير الجودة الدولية في كل مرحلة من مراحل التنفيذ." },
  { icon: Clock,       title: "التزام بالمواعيد",   desc: "ننجز مشاريعنا في المواعيد المحددة دون المساومة على دقة التنفيذ." },
  { icon: Leaf,        title: "أمن واستدامة",        desc: "نبني بنية تحتية آمنة مستدامة تصمد أمام تحديات الزمن." },
]

const stats = [
  { value: "120+", label: "مشروع منجز"        },
  { value: "10+",  label: "سنوات خبرة"         },
  { value: "50+",  label: "مهندس ومتخصص"       },
  { value: "98%",  label: "نسبة رضا العملاء"   },
]

const values = [
  { icon: ShieldCheck,    title: "الجودة أولاً",          desc: "نرفع سقف معايير التنفيذ في كل مشروع بلا استثناء."                  },
  { icon: HeartHandshake, title: "الشفافية والثقة",       desc: "نبني علاقات شراكة حقيقية مع عملائنا قائمة على الوضوح."             },
  { icon: BarChart3,      title: "الكفاءة التشغيلية",     desc: "إدارة موارد ذكية تضمن تحقيق أفضل النتائج بأمثل التكاليف."          },
  { icon: Users,          title: "الفريق المتكامل",        desc: "كوادر بشرية متخصصة تعمل بروح الفريق نحو هدف واحد."               },
  { icon: Lightbulb,      title: "الابتكار الهندسي",      desc: "نوظّف أحدث التقنيات لإيجاد حلول إنشائية ذكية ومستدامة."           },
  { icon: Award,          title: "الالتزام بالأخلاق المهنية", desc: "نحافظ على أعلى معايير النزاهة في جميع تعاملاتنا." },
]

/* ──────────────────────────────── component ───────────────────────────── */
export function AboutExtraSections() {
  return (
    <div>

      {/* ══════════════════ Section 1 · رسالتنا ══════════════════ */}
      <section id="about-section-1" className="pt-10 md:pt-14 pb-20 md:pb-28 bg-white">
        <div className="container mx-auto px-4">

          {/* badge + headline */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A023]/10 border border-[#C5A023]/20 text-[#C5A023] text-xs font-bold tracking-widest uppercase mb-4">
              ما نؤمن به
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#001F3F]">
              رسالتنا في <span className="text-[#C5A023]">البناء والتشييد</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
              نلتزم بتقديم حلول تشييد وبناء كاملة تُراعي أعلى معايير الجودة والسلامة،
              مع احترام الجداول الزمنية وتقديم قيمة مضافة لكل عميل.
            </p>
          </div>

          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {missionCards.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative bg-[#F7F8FA] hover:bg-[#001F3F] rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#C5A023]/10 group-hover:bg-[#C5A023]/20 flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-6 h-6 text-[#C5A023]" />
                </div>
                <h3 className="text-lg font-black text-[#001F3F] group-hover:text-white mb-2 transition-colors">{title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-white/70 leading-relaxed transition-colors">{desc}</p>
                {/* gold bottom accent */}
                <span className="absolute bottom-0 right-8 h-1 w-0 bg-[#C5A023] rounded-t-full group-hover:w-12 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ Section 2 · خبرتنا وفريقنا ══════════════════ */}
      <section id="about-section-2" className="py-20 md:py-28 bg-[#001F3F] relative overflow-hidden">
        {/* decorative blur */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#C5A023]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#C5A023]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* image */}
            <div className="relative rounded-3xl overflow-hidden h-80 shadow-2xl order-last lg:order-first">
              <img
                src="/images/Zatproject (5).jpeg"
                alt="فريق ذات العماد"
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#001F3F]/60 to-transparent" />
            </div>

            {/* text + stats */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A023]/15 border border-[#C5A023]/30 text-[#C5A023] text-xs font-bold tracking-widest uppercase mb-5">
                من نحن
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
                خبرتنا <span className="text-[#C5A023]">وفريقنا</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                فريق هندسي وإداري ذو خبرة عملية واسعة في تنفيذ المشاريع السكنية والتجارية والصناعية.
                نوفّر إدارة مشروع متكاملة بداية من التصميم وحتى التسليم.
              </p>

              {/* stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 text-center transition-colors"
                  >
                    <div className="text-2xl font-extrabold text-[#C5A023]">{value}</div>
                    <div className="text-xs text-white/60 mt-1 font-medium">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ Section 3 · قيمنا ومزايا العمل معنا ══════════════════ */}
      <section id="about-section-3" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">

          {/* badge + headline */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A023]/10 border border-[#C5A023]/20 text-[#C5A023] text-xs font-bold tracking-widest uppercase mb-4">
              لماذا ذات العماد
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#001F3F]">
              قيمنا <span className="text-[#C5A023]">ومزايا العمل معنا</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
              نؤمن بأنّ الشفافية، الالتزام، والجودة هي أساس كل علاقة مهنية ناجحة.
            </p>
          </div>

          {/* values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-14">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-5 items-start p-6 rounded-2xl border border-[#001F3F]/6 hover:border-[#C5A023]/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#001F3F]/5 group-hover:bg-[#C5A023]/10 flex items-center justify-center transition-colors">
                  <Icon className="w-5 h-5 text-[#C5A023]" />
                </div>
                <div>
                  <h4 className="font-black text-[#001F3F] mb-1">{title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#001F3F] hover:bg-[#C5A023] text-white hover:text-[#001F3F] font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              ابدأ مشروعك معنا الآن
            </Link>
          </div>

        </div>
      </section>

    </div>
  )
}

