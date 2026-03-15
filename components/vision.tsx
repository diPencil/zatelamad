import { Target, TrendingUp, Globe, Cpu } from "lucide-react"

const pillars = [
  {
    icon: TrendingUp,
    title: "التوسع والنمو",
    desc: "نسعى لتنفيذ مشروعات كبرى على مستوى الجمهورية وتعزيز حضورنا في السوق المصري.",
  },
  {
    icon: Cpu,
    title: "التحديث التقني",
    desc: "نطوّر أدواتنا وأساليبنا التنفيذية باستمرار لمواكبة أحدث تقنيات البناء والإنشاء.",
  },
  {
    icon: Globe,
    title: "معايير عالمية",
    desc: "نرفع سقف الجودة لنصل إلى معايير دولية تجعلنا مرجعاً في مجال المقاولات والإنشاءات.",
  },
]

export function Vision() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#F7F8FA]" id="vision">

      {/* decorative blobs */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#C5A023]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#001F3F]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* top: icon + badge + headline */}
        <div className="text-center mb-14">

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A023]/10 border border-[#C5A023]/20 text-[#C5A023] text-xs font-bold tracking-widest uppercase mb-4">
            إلى أين نتجه
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#001F3F] mb-5">
            رؤيتنا <span className="text-[#C5A023]">المستقبلية</span>
          </h2>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            تسعى شركة ذات العماد إلى التوسع في تنفيذ المشروعات الكبرى، وتطوير أدواتها التنفيذية،
            مع الحفاظ على قيم الجودة، الالتزام، والاحترافية.
          </p>
        </div>

        {/* pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl p-8 shadow-sm border border-[#001F3F]/6 hover:border-[#C5A023]/40 hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
            >
              {/* number watermark */}
              <span className="absolute top-4 left-6 text-6xl font-black text-[#001F3F]/4 select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="w-12 h-12 rounded-2xl bg-[#001F3F]/5 group-hover:bg-[#C5A023]/10 flex items-center justify-center mb-5 transition-colors relative z-10">
                <Icon className="w-6 h-6 text-[#C5A023]" />
              </div>

              <h3 className="text-lg font-black text-[#001F3F] mb-2 relative z-10">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{desc}</p>

              {/* gold bottom line on hover */}
              <span className="absolute bottom-0 right-8 h-[3px] w-0 bg-[#C5A023] rounded-t-full group-hover:w-14 transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
