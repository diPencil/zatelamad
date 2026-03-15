import { Wrench, HardHat, Eye, Award, Users, BarChart, ShieldCheck, Truck } from "lucide-react"

const capabilities = [
  {
    icon: HardHat,
    stat: "50+",
    title: "مهندس ومتخصص",
    desc: "كوادر هندسية معتمدة في التخصصات الإنشائية والمعمارية والكهروميكانيكية.",
  },
  {
    icon: Truck,
    stat: "30+",
    title: "آلة ومعدة ثقيلة",
    desc: "أسطول متكامل من المعدات الحديثة جاهز لتنفيذ أصعب الأعمال في أي موقع.",
  },
  {
    icon: Award,
    stat: "12+",
    title: "ترخيص واعتماد رسمي",
    desc: "نعمل تحت مظلة تراخيص معتمدة وعضويات مهنية تُؤهّلنا للمشروعات الكبرى.",
  },
  {
    icon: BarChart,
    stat: "100%",
    title: "متابعة رقمية للمشاريع",
    desc: "نستخدم أنظمة إدارة مشاريع حديثة تُتيح للعميل متابعة تقدم العمل لحظياً.",
  },
  {
    icon: ShieldCheck,
    stat: "15+",
    title: "سنة في السوق المصري",
    desc: "سجل حافل بمشاريع متعددة في القاهرة والمحافظات يشهد على ثبات جودتنا.",
  },
  {
    icon: Users,
    stat: "200+",
    title: "عميل وشريك أعمال",
    desc: "شبكة واسعة من العملاء الراضين والموردين الموثوقين بنيناها على مدار السنين.",
  },
]

export function Capabilities() {
  return (
    <section className="py-20 md:py-28 bg-[#001F3F] relative overflow-hidden" id="capabilities">

      {/* blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C5A023]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#C5A023]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* headline */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A023]/15 border border-[#C5A023]/30 text-[#C5A023] text-xs font-bold tracking-widest uppercase mb-4">
            مواردنا وطاقتنا
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            الإمكانيات التي <span className="text-[#C5A023]">تفرق</span>
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto leading-relaxed">
            خلف كل مشروع ناجح منظومة متكاملة من الموارد البشرية والتقنية والإدارية
            تعمل بتناسق تام لتحقيق النتيجة المطلوبة.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C5A023]/40 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#C5A023]/10 group-hover:bg-[#C5A023]/20 flex items-center justify-center transition-colors">
                  <cap.icon className="w-5 h-5 text-[#C5A023]" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[#C5A023] leading-none mb-1">{cap.stat}</div>
                  <div className="font-black text-white text-sm mb-2">{cap.title}</div>
                  <p className="text-xs text-white/50 leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
