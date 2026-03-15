"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Download, FileText, Building2, Paintbrush, Zap, Network, Hammer, ShieldCheck,
  CheckCircle, Star, Award, TrendingUp, Users, MapPin, Calendar, Phone, Mail
} from "lucide-react"

/* ─── Data ─────────────────────────────────────────── */
const stats = [
  { value: "200+", label: "مشروع منجز", icon: Building2 },
  { value: "15+",  label: "سنة خبرة",   icon: Calendar },
  { value: "50+",  label: "مهندس متخصص", icon: Users },
  { value: "12",   label: "محافظة",       icon: MapPin },
]

const services = [
  { icon: Building2,  title: "المقاولات العمومية",          items: ["هياكل خرسانية مسلحة", "أساسات عميقة وسطحية", "أعمال حفر وتسوية", "عزل حراري ومائي"] },
  { icon: Paintbrush, title: "التشطيبات الفاخرة",           items: ["أرضيات رخام وسيراميك", "أسقف جبسية 3D", "دهانات متعددة الطبقات", "واجهات ألمنيوم وزجاج"] },
  { icon: Zap,        title: "الكهروميكانيكية (MEP)",       items: ["شبكات كهرباء القوى والضعيف", "تكييف مركزي HVAC", "شبكات صرف صحي", "إنذار وإطفاء حريق"] },
  { icon: Network,    title: "البنية التحتية والطرق",        items: ["رصف الطرق الداخلية", "شبكات الصرف السطحي", "إنارة الطرق بـ LED", "مساحات خضراء"] },
  { icon: Hammer,     title: "الترميم والتطوير",             items: ["تقييم الهياكل القائمة", "معالجة التشققات بالإيبوكسي", "تجديد الواجهات", "تحديث الأنظمة"] },
  { icon: ShieldCheck, title: "إدارة المشاريع",              items: ["تخطيط وجدولة زمنية دقيقة", "إدارة التكاليف والموازنات", "مراقبة ضبط الجودة ISO", "تقارير دورية وتسليم في الموعد"] },
]

const projects = [
  { name: "مجمع سكني — حدائق الأهرام",           type: "إنشائي + تشطيبات", year: "2025", area: "12,000 م²",   img: "/images/Zatproject (1).jpeg" },
  { name: "فيلا فاخرة — التجمع الخامس",           type: "تشطيبات فاخرة",     year: "2025", area: "850 م²",     img: "/images/Zatproject (4).jpeg" },
  { name: "مشروع بنية تحتية — 6 أكتوبر",         type: "بنية تحتية",        year: "2024", area: "45,000 م²",  img: "/images/Zatproject (6).jpeg" },
  { name: "برج سكني — المنصورة",                  type: "إنشائي",            year: "2024", area: "18,500 م²",  img: "/images/Zatproject (3).jpeg" },
  { name: "ترميم مبنى تجاري — وسط القاهرة",       type: "ترميم",             year: "2024", area: "5,200 م²",   img: "/images/Zatproject (11).jpeg" },
  { name: "مدرسة حكومية — الجيزة",               type: "إنشائي + MEP",     year: "2023", area: "8,000 م²",   img: "/images/Zatproject (13).jpeg" },
  { name: "مجمع تجاري — الإسكندرية",             type: "إنشائي + تشطيبات", year: "2023", area: "22,000 م²",  img: "/images/Zatproject (5).jpeg" },
  { name: "بنية تحتية — مدينة الشروق",            type: "بنية تحتية",        year: "2023", area: "60,000 م²",  img: "/images/Zatproject (10).jpeg" },
  { name: "فنادق سياحية — الغردقة",              type: "تشطيبات فاخرة",     year: "2022", area: "14,000 م²",  img: "/images/Zatproject (8).jpeg" },
]

const awards = [
  { title: "شهادة الجودة ISO 9001:2015",         body: "الهيئة العربية للتقييس", year: "2024" },
  { title: "أفضل مقاول سكني — جائزة البناء",     body: "اتحاد المقاولين المصري",  year: "2023" },
  { title: "شهادة السلامة المهنية OHSAS",         body: "وزارة القوى العاملة",      year: "2022" },
]

export default function AchievementsPage() {
  const [printing, setPrinting] = useState(false)

  const handlePrint = () => {
    setPrinting(true)
    setTimeout(() => { window.print(); setPrinting(false) }, 200)
  }

  return (
    <main className="min-h-screen" id="achievements-page">

      {/* ── Hero ── */}
      <section className="relative pt-36 lg:pt-52 pb-20 bg-[#001F3F] overflow-hidden no-print">
        <div className="absolute inset-0 opacity-20">
          <img src="/modern-concrete-building-architecture-construction.jpg" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-[#001F3F]/60 to-[#001F3F]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A023]/15 border border-[#C5A023]/30 text-[#C5A023] text-[10px] font-bold tracking-widest uppercase mb-5">
            <Award className="w-3 h-3" /> سابقة الأعمال
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
            إنجازاتنا <span className="text-[#C5A023]">المهنية</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            ملف أعمال شامل يعكس خبرتنا وقدراتنا الهندسية على مدى أكثر من 15 عاماً في السوق المصري.
          </p>
          <button
            onClick={handlePrint}
            disabled={printing}
            className="inline-flex items-center gap-3 bg-[#C5A023] hover:bg-[#d4ad2a] text-[#001F3F] font-black px-8 py-4 rounded-full text-sm transition-all hover:scale-105 shadow-xl"
          >
            <Download className="w-5 h-5" />
            {printing ? "جاري التحضير…" : "تحميل ملف الإنجازات PDF"}
          </button>
        </div>
      </section>

      {/* ── Print header (visible in PDF only) ── */}
      <div className="hidden print:block p-8 border-b-4 border-[#C5A023]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-[#001F3F]">ملف إنجازات ذات العماد</h1>
            <p className="text-sm text-gray-500 mt-1">للمقاولات العموميه — {new Date().getFullYear()}</p>
          </div>
          <img src="/zatlogo.png" alt="ذات العماد" className="h-16" />
        </div>
      </div>

      {/* ── Stats ── */}
      <section className="py-16 bg-[#001F3F] print:bg-white print:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#C5A023]/20 flex items-center justify-center print:border print:border-gray-200">
                  <Icon className="w-6 h-6 text-[#C5A023]" />
                </div>
                <span className="text-3xl font-black text-[#C5A023]">{value}</span>
                <span className="text-white/60 text-sm print:text-gray-500">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About company ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black text-[#001F3F] mb-5 flex items-center gap-3">
            <FileText className="w-7 h-7 text-[#C5A023]" /> نبذة عن الشركة
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>شركة ذات العماد للمقاولات العموميه تأسست منذ أكثر من خمسة عشر عاماً لتُصبح من أبرز شركات المقاولات في السوق المصري. نُقدّم خدمات متكاملة تشمل الأعمال الإنشائية والتشطيبات والكهروميكانيكية والبنية التحتية.</p>
              <p>تعمل الشركة في 12 محافظة مصرية بفريق يضم أكثر من 50 مهندساً ومئات الحرفيين المتخصصين، ونلتزم بأعلى معايير الجودة والسلامة المهنية.</p>
            </div>
            <div className="space-y-3">
              {[
                "شهادة الجودة ISO 9001:2015",
                "عضو اتحاد المقاولين المصري",
                "شهادة السلامة المهنية OHSAS 18001",
                "مسجّل في سجل المقاولين الحكومي",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-medium text-[#001F3F]">
                  <CheckCircle className="w-4 h-4 text-[#C5A023] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services offered ── */}
      <section className="py-16 bg-[#F7F8FA]">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-black text-[#001F3F] mb-8 flex items-center gap-3">
            <TrendingUp className="w-7 h-7 text-[#C5A023]" /> نطاق الخدمات
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, items }, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-[#001F3F]/6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C5A023]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#C5A023]" />
                  </div>
                  <h3 className="font-black text-[#001F3F] text-sm">{title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A023] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Previous projects ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-black text-[#001F3F] mb-8 flex items-center gap-3">
            <Building2 className="w-7 h-7 text-[#C5A023]" /> المشاريع المنجزة
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-3 text-right font-black rounded-r-xl">#</th>
                  <th className="p-3 text-right font-black">اسم المشروع</th>
                  <th className="p-3 text-right font-black">العنوان</th>
                  <th className="p-3 text-right font-black">نوع العمل</th>
                  <th className="p-3 pl-8 text-left font-black">المساحة</th>
                  <th className="p-3 pr-8 text-right font-black rounded-l-xl">السنة</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p, i) => {
                  const parts = p.name.split(" — ")
                  const main = parts[0]
                  const subtitle = parts.slice(1).join(" — ")
                  return (
                    <tr key={i} className={`border-b border-[#001F3F]/6 ${i % 2 === 0 ? "bg-white" : "bg-[#F7F8FA]"}`}>
                      <td className="p-3 font-black text-[#C5A023]">{String(i + 1).padStart(2, "0")}</td>
                      <td className="p-3 font-bold text-[#001F3F]">{main}</td>
                      <td className="p-3 text-muted-foreground">{subtitle}</td>
                      <td className="p-3 text-muted-foreground">{p.type}</td>
                      <td className="p-3 pl-8 text-left text-muted-foreground" dir="ltr">{p.area}</td>
                      <td className="p-3 pr-8 font-bold text-[#001F3F]">{p.year}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Project gallery ── */}
      <section className="py-16 bg-[#F7F8FA] no-print">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-black text-[#001F3F] mb-8">من أعمالنا</h2>
          <div className="grid grid-cols-3 gap-3">
            {projects.slice(0, 9).map((p, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden aspect-video shadow hover:shadow-xl transition-all">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Awards ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black text-[#001F3F] mb-8 flex items-center gap-3">
            <Star className="w-7 h-7 text-[#C5A023]" /> الشهادات والجوائز
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {awards.map((a, i) => (
              <div key={i} className="bg-[#F7F8FA] border border-[#C5A023]/20 rounded-2xl p-5">
                <Award className="w-8 h-8 text-[#C5A023] mb-3" />
                <h3 className="font-black text-[#001F3F] text-sm mb-1">{a.title}</h3>
                <p className="text-xs text-muted-foreground">{a.body}</p>
                <p className="text-xs font-bold text-[#C5A023] mt-2">{a.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact (PDF footer) ── */}
      <section className="py-16 bg-[#001F3F] print:bg-[#001F3F]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black text-white mb-8 text-center">بيانات التواصل</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6 text-[#C5A023]" />
              <span className="text-white font-bold" dir="ltr">+20 10 23610692</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-6 h-6 text-[#C5A023]" />
              <span className="text-white font-bold">info@zatelamad.com</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6 text-[#C5A023]" />
              <span className="text-white/80 text-sm">البوابة الأولى، عمارة 123ز، حدائق الأهرام، الجيزة</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA (no-print) ── */}
      <section className="py-16 bg-[#F7F8FA] no-print">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-[#001F3F] mb-4">جاهز لمناقشة مشروعك؟</h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">فريقنا الهندسي يرد خلال 48 ساعة بعرض سعر مفصّل.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={handlePrint} className="inline-flex items-center gap-2 bg-[#001F3F] hover:bg-[#C5A023] text-white font-black px-6 py-3 rounded-full text-sm transition-all hover:scale-105">
              <Download className="w-4 h-4" /> تحميل PDF
            </button>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#C5A023] hover:bg-[#d4ad2a] text-[#001F3F] font-black px-6 py-3 rounded-full text-sm transition-all hover:scale-105">
              تواصل معنا الآن
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
