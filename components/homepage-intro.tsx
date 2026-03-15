"use client"

import { CheckCircle2, ShieldCheck, Zap, ArrowUpRight } from "lucide-react"

export function HomepageIntro() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-zinc-950 overflow-hidden" id="intro">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#C5A023]">
                  <div className="h-px w-8 bg-[#C5A023]" />
                  <span className="text-xs font-black tracking-[0.3em] uppercase">نهج هندسي فريد</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-[#001F3F] dark:text-white leading-tight">
                  نحن لا نبني جدراناً، بل <br />
                  <span className="text-[#C5A023]">نصيغ المستقبل</span> بذكاء
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  نعتمد على المعايير الهندسية العالمية لضمان أن كل مشروع يحمل بصمة الجودة والأمان والاستدامة للأجيال القادمة.
                </p>
                <p>
                  الوقت في "ذات العماد" مقدس، لذا نستخدم أحدث أدوات التخطيط لضمان تسليم مشاريعنا في الجدول الزمني المتفق عليه.
                </p>
              </div>

              <div className="pt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { label: "مشروع منجز", value: "+50" },
                  { label: "سنة خبرة", value: "+10" },
                  { label: "مهندس متخصص", value: "+20" },
                ].map((stat, i) => (
                  <div key={i} className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 transition-colors hover:border-[#C5A023]/30">
                    <div className="text-3xl font-black text-[#C5A023]">{stat.value}</div>
                    <div className="text-[10px] font-bold text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Grid - 3 Cards (Vertical Left, Stacked Right) */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-6 h-full">
                
                {/* 1. Vertical Card (Left - Spans 2 rows) */}
                <div className="row-span-2 relative group rounded-4xl overflow-hidden shadow-xl border-4 border-white dark:border-zinc-900 aspect-4/5 lg:aspect-auto h-full">
                  <img 
                    src="/modern-concrete-building-architecture-construction.jpg" 
                    alt="Construction site" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#001F3F]/60 via-[#001F3F]/20 to-transparent" />
                  <div className="absolute bottom-8 right-8 text-white z-10 transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="w-12 h-12 bg-[#C5A023] rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* 2. Square Card (Right Top) */}
                <div className="relative group rounded-4xl overflow-hidden aspect-square shadow-xl border-4 border-white dark:border-zinc-900">
                  <img 
                    src="/heroslider/Gemini_Generated_Image_vcfegjvcfegjvcfe.png" 
                    alt="Engineering" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-[#C5A023]/10 mix-blend-overlay" />
                </div>

                {/* 3. Square Card (Right Bottom) */}
                <div className="relative group rounded-4xl overflow-hidden aspect-square shadow-xl border-4 border-white dark:border-zinc-900">
                  <img 
                    src="/heroslider/Gemini_Generated_Image_wdzyg1wdzyg1wdzy.png" 
                    alt="Expertise" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-[#001F3F]/20 mix-blend-multiply" />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl uppercase text-[9px] font-black tracking-widest text-[#C5A023]">
                    فريق العمل
                  </div>
                </div>

              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}


