import Link from "next/link"
import ServiceHeroTools from "@/components/service-hero-tools"
import { ArrowRight, Paintbrush, Layers, Sparkles, Home, ShieldCheck, CheckCircle, Star, Grid3x3 } from "lucide-react"
import { GalleryGrid } from "@/components/gallery-grid"


export const metadata = {
  title: "أعمال التشطيبات الفاخرة | ذات العماد",
  description: "تشطيبات داخلية وخارجية فاخرة تجمع بين الجمالية والوظيفية بأحدث الخامات",
}

const stats = [
  { value: "150+", label: "وحدة سكنية مشطّبة" },
  { value: "20+",  label: "خامة مستوردة" },
  { value: "10+",  label: "سنة تخصص" },
  { value: "100%", label: "نسبة رضا العملاء" },
]

const features = [
  { icon: Layers,    title: "أرضيات الرخام والسيراميك",      desc: "توريد وتركيب أجود أصناف الرخام والجرانيت والبورسلان بقياسات دقيقة وتشطيب احترافي لامع." },
  { icon: Grid3x3,   title: "أسقف جبسية بورد ثلاثية الأبعاد", desc: "تصميم وتنفيذ أسقف معلقة بأشكال هندسية معاصرة مع إضاءات مخفية وتكميلية متكاملة." },
  { icon: Paintbrush,title: "الدهانات والتأثيرات الديكورية",  desc: "دهانات داخلية وخارجية بخامات عالية الجودة مع تأثيرات مالتي لايير وديكور جدراني 3D." },
  { icon: Home,      title: "الواجهات الخارجية الفاخرة",      desc: "تنفيذ واجهات الألمنيوم والزجاج المزدوج والكلادينج الحجري بتصاميم معمارية معاصرة." },
  { icon: Sparkles,  title: "المطابخ والحمامات",               desc: "تشطيب كامل للمطابخ والحمامات مع تركيب الأدوات الصحية وخامات ذات مستوى عالمي." },
  { icon: Star,      title: "الأعمال المعدنية الديكورية",      desc: "درابزين ونوافذ ومداخل معدنية بتصاميم خاصة تمنح المشروع طابعاً فريداً ومميزاً." },
]

const steps = [
  { n: "01", title: "التصميم الداخلي وتحديد الخامات", desc: "جلسة تصميم تفصيلية لاختيار ألوان الدهانات ونوع الأرضيات وتصميم الأسقف مع رؤية ثلاثية الأبعاد." },
  { n: "02", title: "التوريد والتحضير",               desc: "توريد جميع خامات التشطيب وفحصها قبل التركيب، مع تجهيز السطوح والتسوية الأولية." },
  { n: "03", title: "التنفيذ التسلسلي",               desc: "البدء بالأسقف ثم الجدران ثم الأرضيات مع حماية كل مرحلة لحين الانتهاء من التالية." },
  { n: "04", title: "الفحص والتسليم",                 desc: "جولة تفصيلية مع العميل لمراجعة كل عنصر وإصلاح أي ملاحظة قبل التسليم النهائي." },
]

const reasons = [
  "فريق متخصص في التشطيبات الفاخرة منذ أكثر من 10 سنوات",
  "خامات محلية ومستوردة من أفضل المصانع العالمية",
  "تصاميم داخلية مُعدّة بواسطة مهندسي ديكور معتمدين",
  "دقة في القياسات وصفر أخطاء في التركيب",
  "ضمان على جميع أعمال التشطيب لمدة سنة كاملة",
  "معدات حديثة للقص والتشكيل بدقة ميليمترية",
]

export default function FinishingServicePage() {
  return (
    <main className="min-h-screen">

      {/* ── 1. Hero ── */}
      <section className="relative pt-36 lg:pt-52 pb-24 bg-[#001F3F] overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src="/apartment-complex-construction-site.jpg" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-[#001F3F]/40 via-[#001F3F]/60 to-[#001F3F]" />
        <ServiceHeroTools />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#C5A023]/15 border border-[#C5A023]/30 text-[#C5A023] text-[10px] font-bold tracking-widest uppercase mb-5">
            التشطيبات الفاخرة
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            أعمال <span className="text-[#C5A023]">التشطيبات</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            نُحوّل الهيكل الإنشائي إلى مساحة معيشية راقية جامعين بين الجمال والوظيفية باستخدام أرقى الخامات وأحدث التقنيات.
          </p>
        </div>
      </section>

      {/* ── 2. Intro split ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px] order-last lg:order-first">
              <img src="/images/Zatproject (8).jpeg" alt="تشطيبات" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-[#001F3F]/50 to-transparent" />
              <div className="absolute bottom-5 left-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3">
                <p className="text-[#C5A023] text-xs font-bold">تشطيب داخلي فاخر</p>
                <p className="text-white text-sm font-black">وحدة سكنية، القاهرة الجديدة</p>
              </div>
            </div>
            <div>
              <span className="inline-block text-[10px] font-black tracking-[0.3em] uppercase text-[#C5A023] mb-4">نبذة عن الخدمة</span>
              <h2 className="text-2xl md:text-3xl font-black text-[#001F3F] mb-5 leading-snug">
                كل تفصيلة <span className="text-[#C5A023]">تعكس مستوى</span> صاحبها
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                نؤمن بأن التشطيبات ليست مجرد طبقة نهائية، بل هي الهوية البصرية للمشروع. نُقدّم تشطيبات
                داخلية وخارجية تجمع بين الجماليات العالمية والوظيفية العملية بأحدث الخامات.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                فريقنا من الحرفيين والمهندسين المعتمدين يُنفّذ كل مرحلة بدقة بالغة، بدءاً من أعمال الجبس
                وحتى الدهانات النهائية والتشطيبات الخارجية.
              </p>
              <ul className="space-y-2">
                {["تشطيب أكثر من 150 وحدة سكنية وتجارية", "خامات مستوردة من أفضل المصانع العالمية", "ضمان سنة على جميع أعمال التشطيب"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-[#001F3F]">
                    <CheckCircle className="w-4 h-4 text-[#C5A023] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Stats bar ── */}
      <section className="py-12 bg-[#001F3F]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map(({ value, label }, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-3xl md:text-4xl font-black text-[#C5A023]">{value}</span>
                <span className="text-white/60 text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Features ── */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A023]/10 border border-[#C5A023]/20 text-[#C5A023] text-xs font-bold tracking-widest uppercase mb-4">نطاق الخدمة</span>
            <h2 className="text-2xl md:text-3xl font-black text-[#001F3F]">ما يشمله <span className="text-[#C5A023]">نطاق التشطيبات</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="group bg-white rounded-2xl p-6 border border-[#001F3F]/6 hover:border-[#C5A023]/40 hover:shadow-lg hover:-translate-y-1 transition-all relative overflow-hidden">
                <span className="absolute top-3 left-4 text-6xl font-black text-[#001F3F]/4 select-none leading-none">{String(i + 1).padStart(2, "0")}</span>
                <div className="w-11 h-11 rounded-xl bg-[#C5A023]/10 flex items-center justify-center mb-4 group-hover:bg-[#C5A023]/20 transition-colors relative z-10">
                  <Icon className="w-5 h-5 text-[#C5A023]" />
                </div>
                <h3 className="font-black text-[#001F3F] mb-2 relative z-10">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed relative z-10">{desc}</p>
                <span className="absolute bottom-0 right-6 h-[3px] w-0 bg-[#C5A023] rounded-t-full group-hover:w-12 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Process ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
            <div>
              <span className="inline-block text-[10px] font-black tracking-[0.3em] uppercase text-[#C5A023] mb-4">كيف نعمل</span>
              <h2 className="text-2xl md:text-3xl font-black text-[#001F3F] mb-8 leading-snug">منهجية تشطيب <span className="text-[#C5A023]">دقيقة ومُتقنة</span></h2>
              <div className="space-y-6">
                {steps.map(({ n, title, desc }) => (
                  <div key={n} className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#001F3F] text-[#C5A023] font-black text-sm flex items-center justify-center shrink-0">{n}</div>
                    <div>
                      <h3 className="font-black text-[#001F3F] mb-1">{title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[480px]">
              <img src="/residential-towers-under-construction.jpg" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-[#001F3F]/70 to-transparent" />
              <div className="absolute bottom-6 right-6 left-6">
                <p className="text-[#C5A023] text-xs font-bold mb-1">منهجيتنا في التشطيب</p>
                <p className="text-white text-lg font-black leading-snug">من الاختيار حتى التسليم بدقة كاملة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Gallery ── */}
      <GalleryGrid 
        title='من <span className="text-[#C5A023]">أعمال التشطيبات</span>'
        subtitle="لقطات من مشاريع تشطيب منجزة بأيدي فريقنا"
        images={[
          "/images/Zatproject (2).jpeg",
          "/images/Zatproject (4).jpeg",
          "/images/Zatproject (6).jpeg",
          "/images/Zatproject (8).jpeg",
          "/images/Zatproject (10).jpeg",
          "/images/Zatproject (12).jpeg",
          "/images/Zatproject (14).jpeg",
        ]}
      />

      {/* ── 7. Why Us ── */}
      <section className="py-20 bg-[#001F3F]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden h-[420px] shadow-2xl order-last lg:order-first">
              <img src="/modern-construction-site-building-concrete-structu.jpg" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-[#001F3F]/60 to-transparent" />
              <div className="absolute top-4 right-4 h-1 w-16 bg-[#C5A023] rounded-full" />
            </div>
            <div>
              <span className="inline-block text-[10px] font-black tracking-[0.3em] uppercase text-[#C5A023] mb-4">الفارق معنا</span>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-8 leading-snug">لماذا تختار <span className="text-[#C5A023]">ذات العماد</span> لتشطيب مشروعك؟</h2>
              <ul className="space-y-4">
                {reasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/75">
                    <ShieldCheck className="w-5 h-5 text-[#C5A023] shrink-0 mt-0.5" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. CTA ── */}
      <section className="py-16 bg-[#C5A023]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-black text-[#001F3F] mb-3">هل تريد تشطيب مشروعك بأعلى مستوى؟</h3>
          <p className="text-[#001F3F]/70 mb-8 max-w-md mx-auto text-sm leading-relaxed">تواصل معنا اليوم لمناقشة تفاصيل مشروعك والحصول على عرض أسعار مُفصّل.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#001F3F] hover:bg-[#001F3F]/80 text-white font-bold px-8 py-3 rounded-full text-sm transition-all hover:scale-105">
            احجز استشارتك المجانية
          </Link>
        </div>
      </section>

    </main>
  )
}