import Link from "next/link"
import ServiceHeroTools from "@/components/service-hero-tools"
import { ArrowRight, Zap, Wind, Droplets, Bell, ShieldCheck, CheckCircle, Cpu, Radio, Wifi } from "lucide-react"
import { GalleryGrid } from "@/components/gallery-grid"


export const metadata = {
  title: "الأعمال الكهروميكانيكية | ذات العماد",
  description: "تنفيذ كامل منظومة الكهرباء والتكييف والصرف الصحي بأيدي متخصصين معتمدين",
}

const stats = [
  { value: "100+", label: "مشروع MEP منجز" },
  { value: "30+",  label: "متخصص معتمد" },
  { value: "99%",  label: "كفاءة التشغيل" },
  { value: "IEC",  label: "معايير دولية" },
]

const features = [
  { icon: Zap,      title: "شبكات الكهرباء والإنارة",         desc: "تمديد شبكات توزيع الكهرباء وتركيب اللوحات والإنارة الداخلية والخارجية بتقنيات LED موفرة للطاقة." },
  { icon: Wind,     title: "أنظمة التكييف والتهوية HVAC",       desc: "تصميم وتنفيذ أنظمة التكييف المركزي والتهوية بكفاءة طاقوية عالية ودرجات حرارة مثالية طوال العام." },
  { icon: Droplets, title: "شبكات الصرف الصحي والمياه",    desc: "تمديد شبكات مياه الشرب والصرف الصحي بمواسير عالية الجودة مع ضمان عدم تسرب منذ اليوم الأول." },
  { icon: Bell,     title: "أنظمة الإنذار والإطفاء",         desc: "تركيب شبكات رش الحريق وأجهزة الإنذار المبكر وفق معايير الدفاع المدني NFPA والكود المصري." },
  { icon: Cpu,      title: "أنظمة الأمن والمراقبة",            desc: "كاميرات مراقبة CCTV وأنظمة التحكم في الدخول والنظم الذكية لإدارة المبنى بكفاءة." },
  { icon: Wifi,     title: "شبكات البيانات والاتصالات",      desc: "بنية تحتية رقمية شاملة — شبكة الإنترنت والهاتف ونظام الصوت وتكوين شبكات اللترك والاتصال الموحد." },
]

const steps = [
  { n: "01", title: "التصميم التقني والتوثيق", desc: "إعداد مخططات Shop Drawings مفصلة لكل نظام وتنسيقها مع مخططات الهيكل الإنشائي في مرحلة مبكرة." },
  { n: "02", title: "التوريد والفحص",            desc: "اختيار موردين معتمدين وفحص كل معدة قبل التركيب لضمان مطابقتها للمواصفات." },
  { n: "03", title: "تنفيذ التمديدات",            desc: "تمديد الشبكات بالتسلسل الصحيح بالتنسيق مع أعمال البناء وأعمال التشطيب دون تعارض." },
  { n: "04", title: "الاختبار والتشغيل التجريبي", desc: "اختبار شامل لجميع الأنظمة، ومعايرة ضغط المياه، وتسليم تقرير التشغيل ودليل الصيانة." },
]

const reasons = [
  "مهندسون معتمدون في الكهرباء والميكانيكا بخبرة تتجاوز 10 سنوات",
  "تطبيق معايير IEC وNFPA والكود المصري بدقة",
  "تنسيق كامل مع فريق الإنشاء لتفادي أي تعارض",
  "تقارير اختبار موثقة لكل شبكة قبل التسليم",
  "ضمان سنتين على جميع الأنظمة المنفذة",
  "فريق صيانة جاهز لتقديم الدعم بعد التسليم",
]

export default function MepServicePage() {
  return (
    <main className="min-h-screen">

      {/* ── 1. Hero ── */}
      <section className="relative pt-36 lg:pt-52 pb-24 bg-[#001F3F] overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src="/modern-residential-apartment-building-construction.jpg" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-[#001F3F]/40 via-[#001F3F]/60 to-[#001F3F]" />

          <ServiceHeroTools />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#C5A023]/15 border border-[#C5A023]/30 text-[#C5A023] text-[10px] font-bold tracking-widest uppercase mb-5">
            الكهروميكانيكية MEP
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            الأعمال <span className="text-[#C5A023]">الكهروميكانيكية</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            نُنفّذ كامل منظومة الكهرباء والتكييف والصرف الصحي بأيدي متخصصين معتمدين، لضمان سلامة التشغيل وكفاءة استهلاك الطاقة.
          </p>
        </div>
      </section>

      {/* ── 2. Intro split ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
            <div>
              <span className="inline-block text-[10px] font-black tracking-[0.3em] uppercase text-[#C5A023] mb-4">لماذا MEP مهمة</span>
              <h2 className="text-2xl md:text-3xl font-black text-[#001F3F] mb-5 leading-snug">
                الأنظمة التقنية <span className="text-[#C5A023]">شريان كل مبنى،</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                لا تكتمل أي منشأة دون منظومة تقنية متكاملة. نخطّط ونُنفّذ أنظمة الكهرباء
                والتكييف والمياه والإطفاء بتنسيق كامل مع الهيكل الإنشائي منذ اليوم الأول.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                فريقنا من المهندسين المعتمدين يتابع كل مرحلة بدقة واحترافية عالية لضمان
                أداء مثالي وسلامة تشغيل طويلة الأمد.
              </p>
              <ul className="space-y-2">
                {["تنفيذ أكثر من 100 مشروع MEP بنجاح", "تطبيق معايير IEC/NFPA الدولية", "ضمان سنتين على جميع الأنظمة"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-[#001F3F]">
                    <CheckCircle className="w-4 h-4 text-[#C5A023] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px]">
              <img src="/images/Zatproject (9).jpeg" alt="كهروميكانيكي" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-[#001F3F]/50 to-transparent" />
              <div className="absolute bottom-5 left-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3">
                <p className="text-[#C5A023] text-xs font-bold">شبكة كهربائية منجزة</p>
                <p className="text-white text-sm font-black">مجمع تجاري، القاهرة</p>
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A023]/10 border border-[#C5A023]/20 text-[#C5A023] text-xs font-bold tracking-widest uppercase mb-4">نطاق الخدمة</span>
            <h2 className="text-2xl md:text-3xl font-black text-[#001F3F]">ما يشمله <span className="text-[#C5A023]">نطاق MEP</span></h2>
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
              <img src="/educational-building-school-construction.jpg" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-[#001F3F]/70 to-transparent" />
              <div className="absolute bottom-6 right-6 left-6">
                <p className="text-[#C5A023] text-xs font-bold mb-1">منهجيتنا</p>
                <p className="text-white text-lg font-black leading-snug">من التصميم حتى التشغيل بدقة كاملة</p>
              </div>
            </div>
            <div>
              <span className="inline-block text-[10px] font-black tracking-[0.3em] uppercase text-[#C5A023] mb-4">كيف نعمل</span>
              <h2 className="text-2xl md:text-3xl font-black text-[#001F3F] mb-8 leading-snug">منهجية تقنية <span className="text-[#C5A023]">دقيقة ومُتكاملة</span></h2>
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
          </div>
        </div>
      </section>

      {/* ── 6. Gallery ── */}
      <GalleryGrid 
        title='من <span className="text-[#C5A023]">مشاريع الكهروميكانيكي</span>'
        subtitle="لقطات من مواقع مشاريعنا"
        images={[
          "/images/Zatproject (9).jpeg",
          "/images/Zatproject (11).jpeg",
          "/images/Zatproject (13).jpeg",
          "/images/Zatproject (15).jpeg",
          "/images/Zatproject (1).jpeg",
          "/images/Zatproject (3).jpeg",
          "/images/Zatproject (5).jpeg",
        ]}
      />

      {/* ── 7. Why Us ── */}
      <section className="py-20 bg-[#001F3F]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
            <div>
              <span className="inline-block text-[10px] font-black tracking-[0.3em] uppercase text-[#C5A023] mb-4">الفارق معنا</span>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-8 leading-snug">لماذا تختار <span className="text-[#C5A023]">ذات العماد</span> لأنظمة MEP مشروعك؟</h2>
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
              <img src="/modern-residential-apartment-building-construction.jpg" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-[#001F3F]/60 to-transparent" />
              <div className="absolute top-4 right-4 h-1 w-16 bg-[#C5A023] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. CTA ── */}
      <section className="py-16 bg-[#C5A023]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-black text-[#001F3F] mb-3">هل تحتاج أنظمة MEP لمشروعك؟</h3>
          <p className="text-[#001F3F]/70 mb-8 max-w-md mx-auto text-sm leading-relaxed">تواصل معنا للحصول على عرض أسعار مفصّل وجلسة تصميم تقني مجانية.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#001F3F] hover:bg-[#001F3F]/80 text-white font-bold px-8 py-3 rounded-full text-sm transition-all hover:scale-105">
            احجز استشارتك المجانية
          </Link>
        </div>
      </section>

    </main>
  )
}