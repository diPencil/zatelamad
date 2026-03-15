import { ClipboardList, Hammer, SearchCheck, KeyRound } from "lucide-react"

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "دراسة المشروع والتخطيط",
    desc: "نبدأ بجلسة عمل معمّقة لفهم متطلبات العميل وتحليل الموقع، ثم نضع خطة تنفيذية شاملة تُحدد الجدول الزمني، ميزانية العمل، وتسلسل المراحل بدقة متناهية.",
    tag: "المرحلة الأولى",
  },
  {
    num: "02",
    icon: Hammer,
    title: "التنفيذ تحت الإشراف المهندسي",
    desc: "فرق تنفيذ متخصصة تعمل بالتوازي مع مهندس مقيم يُتابع كل تفصيلة، مدعومين بنظام توريد مواد خاضع للرقابة لضمان عدم الانحراف عن المواصفات المحددة.",
    tag: "المرحلة الثانية",
  },
  {
    num: "03",
    icon: SearchCheck,
    title: "مراجعة الجودة والاختبارات",
    desc: "قبل أي إغلاق أو تشطيب، تمر كل منظومة بسلسلة اختبارات فنية موثّقة — من الخرسانة والحديد إلى شبكات الكهرباء والصرف — لنضمن معايير السلامة والديمومة.",
    tag: "المرحلة الثالثة",
  },
  {
    num: "04",
    icon: KeyRound,
    title: "التسليم والدعم ما بعد الإنجاز",
    desc: "نُسلّم المشروع وفق بروتوكول تفصيلي مع كامل التوثيق الهندسي، ونُقدّم فترة دعم فني مُتابعة لضمان سير كل شيء بالصورة المخططة لها.",
    tag: "المرحلة الأخيرة",
  },
]

export function Methodology() {
  return (
    <section className="py-20 md:py-28 bg-white" id="methodology">
      <div className="container mx-auto px-4">

        {/* headline */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A023]/10 border border-[#C5A023]/20 text-[#C5A023] text-xs font-bold tracking-widest uppercase mb-4">
            كيف نعمل
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#001F3F]">
            منهجية العمل <span className="text-[#C5A023]">المتكاملة</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            نعتمد على ربط إدارات التخطيط والمشتريات والتنفيذ في منظومة واحدة،
            لنُقلّص الاعتماد على المقاولين من الباطن ونحافظ على السيطرة الكاملة على المشروع.
          </p>
        </div>

        {/* steps */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group relative bg-[#F7F8FA] hover:bg-[#001F3F] rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
            >
              {/* watermark */}
              <span className="absolute -bottom-2 left-4 text-8xl font-black text-[#001F3F]/5 group-hover:text-white/5 select-none leading-none transition-colors">
                {step.num}
              </span>

              {/* tag */}
              <span className="inline-block text-[10px] font-black tracking-[0.3em] uppercase text-[#C5A023] mb-4">
                {step.tag}
              </span>

              {/* icon + title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#C5A023]/10 group-hover:bg-[#C5A023]/20 flex items-center justify-center shrink-0 transition-colors">
                  <step.icon className="w-5 h-5 text-[#C5A023]" />
                </div>
                <h3 className="text-lg font-black text-[#001F3F] group-hover:text-white transition-colors">
                  {step.title}
                </h3>
              </div>

              {/* desc */}
              <p className="text-sm text-muted-foreground group-hover:text-white/70 leading-relaxed relative z-10 transition-colors">
                {step.desc}
              </p>

              {/* bottom accent */}
              <span className="absolute bottom-0 right-8 h-[3px] w-0 bg-[#C5A023] rounded-t-full group-hover:w-14 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
