import { Building2, Paintbrush, ShieldCheck, Zap, Network, Hammer, ArrowLeft } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "01",
    title: "المقاولات العمومية",
    subtitle: "هندسة وبناء متكامل",
    icon: Building2,
    href: "/services/construction",
    image: "/modern-construction-site-building-concrete-structu.jpg",
    desc: "نتولى تنفيذ كافة أعمال المقاولات العمومية، من الهياكل الخرسانية والمعدنية حتي التشطيبات النهائية، تحت إشراف نخبة من المهندسين الاستشاريين.",
    items: [
      "أعمال الحفر والإحلال وتجهيز الموقع",
      "الهياكل الخرسانية المسلحة والأساسات العميقة",
      "أعمال المباني والبلوك والعزل الحراري والمائي",
      "الشبكات والمرافق والبنية التحتية الداخلية",
    ],
  },
  {
    id: "02",
    title: "أعمال التشطيبات الفاخرة",
    subtitle: "لمسات نهائية بمستوى عالمي",
    icon: Paintbrush,
    href: "/services/finishing",
    image: "/apartment-complex-construction-site.jpg",
    desc: "نُحوّل الهيكل الإنشائي إلى مساحة معيشية راقية تجمع بين الجماليات والوظيفية، مستخدمين أحدث الخامات والتقنيات.",
    items: [
      "أرضيات السيراميك والرخام والجرانيت الطبيعي",
      "أسقف جبسية معلقة وتشطيبات 3D",
      "دهانات داخلية وخارجية بخامات عالية الجودة",
      "واجهات خارجية من الألوميتال والزجاج المزدوج",
    ],
  },
  {
    id: "03",
    title: "الأعمال الكهروميكانيكية",
    subtitle: "أنظمة تقنية متكاملة",
    icon: Zap,
    href: "/services/mep",
    image: "/modern-residential-apartment-building-construction.jpg",
    desc: "نُنفّذ كامل المنظومة الكهربية والميكانيكية بأيدي متخصصين معتمدين، لضمان سلامة التشغيل وكفاءة استهلاك الطاقة.",
    items: [
      "شبكات الكهرباء القوى والضعيف",
      "أنظمة التكييف والتهوية المركزية (HVAC)",
      "شبكات الصرف الصحي ومياه الشرب",
      "أنظمة الإنذار والإطفاء عن الحريق",
    ],
  },
  {
    id: "04",
    title: "البنية التحتية والطرق",
    subtitle: "مشاريع المجمعات والمناطق",
    icon: Network,
    href: "/services/infrastructure",
    image: "/social-housing-project-residential-buildings.jpg",
    desc: "نُنفّذ مشروعات البنية التحتية بمحاور كاملة تشمل الطرق وشبكات المرافق والفراغات العامة لتهيئة بيئة متكاملة وصالحة للسكن.",
    items: [
      "رصف الطرق الداخلية والخارجية",
      "شبكات الصرف السطحي ومجاري الأمطار",
      "إنارة الطرق والميادين العامة",
      "أعمال التشجير والمساحات الخضراء",
    ],
  },
  {
    id: "05",
    title: "الترميم والتطوير",
    subtitle: "إحياء المباني ورفع كفاءتها",
    icon: Hammer,
    href: "/services/renovation",
    image: "/residential-towers-under-construction.jpg",
    desc: "نقوم بترميم المباني القائمة وتحديثها إنشائيًا ومعماريًا وكهروميكانيكيًا لرفع الأمان وتحسين الأداء وإطالة العمر التشغيلي.",
    items: [
      "تقييم شامل للحالة الإنشائية والمعمارية",
      "معالجة الشروخ والتدعيم وإعادة التأهيل",
      "تطوير الواجهات والفراغات الداخلية",
      "تحديث الأنظمة الكهربائية والميكانيكية",
    ],
  },
]

export function Services() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F8FA]" id="services">
      <div className="container mx-auto px-4">

        {/* headline */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A023]/10 border border-[#C5A023]/20 text-[#C5A023] text-xs font-bold tracking-widest uppercase mb-4">
            نطاق أعمالنا
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#001F3F]">
            حلول <span className="text-[#C5A023]">هندسية</span> متكاملة
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            نُقدّم باقة شاملة من خدمات التشييد والبناء تُغطي كافة مراحل المشروع،
            من أولى جلسات التخطيط حتى لحظة تسليم المفتاح.
          </p>
        </div>

        {/* services rows */}
        <div className="flex flex-col gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const isEven = index % 2 === 1
            return (
              <div
                key={service.id}
                className="group grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
              >
                {/* ── Content column ── */}
                <div
                  className={`relative flex flex-col justify-center p-8 md:p-12 bg-[#001F3F] ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* watermark number */}
                  <span className="absolute bottom-4 left-6 text-[8rem] font-black leading-none select-none pointer-events-none text-white/4">
                    {service.id}
                  </span>

                  {/* badge */}
                  <span className="inline-flex items-center gap-2 self-start mb-5 px-3 py-1 rounded-full bg-[#C5A023]/15 border border-[#C5A023]/30 text-[#C5A023] text-[10px] font-bold tracking-widest uppercase">
                    {service.subtitle}
                  </span>

                  {/* icon + title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#C5A023]/20 transition-colors">
                      <service.icon className="w-6 h-6 text-[#C5A023]" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* desc */}
                  <p className="text-white/60 text-sm leading-relaxed mb-6 relative z-10">
                    {service.desc}
                  </p>

                  {/* divider */}
                  <div className="h-px bg-white/10 mb-6" />

                  {/* items */}
                  <ul className="space-y-3 relative z-10 mb-8">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-medium text-zinc-300">
                        <ShieldCheck className="w-4 h-4 text-[#C5A023] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={service.href}
                    className="relative z-10 self-start inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C5A023] text-[#001F3F] text-sm font-black tracking-wide hover:bg-[#d4ad2a] transition-colors group/btn"
                  >
                    تفاصيل الخدمة
                    <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* ── Image column ── */}
                <div
                  className={`relative min-h-[320px] lg:min-h-[440px] overflow-hidden ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* gradient layers */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#001F3F]/90 via-[#001F3F]/20 to-transparent" />
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-[#001F3F]/30" />

                  {/* top ribbon */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-[#C5A023] via-[#C5A023]/60 to-transparent" />

                  {/* service number – large watermark */}
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[9rem] font-black leading-none select-none pointer-events-none text-white/7 group-hover:text-white/12 transition-all duration-700">
                    {service.id}
                  </span>

                  {/* top-left ID badge */}
                  <span className="absolute top-5 left-5 text-[10px] font-black text-white/90 bg-[#C5A023] px-3 py-1 rounded-full tracking-widest">
                    {service.id}
                  </span>

                  {/* bottom info strip */}
                  <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between">
                    <div>
                      <p className="text-[#C5A023] text-[10px] font-bold tracking-[0.25em] uppercase mb-1">
                        {service.subtitle}
                      </p>
                      <h4 className="text-white text-xl font-black leading-tight">
                        {service.title}
                      </h4>
                    </div>
                    {/* icon circle */}
                    <div className="w-12 h-12 rounded-full bg-[#C5A023]/20 backdrop-blur-sm border border-[#C5A023]/40 flex items-center justify-center shrink-0 group-hover:bg-[#C5A023]/40 transition-colors">
                      <service.icon className="w-5 h-5 text-[#C5A023]" />
                    </div>
                  </div>

                  {/* decorative corner shape */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#C5A023]/30 rounded-bl-3xl" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/10 rounded-tr-3xl" />
                </div>
              </div>
            )
          })}
        </div>

        {/* bottom note */}
        <p className="text-center text-sm text-muted-foreground mt-10">
          تحتاج خدمة غير مدرجة؟{" "}
          <Link href="/contact" className="text-[#C5A023] font-bold hover:underline">تواصل معنا مباشرة</Link>
        </p>
      </div>
    </section>
  )
}

