"use client"

import { HardHat, Ruler, Building2, PencilRuler } from "lucide-react"

const workDetails = [
  {
    icon: Building2,
    title: "الإنشاءات السكنية",
    description: "ننفذ مجمعات سكنية متكاملة الخدمات مع التركيز على الكفاءة الإنشائية واستغلال المساحات.",
  },
  {
    icon: Ruler,
    title: "أعمال التشطيبات",
    description: "نقدم حلول تشطيب احترافية تجمع بين الجودة الفنية واللمسة الجمالية العصرية.",
  },
  {
    icon: HardHat,
    title: "إدارة المشروعات",
    description: "إشراف هندسي دقيق يضمن سير العمل وفق الجداول الزمنية والمواصفات المعتمدة.",
  },
  {
    icon: PencilRuler,
    title: "التصميم والتخطيط",
    description: "تحويل الأفكار إلى مخططات واقعية قابلة للتنفيذ تجمع بين الوظيفة والإبداع.",
  },
]

export function WorkDetails() {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50" id="work-details">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#001F3F] dark:text-white leading-[1.1]">
                كيف ندير <span className="text-[#C5A023]">التميز</span> في مشاريعنا؟
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                نعتمد على منهجية عمل صارمة تضمن الجودة بداية من مرحلة التخطيط وحتى تسليم المفتاح، مع التزام تام بكود البناء المصري.
              </p>
              <div className="pt-4 border-r-4 border-[#C5A023] pr-6">
                <p className="font-bold text-[#001F3F] dark:text-white italic">
                  "الجودة في ذات العماد ليست مجرد معيار، بل هي أسلوب حياة وهدف نسعى لتحقيقه في كل لبنة نضعها."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {workDetails.map((detail, index) => (
              <div 
                key={index} 
                className="group p-10 bg-white dark:bg-zinc-800 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-700 shadow-xl transition-all hover:bg-[#001F3F] hover:border-[#001F3F] text-right"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#C5A023]/10 flex items-center justify-center text-[#C5A023] mb-8 transition-colors group-hover:bg-white/20 group-hover:text-white">
                  <detail.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-[#001F3F] dark:text-white transition-colors group-hover:text-[#C5A023]">
                  {detail.title}
                </h3>
                <p className="text-muted-foreground transition-colors group-hover:text-white/80 leading-relaxed text-lg">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
