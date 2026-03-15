import Link from "next/link"
import { ShieldCheck, Lock, Eye, Database, UserCheck, Bell, RefreshCw, Mail, FileText } from "lucide-react"

export const metadata = {
  title: "سياسة الخصوصية | ذات العماد للمقاولات العموميه",
  description: "سياسة الخصوصية وحماية البيانات الخاصة بشركة ذات العماد للمقاولات العموميه",
}

const sections = [
  {
    icon: Database,
    title: "ما المعلومات التي نجمعها؟",
    content: [
      "المعلومات التي تُقدمها طوعاً عند التواصل معنا كالاسم والبريد الإلكتروني ورقم الهاتف.",
      "تفاصيل مشروعك أو استفسارك التي ترسلها عبر نموذج التواصل.",
      "بيانات الاستخدام التلقائية كعنوان IP ونوع المتصفح وصفحات الزيارة.",
      "ملفات تعريف الارتباط (Cookies) لتحسين تجربة التصفح.",
    ],
  },
  {
    icon: Eye,
    title: "كيف نستخدم معلوماتك؟",
    content: [
      "الرد على استفساراتك والتواصل معك بشأن خدماتنا ومشاريعنا.",
      "إرسال عروض وتحديثات تخص خدماتنا إذا منحتنا موافقتك.",
      "تحسين موقعنا الإلكتروني وتطوير تجربة المستخدم.",
      "الامتثال للمتطلبات القانونية والتنظيمية السارية في جمهورية مصر العربية.",
      "إعداد الإحصاءات والتقارير الداخلية لتطوير خدماتنا.",
    ],
  },
  {
    icon: Lock,
    title: "كيف نحمي بياناتك؟",
    content: [
      "نستخدم بروتوكول HTTPS لتشفير جميع البيانات المرسلة عبر الموقع.",
      "نحتفظ بالبيانات على خوادم آمنة ذات قيود وصول صارمة.",
      "لا يُسمح لأي موظف بالاطلاع على بياناتك إلا عند الضرورة القصوى.",
      "نُجري مراجعات دورية لأنظمة الأمان لضمان حماية مستمرة وفعّالة.",
    ],
  },
  {
    icon: UserCheck,
    title: "مشاركة المعلومات مع أطراف ثالثة",
    content: [
      "لا نبيع أو نؤجر بياناتك الشخصية لأي طرف ثالث تحت أي ظرف.",
      "قد نشارك بيانات محدودة مع شركاء الخدمة الموثوقين (كخدمات البريد) تحت اتفاقيات سرية صارمة.",
      "قد نكشف عن معلومات بموجب أوامر قضائية أو متطلبات قانونية رسمية فقط.",
      "في حالة الاندماج أو الاستحواذ، ستُنقل البيانات مع الالتزام بنفس مستوى الحماية.",
    ],
  },
  {
    icon: Bell,
    title: "ملفات تعريف الارتباط (Cookies)",
    content: [
      "نستخدم ملفات الكوكيز الضرورية لتشغيل الموقع بشكل صحيح.",
      "قد نستخدم كوكيز تحليلية (مثل Google Analytics) لفهم سلوك الزوار.",
      "يمكنك تعطيل الكوكيز من إعدادات متصفحك، غير أن ذلك قد يؤثر على بعض ميزات الموقع.",
      "لا نستخدم كوكيز إعلانية أو تتبعية لأغراض تسويقية خارجية.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "حقوقك فيما يتعلق ببياناتك",
    content: [
      "حق الاطلاع: يحق لك طلب نسخة من كافة البيانات الشخصية التي نحتفظ بها عنك.",
      "حق التصحيح: يحق لك طلب تصحيح أي بيانات غير دقيقة أو غير مكتملة.",
      "حق الحذف: يحق لك طلب حذف بياناتك متى انتفت الحاجة القانونية للاحتفاظ بها.",
      "حق الاعتراض: يحق لك الاعتراض على معالجة بياناتك لأغراض التسويق المباشر.",
    ],
  },
  {
    icon: RefreshCw,
    title: "تحديث سياسة الخصوصية",
    content: [
      "نحتفظ بحق تحديث هذه السياسة في أي وقت لمواكبة التغييرات القانونية أو التشغيلية.",
      "سيتم الإعلان عن أي تغييرات جوهرية بوضوح على الموقع.",
      "آخر تحديث لهذه السياسة: مارس 2026.",
      "استمرارك في استخدام الموقع بعد التغييرات يُعدّ قبولاً ضمنياً للسياسة المحدّثة.",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">

      {/* ── Hero ── */}
      <section className="relative pt-36 lg:pt-52 pb-20 bg-[#001F3F] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/construction-blueprint-architectural-plans.jpg" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#001F3F]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#C5A023]/20 border border-[#C5A023]/30 mb-6 mx-auto">
            <FileText className="w-8 h-8 text-[#C5A023]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
            سياسة <span className="text-[#C5A023]">الخصوصية</span>
          </h1>
          <p className="text-white/65 text-base max-w-2xl mx-auto leading-relaxed">
            نلتزم بحماية خصوصيتك وأمان بياناتك. تُوضّح هذه الصفحة كيفية جمع معلوماتك واستخدامها وحمايتها.
          </p>
          <p className="text-[#C5A023]/70 text-xs mt-4 font-medium">آخر تحديث: مارس 2026</p>
        </div>
      </section>

      {/* ── Intro card ── */}
      <section className="py-14 bg-[#F7F8FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-10 border border-[#001F3F]/6 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-[#001F3F] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#C5A023]" />
              </div>
              <div>
                <h2 className="text-xl font-black text-[#001F3F] mb-3">مقدمة</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  تُطبّق شركة <strong className="text-[#001F3F]">ذات العماد للمقاولات العموميه</strong> هذه السياسة على جميع
                  بياناتك التي يتم جمعها عبر موقعنا الإلكتروني أو أي قناة تواصل أخرى معنا. نحن نأخذ
                  خصوصيتك على محمل الجد ونلتزم بحماية معلوماتك وفق أعلى المعايير المتعارف عليها.
                  تسري هذه السياسة على جميع مستخدمي الموقع والمتعاملين معنا.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sections ── */}
      <section className="pb-20 bg-[#F7F8FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-5">
            {sections.map(({ icon: Icon, title, content }, i) => (
              <div key={i} className="bg-white rounded-3xl border border-[#001F3F]/6 overflow-hidden shadow-sm">
                {/* header */}
                <div className="flex items-center gap-4 p-6 border-b border-[#001F3F]/5">
                  <div className="w-10 h-10 rounded-xl bg-[#C5A023]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#C5A023]" />
                  </div>
                  <h3 className="font-black text-[#001F3F] text-lg">{title}</h3>
                </div>
                {/* body */}
                <ul className="p-6 space-y-3">
                  {content.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A023] shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="py-16 bg-[#001F3F]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#C5A023]/20 border border-[#C5A023]/30 mb-5 mx-auto">
            <Mail className="w-6 h-6 text-[#C5A023]" />
          </div>
          <h3 className="text-2xl font-black text-white mb-3">هل لديك استفسار حول سياسة الخصوصية؟</h3>
          <p className="text-white/60 text-sm mb-7 max-w-md mx-auto leading-relaxed">
            تواصل معنا مباشرة على بريدنا الإلكتروني وسنُجيب على استفسارك في أقرب وقت.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:info@zatelamad.com" className="inline-flex items-center gap-2 bg-[#C5A023] hover:bg-[#d4ad2a] text-[#001F3F] font-bold px-7 py-3 rounded-full text-sm transition-all hover:scale-105">
              <Mail className="w-4 h-4" /> info@zatelamad.com
            </a>
            <Link href="/" className="inline-flex items-center gap-2 border border-white/20 text-white hover:border-[#C5A023] hover:text-[#C5A023] font-bold px-7 py-3 rounded-full text-sm transition-all">
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
