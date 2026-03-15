import { TrendingUp, Clock, DollarSign, ShieldCheck, BadgeCheck, MapPin, Users, CalendarCheck, Medal } from "lucide-react"

const stats = [
  { value: "15+", label: "سنة خبرة في السوق" },
  { value: "200+", label: "مشروع منجز" },
  { value: "50+", label: "عميل راضٍ" },
  { value: "12", label: "محافظة نعمل بها" },
]

const pillars = [
  {
    icon: TrendingUp,
    title: "رفع الإنتاجية",
    desc: "نُطبّق أحدث أساليب إدارة مواقع العمل لتعظيم إنتاجية الفرق الميدانية وتقليل وقت التوقف.",
  },
  {
    icon: Clock,
    title: "الالتزام بالبرامج الزمنية",
    desc: "نضع جداول زمنية دقيقة ونلتزم بها بصرامة، مع مراقبة مستمرة لتفادي أي تأخير في التسليم.",
  },
  {
    icon: DollarSign,
    title: "التحكم في التكاليف",
    desc: "نُدير الميزانيات بفاعلية عالية واستخدام أمثل للمواد، مما يضمن قيمة حقيقية مقابل كل جنيه.",
  },
  {
    icon: ShieldCheck,
    title: "معايير السلامة المهنية",
    desc: "سلامة العمال أولويتنا القصوى، نُلزم جميع مواقعنا بالمعايير الدولية للصحة والسلامة المهنية.",
  },
  {
    icon: BadgeCheck,
    title: "الجودة والمعايير العالمية",
    desc: "نعمل وفق أنظمة ضبط الجودة ISO ونُخضع كل مرحلة تنفيذية لمراجعة هندسية صارمة.",
  },
  {
    icon: MapPin,
    title: "الانتشار الجغرافي",
    desc: "حضورنا يمتد عبر 12 محافظة مصرية، مما يمنحنا قدرة تنفيذية واسعة وشبكة موردين محلية متينة.",
  },
]

export function Experience() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F8FA]" id="experience">

      {/* ── Stats banner ── */}
      <div className="bg-[#001F3F] py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map(({ value, label }, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-3xl md:text-4xl font-black text-[#C5A023]">{value}</span>
                <span className="text-white/60 text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 md:mt-20">

        {/* ── Header ── */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A023]/10 border border-[#C5A023]/20 text-[#C5A023] text-xs font-bold tracking-widest uppercase mb-4">
              ما يُميّزنا
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#001F3F] leading-tight">
              خبرتنا في <span className="text-[#C5A023]">السوق المصري</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-base leading-relaxed lg:pb-2">
            على مدى أكثر من خمسة عشر عاماً، راكمنا تجربة عميقة في بيئة العمل المصرية،
            نفهم تحدياتها ومتطلباتها، وطوّرنا منظومة تنفيذية قادرة على تحقيق النتائج
            في ظروف السوق المحلية بكفاءة واحترافية عالية.
          </p>
        </div>

        {/* ── Pillars grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl p-7 border border-[#001F3F]/6 shadow-sm hover:shadow-xl hover:border-[#C5A023]/30 hover:-translate-y-1 transition-all duration-400 overflow-hidden"
            >
              {/* watermark number */}
              <span className="absolute top-3 left-4 text-6xl font-black text-[#001F3F]/[0.04] select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* icon */}
              <div className="w-12 h-12 rounded-2xl bg-[#001F3F]/5 group-hover:bg-[#C5A023]/10 flex items-center justify-center mb-5 transition-colors relative z-10">
                <Icon className="w-6 h-6 text-[#C5A023]" />
              </div>

              <h3 className="text-lg font-black text-[#001F3F] mb-2 relative z-10">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{desc}</p>

              {/* bottom gold accent */}
              <span className="absolute bottom-0 right-8 h-[3px] w-0 bg-[#C5A023] rounded-t-full group-hover:w-14 transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
