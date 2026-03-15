import { CheckCircle2 } from "lucide-react"

export function About() {
  return (
    <section className="pt-24 md:pt-32 pb-10 md:pb-14 bg-white dark:bg-zinc-950 overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-zinc-900 aspect-4/5 lg:aspect-square">
                <img 
                  src="/modern-concrete-building-architecture-construction.jpg" 
                  alt="Zat Al Emad Construction" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#C5A023]/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#001F3F]/10 rounded-full blur-3xl -z-10 animate-pulse delay-700" />
            
            <div className="absolute -bottom-8 right-8 bg-[#001F3F] text-white p-8 rounded-3xl shadow-2xl z-20 hidden md:block">
              <div className="text-4xl font-black text-[#C5A023] mb-1">100%</div>
              <div className="text-xs font-bold tracking-widest uppercase opacity-70">إلتزام بالجودة</div>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#001F3F]/5 border border-[#001F3F]/10 text-[#001F3F] text-xs font-bold tracking-wider uppercase">
                عن ذات العماد
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#001F3F] dark:text-white leading-tight">
                شركة ذات <span className="text-[#C5A023]">العماد</span> للمقاولات العموميه
              </h2>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                نحن في ذات العماد للمقاولات العموميه، نؤمن بأن الهندسة هي فن تطويع الإمكانيات لخلق واقع أفضل. منذ انطلاق مسيرتنا المهنية في السوق المصري، التزمنا برؤية مؤسسية واضحة تهدف إلى <span className="text-[#001F3F] dark:text-white font-bold">تطوير المشهد الإنشائي عبر دمج الدقة التنفيذية مع المعايير الهندسية العالمية.</span>
              </p>
              <p>
                تتفرد منظومة العمل لدينا بالاعتماد على كوادر فنية وإدارية تمتلك خبرات ميدانية واسعة في تنفيذ المشروعات السكنية والتجارية والقومية، مما يضمن لعملائنا مستوى من الموثوقية يتجاوز التوقعات التقليدية في قطاع التشييد.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {[
                "تنفيذ المشروعات القومية الكبرى",
                "إشراف هندسي على أعلى مستوى",
                "التزام صارم بالجداول الزمنية",
                "استخدام أحدث تقنيات البناء",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C5A023]/10 flex items-center justify-center text-[#C5A023]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-[#001F3F] dark:text-white text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 flex items-center gap-8">
               <div className="text-center">
                 <div className="text-4xl font-black text-[#001F3F] dark:text-white">+10</div>
                 <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">سنوات خبيرة</div>
               </div>
               <div className="w-px h-12 bg-zinc-200 dark:bg-zinc-800" />
               <div className="text-center">
                 <div className="text-4xl font-black text-[#001F3F] dark:text-white">+50</div>
                 <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">مشروع ناجح</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

