import Link from "next/link"
import ServiceHeroTools from "@/components/service-hero-tools"
import { ArrowRight, Wrench, HardHat, Paintbrush, Layers, ShieldCheck, CheckCircle, Search, ClipboardList, Zap, Home } from "lucide-react"
import { GalleryGrid } from "@/components/gallery-grid"


export const metadata = {
  title: "الترميم والتطوير | ذات العماد للمقاولات العامة",
  description: "خدمات الترميم والتطوير الشامل للمنشآت القائمة — إعادة الحياة لكل مبنى بأيدي متخصصة",
}

const stats = [
  { value: "80+",  label: "مشروع ترميم منجز" },
  { value: "30",   label: "سنة أقدم مبنى رمّمناه" },
  { value: "100%", label: "نسبة رضا العملاء" },
  { value: "6",    label: "محافظات نعمل بها" },
]

const features = [
  {
    icon: Search,
    title: "تقييم المنشآت القائمة",
    desc: "كشف شامل وتقرير فني مفصّل يُحدد نقاط الضعف الإنشائية والتشطيبية في المبنى قبل وضع الخطة.",
  },
  {
    icon: HardHat,
    title: "ترميم الهياكل الخرسانية",
    desc: "معالجة تشققات الخرسانة والصدأ في الحديد وتقوية الأعمدة والكمرات المتدهورة بحقن الإيبوكسي والكربون فايبر.",
  },
  {
    icon: Paintbrush,
    title: "تجديد التشطيبات الداخلية",
    desc: "استبدال الأرضيات والأسقف المعلقة والدهانات بأحدث الخامات مع الحفاظ على الطابع المعماري الأصلي.",
  },
  {
    icon: Home,
    title: "تطوير الواجهات الخارجية",
    desc: "ترميم وتجديد الواجهات باستخدام مواد عازلة عالية الجودة وإضاءة معمارية تُعيد للمبنى رونقه.",
  },
  {
    icon: Zap,
    title: "تحديث الأنظمة الميكانيكية والكهربائية",
    desc: "استبدال الشبكات القديمة بأنظمة حديثة موفّرة للطاقة وفق أحدث المعايير والكودات المعمول بها.",
  },
  {
    icon: Layers,
    title: "رفع كفاءة الطاقة والعزل",
    desc: "تطبيق منظومة عزل حراري ومائي محدّثة تُقلل استهلاك الطاقة وتحمي المبنى من التدهور المستقبلي.",
  },
]

const steps = [
  {
    n: "01",
    title: "الكشف والتقييم الشامل",
    desc: "نُجري فحصاً هندسياً دقيقاً للمنشأة بالكامل — هيكل، تشطيبات، شبكات — ونُعدّ تقريراً فنياً مفصّلاً مع الصور والتوصيات.",
  },
  {
    n: "02",
    title: "وضع خطة الترميم",
    desc: "بناءً على تقرير الكشف، نُعدّ مخططاً تنفيذياً يُحدد الأولويات والتسلسل الزمني والميزانية التقديرية للمشروع.",
  },
  {
    n: "03",
    title: "التدخل الدقيق والترميم",
    desc: "تنفيذ أعمال الترميم بأيدي متخصصة مع الحرص على تقليل الإزعاج للمقيمين في المبنى إلى أدنى مستوى ممكن.",
  },
  {
    n: "04",
    title: "الفحص النهائي والتسليم",
    desc: "جولة تفصيلية مع العميل تشمل كل نقطة في المبنى، مع تسليم تقرير ختامي وشهادة ضمان على الأعمال المنفذة.",
  },
]

const reasons = [
  "فريق متخصص في الترميم يفهم خصوصية المباني القائمة",
  "تقنيات حديثة لمعالجة الهياكل الخرسانية دون هدم",
  "الحفاظ على الطابع المعماري الأصلي للمبنى",
  "تقليل الإزعاج للسكان أثناء التنفيذ إلى أدنى مستوى",
  "ضمان على كافة أعمال الترميم لمدة سنتين",
  "تقارير فنية موثقة قبل وأثناء وبعد التنفيذ",
]

export default function RenovationServicePage() {
  return (
    <main className="min-h-screen">

      {/* ── 1. Hero ── */}
      <section className="relative pt-36 lg:pt-52 pb-24 bg-[#001F3F] overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src="/residential-towers-under-construction.jpg" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-[#001F3F]/40 via-[#001F3F]/60 to-[#001F3F]" />
        <ServiceHeroTools />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#C5A023]/15 border border-[#C5A023]/30 text-[#C5A023] text-[10px] font-bold tracking-widest uppercase mb-5">
            إعادة الحياة للمنشآت
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            الترميم <span className="text-[#C5A023]">والتطوير</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            نُعيد الحياة للمنشآت القديمة ونُطوّر المباني القائمة بتقنيات ترميم حديثة تحافظ على القيمة وتُضاعف العمر الافتراضي.
          </p>
        </div>
      </section>

      {/* ── 2. Intro split ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
            <div>
              <span className="inline-block text-[10px] font-black tracking-[0.3em] uppercase text-[#C5A023] mb-4">لماذا الترميم؟</span>
              <h2 className="text-2xl md:text-3xl font-black text-[#001F3F] mb-5 leading-snug">
                كل مبنى يستحق <span className="text-[#C5A023]">فرصة ثانية</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                الترميم الاحترافي ليس مجرد إصلاح للعيوب، بل هو استثمار في مستقبل المنشأة. نتعامل مع كل
                مبنى كحالة فريدة تستوجب تشخيصاً دقيقاً وخطة مخصصة تراعي طبيعة المواد الأصلية وعمر المنشأة.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                نُطبّق أحدث تقنيات الترميم العالمية، من حقن الإيبوكسي لمعالجة التشققات إلى تطبيق الكربون
                فايبر لتعزيز الأعضاء الإنشائية — بأيدي متخصصين معتمدين.
              </p>
              <ul className="space-y-2">
                {["ترميم أكثر من 80 منشأة سكنية وتجارية", "أقدم مبنى رمّمناه يتجاوز 30 عاماً", "صفر شكاوى في مشاريع التسليم"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-[#001F3F]">
                    <CheckCircle className="w-4 h-4 text-[#C5A023] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px]">
              <img src="/large-scale-social-housing-development.jpg" alt="الترميم والتطوير" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-[#001F3F]/50 to-transparent" />
              <div className="absolute bottom-5 left-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3">
                <p className="text-[#C5A023] text-xs font-bold">مشروع ترميم منجز</p>
                <p className="text-white text-sm font-black">مجمع سكني، الجيزة</p>
              </div>
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A023]/10 border border-[#C5A023]/20 text-[#C5A023] text-xs font-bold tracking-widest uppercase mb-4">
              نطاق الخدمة
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#001F3F]">
              ما يشمله <span className="text-[#C5A023]">برنامج الترميم</span>
            </h2>
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[480px]">
              <img src="/modern-construction-site-building-concrete-structu.jpg" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-[#001F3F]/70 to-transparent" />
              <div className="absolute bottom-6 right-6 left-6">
                <p className="text-[#C5A023] text-xs font-bold mb-1">منهجية الترميم</p>
                <p className="text-white text-lg font-black leading-snug">4 مراحل منظمة من الكشف حتى التسليم</p>
              </div>
            </div>
            <div>
              <span className="inline-block text-[10px] font-black tracking-[0.3em] uppercase text-[#C5A023] mb-4">كيف نعمل</span>
              <h2 className="text-2xl md:text-3xl font-black text-[#001F3F] mb-8 leading-snug">
                منهجية ترميم <span className="text-[#C5A023]">علمية ومُثبتة</span>
              </h2>
              <div className="space-y-6">
                {steps.map(({ n, title, desc }) => (
                  <div key={n} className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#001F3F] text-[#C5A023] font-black text-sm flex items-center justify-center shrink-0">
                      {n}
                    </div>
                    <div>
                      <h3 className="font-black text-[#001F3F] mb-1">{title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Gallery ── */}
      <GalleryGrid 
        title='من <span className="text-[#C5A023]">مشاريع الترميم</span>'
        subtitle="لقطات من مواقع ترميم منجزة بأيدي فريقنا"
        images={[
          "/images/Zatproject (4).jpeg",
          "/images/Zatproject (6).jpeg",
          "/images/Zatproject (8).jpeg",
          "/images/Zatproject (10).jpeg",
          "/images/Zatproject (12).jpeg",
          "/images/Zatproject (14).jpeg",
          "/images/Zatproject (16).jpeg",
        ]}
      />

      {/* ── 7. Why Us ── */}
      <section className="py-20 bg-[#001F3F]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
            <div>
              <span className="inline-block text-[10px] font-black tracking-[0.3em] uppercase text-[#C5A023] mb-4">الفارق معنا</span>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-8 leading-snug">
                لماذا تثق بنا <span className="text-[#C5A023]">في ترميم منشأتك؟</span>
              </h2>
              <ul className="space-y-4">
                {reasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/75">
                    <ShieldCheck className="w-5 h-5 text-[#C5A023] shrink-0 mt-0.5" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[420px] shadow-2xl">
              <img src="/apartment-complex-construction-site.jpg" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-[#001F3F]/60 to-transparent" />
              <div className="absolute top-4 right-4 h-1 w-16 bg-[#C5A023] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. CTA ── */}
      <section className="py-16 bg-[#C5A023]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-black text-[#001F3F] mb-3">هل تحتاج ترميم منشأتك؟</h3>
          <p className="text-[#001F3F]/70 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            ابدأ بجولة كشف مجانية — سيتواصل معك مهندسنا خلال 24 ساعة لتحديد موعد الكشف.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#001F3F] hover:bg-[#001F3F]/80 text-white font-bold px-8 py-3 rounded-full text-sm transition-all hover:scale-105">
            احجز كشفاً مجانياً
          </Link>
        </div>
      </section>

    </main>
  )
}
