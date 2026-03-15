"use client"

import Link from "next/link"
import { projectsData } from "@/lib/projects-data"

const projects = [
  {
    title: "إسكان مميز – جهاز أكتوبر الجديدة",
    description:
      "يُعد هذا المشروع أحد المشروعات السكنية المميزة التي قامت شركة ذات العماد بتنفيذها، حيث شمل تنفيذ عمارات سكنية طبقًا للمواصفات الفنية المعتمدة للهيئة المهندسية، مع الالتزام بالجودة في التشطيبات وسرعة التنفيذ.",
    details:
      "شمل نطاق العمل تنفيذ الأساسات، الهياكل الخرسانية، وأعمال المباني، وصولاً إلى التشطيبات الكاملة للواجهات والمداخل، مع ضمان مطابقة كافة الاختبارات الفنية للكود المصري.",
    tags: ["إسكان فاخر", "إشراف هندسي", "جودة معتمدة"],
    images: ["/images/Zatproject (1).jpeg", "/images/Zatproject (2).jpeg"],
  },
  {
    title: "الإسكان الاجتماعي – 800 فدان",
    description:
      "شاركت ذات العماد في تنفيذ أحد أكبر مشروعات الإسكان الاجتماعي على مساحة 800 فدان، حيث تطلب المشروع إدارة دقيقة للوقت والموارد نظرًا لضخامته وعدد الوحدات الكبير.",
    details:
      "تم تنفيذ الأعمال الإنشائية لعدد من العمارات السكنية، مع التركيز على الكفاءة الإنشائية والاستخدام الأمثل للمواد، مما ساعد في تسليم الوحدات في مواعيدها المحددة بجودة فائقة.",
    tags: ["مشروعات قومية", "سرعة تنفيذ", "كفاءة موارد"],
    images: ["/images/Zatproject (3).jpeg", "/images/Zatproject (4).jpeg"],
  },
  {
    title: "مشروعات الخدمات العامة والتعليمية",
    description:
      "قامت شركة ذات العماد بتنفيذ مجموعة متكاملة من المباني الخدمية، شملت مدارس، وحدات صحية، حضانات، وأسواق تجارية تخدم التجمعات العمرانية الجديدة.",
    details:
      "تم تنفيذ هذه المشروعات مع مراعاة طبيعة الاستخدام اليومي المكثف لكل مبنى، والالتزام الصارم باشتراطات السلامة المهنية، مما يضمن استدامة المباني وكفاءتها التشغيلية لسنوات طويلة.",
    tags: ["مباني تعليمية", "مرافق صحية", "تنمية مجتمعية"],
    images: ["/images/Zatproject (5).jpeg", "/images/Zatproject (6).jpeg"],
  },
  {
    title: "غرب المطار – المرحلة السادسة",
    description:
      "تولت ذات العماد تنفيذ 7 عمارات سكنية كاملة ضمن مشروع غرب المطار – المرحلة السادسة، حيث تم تنفيذ جميع مراحل البناء والتشطيب وفق جدول زمني منضبط.",
    details:
      "تضمن المشروع تنفيذ الهياكل الخرسانية المسلحة، أعمال المباني، العزل الحراري والرطوبي، وتجهيز الوصلات الخارجية للمرافق، مع الالتزام بمستوى تشطيب موحد لجميع العمارات.",
    tags: ["توسعات عمرانية", "هيكل خرساني", "تشطيبات واجهة"],
    images: ["/images/Zatproject (7).jpeg", "/images/Zatproject (8).jpeg"],
  },
  {
    title: "استكمال وتطوير العمارات السكنية",
    description:
      "قامت الشركة بمشروعات استكمال تنفيذ عمارات الإسكان الاجتماعي، حيث تم التعامل مع كافة التحديات الهندسية القائمة وتطوير مستوى التنفيذ بما يليق بالمعايير الحالية.",
    details:
      "شمل العمل مراجعة الحالة الإنشائية، استكمال أعمال المباني والتشطيبات، ومعالجة أي مشاكل فنية ناتجة عن توقف العمل السابق، مما أدى لرفع كفاءة المبنى بالكامل.",
    tags: ["ترميم وتطوير", "رفع كفاءة", "حلول هندسية"],
    images: ["/images/Zatproject (9).jpeg", "/images/Zatproject (10).jpeg"],
  },
  {
    title: "مدارس هيئة الأبنية التعليمية المتطورة",
    description:
      "نفذت ذات العماد عدداً من الصروح التعليمية التابعة لهيئة الأبنية التعليمية، مع الالتزام الكامل بالاشتراطات الهندسية والفراغية الحديثة للبيئة التعليمية.",
    details:
      "ركزنا على توفير فراغات تعليمية آمنة ومجهزة، مع تنفيذ معامل وملاعب وخدمات متكاملة، واستخدام خامات مقاومة للاحتكاك الكثيف لضمان عمر افتراضي طويل للمنشأة.",
    tags: ["هيئة الأبنية", "بيئة تعليمية", "أمان استراتيجي"],
    images: ["/images/Zatproject (11).jpeg", "/images/Zatproject (12).jpeg"],
  },
  {
    title: "إسكان اجتماعي – جهاز حدائق أكتوبر",
    description:
      "شمل المشروع تنفيذ 5 عمارات إسكان اجتماعي شاملة التشطيبات الداخلية والخارجية والمرافق، حيث تم التركيز على سرعة الإنجاز وجودة التنفيذ الاستثنائية.",
    details:
      "تضمن العمل تنفيذ الهياكل والأساسات، أعمال المباني والعزل، والتشطيبات المتكاملة (سباكة، كهرباء، دهانات، سيراميك)، بالإضافة إلى تنسيق الموقع العام واللاندسكيب المحيط.",
    tags: ["تشطيب متكامل", "مرافق كاملة", "تنسيق موقع"],
    images: ["/images/Zatproject (13).jpeg", "/images/Zatproject (14).jpeg"],
  },
]

export function Projects() {
  return (
    <section className="py-24 bg-muted/30" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">سابقـة الأعمال</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            تفتخر ذات العماد بسجل حافل من المشروعات الناجحة التي تعكس التزامنا بالجودة والتميز
          </p>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
            >
              {/* Images Section */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800 z-10">
                  <img
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {project.images[1] && (
                  <div className={`absolute -bottom-12 ${index % 2 === 0 ? "-left-12" : "-right-12"} w-2/3 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-zinc-800 hidden md:block z-20`}>
                    <img
                      src={project.images[1] || "/placeholder.svg"}
                      alt={`${project.title} detailed`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <div className={`absolute -top-8 ${index % 2 === 0 ? "-right-8" : "-left-8"} w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10`} />
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-right">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">
                  مشروع رقم {index + 1}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">{project.title}</h3>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>{project.description}</p>
                  {project.details && <p>{project.details}</p>}
                </div>

                <div className="pt-4 flex flex-wrap gap-3 justify-center lg:justify-start">
                  <span className="px-4 py-2 bg-background rounded-lg border shadow-sm text-sm font-medium">جودة عالية</span>
                  <span className="px-4 py-2 bg-background rounded-lg border shadow-sm text-sm font-medium">تسليم في الموعد</span>
                  <span className="px-4 py-2 bg-background rounded-lg border shadow-sm text-sm font-medium">مطابقة للمواصفات</span>

                  {/* @ts-ignore */}
                  {project.tags && project.tags.map((tag: string, i: number) => (
                    <span key={i} className="px-4 py-2 bg-primary/5 text-primary rounded-lg border border-primary/20 shadow-sm text-sm font-bold">
                      {tag}
                    </span>
                  ))}
                </div>

                {projectsData[index] && (
                  <div className="pt-2">
                    <Link
                      href={`/projects-samples/${projectsData[index].slug}`}
                      className="inline-flex items-center gap-2 bg-[#001F3F] hover:bg-[#C5A023] text-white font-black px-6 py-3 rounded-full text-sm transition-all hover:scale-105"
                    >
                      عرض تفاصيل المشروع ←
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
