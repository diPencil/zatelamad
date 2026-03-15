import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowRight, MapPin, Calendar, Maximize2, Clock,
  Users, CheckCircle2, ChevronLeft, ChevronRight, Tag
} from "lucide-react"
import { getProjectBySlug, projectsData } from "@/lib/projects-data"

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: `${project.title} — ${project.subtitle} | ذات العماد للمقاولات العموميه`,
    description: project.overview,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const currentIndex = projectsData.findIndex((p) => p.slug === slug)
  const prev = currentIndex > 0 ? projectsData[currentIndex - 1] : null
  const next = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null

  return (
    <main className="min-h-screen" dir="rtl">

      {/* ── Hero ── */}
      <section className="relative pt-36 lg:pt-52 pb-28 bg-[#001F3F] overflow-hidden">
        <div className="absolute inset-0">
          <img src={project.heroImage} className="w-full h-full object-cover opacity-25" alt="" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-[#001F3F]/70 via-[#001F3F]/60 to-[#001F3F]" />
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-8">
            <Link href="/" className="hover:text-[#C5A023] transition-colors">الرئيسية</Link>
            <ChevronLeft className="w-3 h-3" />
            <Link href="/projects-samples" className="hover:text-[#C5A023] transition-colors">نماذج مشاريعنا</Link>
            <ChevronLeft className="w-3 h-3" />
            <span className="text-white/80">{project.title}</span>
          </nav>

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A023]/20 border border-[#C5A023]/30 text-[#C5A023] text-[10px] font-bold tracking-widest uppercase mb-5">
            {project.category}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-2">
            {project.title}
          </h1>
          <h2 className="text-xl md:text-3xl font-black text-[#C5A023] mb-8">
            {project.subtitle}
          </h2>

          {/* Quick info pills */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: MapPin,    text: project.location },
              { icon: Calendar,  text: project.year },
              { icon: Maximize2, text: project.area },
              { icon: Clock,     text: project.duration },
              { icon: Users,     text: project.client },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white text-xs font-bold">
                <Icon className="w-3.5 h-3.5 text-[#C5A023]" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview + Challenge + Solution ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Overview */}
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-2xl font-black text-[#001F3F] flex items-center gap-3">
                <span className="w-1 h-7 bg-[#C5A023] rounded-full inline-block" />
                نظرة عامة
              </h2>
              <p className="text-muted-foreground leading-relaxed">{project.overview}</p>

              <h3 className="text-lg font-black text-[#001F3F] mt-4">التحدي</h3>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>

              <h3 className="text-lg font-black text-[#001F3F] mt-4">حلّنا</h3>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>

            {/* Specs card */}
            <div className="bg-[#F7F8FA] rounded-2xl p-6 border border-[#001F3F]/6 self-start shadow-sm">
              <h3 className="font-black text-[#001F3F] mb-4 text-sm uppercase tracking-wider">المواصفات الفنية</h3>
              <div className="space-y-3">
                {project.specs.map(({ label, value }, i) => (
                  <div key={i} className="flex flex-col gap-0.5 border-b border-[#001F3F]/6 pb-3 last:border-0 last:pb-0">
                    <span className="text-[10px] text-[#C5A023] font-black uppercase tracking-wider">{label}</span>
                    <span className="text-sm font-bold text-[#001F3F]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scope of work ── */}
      <section className="py-16 bg-[#001F3F]">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <span className="w-1 h-7 bg-[#C5A023] rounded-full inline-block" />
            نطاق العمل
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.scope.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/5 rounded-2xl p-4 border border-white/8">
                <CheckCircle2 className="w-5 h-5 text-[#C5A023] shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo gallery ── */}
      <section className="py-16 bg-[#F7F8FA]">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-black text-[#001F3F] mb-8 flex items-center gap-3">
            <span className="w-1 h-7 bg-[#C5A023] rounded-full inline-block" />
            معرض الصور
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {project.gallery.map((img, i) => (
              <div key={i} className={`group rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}>
                <div className={`relative ${i === 0 ? "aspect-square" : "aspect-video"} overflow-hidden`}>
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#001F3F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="absolute bottom-3 right-3 left-3 text-white text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity leading-tight">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black text-[#001F3F] mb-8 flex items-center gap-3">
            <span className="w-1 h-7 bg-[#C5A023] rounded-full inline-block" />
            النتائج والمخرجات
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.results.map((result, i) => (
              <div key={i} className="flex items-start gap-4 bg-[#F7F8FA] rounded-2xl p-5 border border-[#C5A023]/15">
                <div className="w-8 h-8 rounded-full bg-[#C5A023] text-[#001F3F] flex items-center justify-center font-black text-sm shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-sm text-[#001F3F] font-bold leading-relaxed">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tags ── */}
      <section className="py-10 bg-[#F7F8FA] border-t border-[#001F3F]/6">
        <div className="container mx-auto px-4 max-w-4xl flex flex-wrap items-center gap-3">
          <Tag className="w-4 h-4 text-[#C5A023]" />
          {project.tags.map((tag, i) => (
            <span key={i} className="px-4 py-1.5 rounded-full bg-[#C5A023]/10 border border-[#C5A023]/20 text-[#001F3F] text-xs font-black">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* ── Prev / Next navigation ── */}
      <section className="py-12 bg-[#001F3F]">
        <div className="container mx-auto px-4 max-w-4xl flex justify-between items-center gap-4">
          {prev ? (
            <Link href={`/projects-samples/${prev.slug}`} className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#C5A023] group-hover:border-[#C5A023] transition-all">
                <ChevronRight className="w-5 h-5" />
              </div>
              <div className="text-right">
                <p className="text-[10px] text-[#C5A023] font-bold uppercase tracking-wider">المشروع السابق</p>
                <p className="text-sm font-black">{prev.title}</p>
              </div>
            </Link>
          ) : <div />}

          <Link href="/projects-samples" className="flex items-center gap-2 text-xs text-[#C5A023] hover:text-white transition-colors font-bold">
            <ArrowRight className="w-4 h-4" />
            كل المشاريع
          </Link>

          {next ? (
            <Link href={`/projects-samples/${next.slug}`} className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors">
              <div className="text-left">
                <p className="text-[10px] text-[#C5A023] font-bold uppercase tracking-wider">المشروع التالي</p>
                <p className="text-sm font-black">{next.title}</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#C5A023] group-hover:border-[#C5A023] transition-all">
                <ChevronLeft className="w-5 h-5" />
              </div>
            </Link>
          ) : <div />}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-black text-[#001F3F] mb-3">تريد مشروعاً مشابهاً؟</h2>
          <p className="text-muted-foreground text-sm mb-6">فريقنا جاهز لتقديم عرض سعر مفصّل خلال 48 ساعة.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#C5A023] hover:bg-[#d4ad2a] text-[#001F3F] font-black px-8 py-3 rounded-full text-sm transition-all hover:scale-105">
            تواصل معنا الآن
          </Link>
        </div>
      </section>
    </main>
  )
}
