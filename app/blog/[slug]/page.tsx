import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, User, Tag, BookOpen, ChevronLeft, CheckCircle2, BarChart3, Lightbulb, Quote } from "lucide-react"
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-data"
import BlogPostTools from "@/components/blog-post-tools"
import ZatBot from "@/components/zat-bot"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return { title: "المقال غير موجود | ذات العماد" }
  return {
    title: `${post.title} | المدونة والأخبار`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  // related posts (same category, exclude current)
  const related = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3)
  // other posts for sidebar
  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 4)

  return (
    <main className="min-h-screen bg-[#F3F5F9]">

      {/* ── Hero ── */}
      <section className="relative pt-36 lg:pt-48 pb-14 bg-[#001F3F] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={post.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#001F3F]/50 to-[#001F3F]" />

        <div className="container mx-auto px-4 relative z-10">
          {/* breadcrumb */}
          <nav className="flex items-center gap-1 text-white/40 text-xs mb-6 justify-center">
            <Link href="/" className="hover:text-white/70 transition-colors">الرئيسية</Link>
            <ChevronLeft className="w-3 h-3" />
            <Link href="/blog" className="hover:text-white/70 transition-colors">المدونة</Link>
            <ChevronLeft className="w-3 h-3" />
            <span className="text-[#C5A023]">{post.category}</span>
          </nav>

          <div className="max-w-3xl mx-auto text-center text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#C5A023]/20 border border-[#C5A023]/30 px-4 py-1 text-[11px] font-black text-[#C5A023] mb-5">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-5">{post.title}</h1>
            <div className="flex flex-wrap justify-center gap-4 text-white/60 text-sm mb-8">
              <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
              <span className="inline-flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
            </div>
            <div className="flex justify-center">
              <BlogPostTools slug={post.slug} title={post.title} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Two-column layout ── */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto items-start">

            {/* ── Main Column ── */}
            <article className="flex-1 min-w-0">

              {/* hero image */}
              <div className="rounded-2xl overflow-hidden aspect-video mb-8 shadow-md">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>

              {/* content card */}
              <div className="rounded-2xl bg-white border border-[#001F3F]/8 shadow-sm p-6 md:p-10">
                <p className="text-lg md:text-xl leading-relaxed text-[#001F3F]/90 font-medium mb-8 pb-8 border-b border-[#001F3F]/8">
                  {post.excerpt}
                </p>

                <div className="space-y-6 text-[#001F3F]/75 leading-[1.95] text-base">
                  {post.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* key points */}
                {post.keyPoints && (
                  <div className="mt-10 rounded-xl bg-[#001F3F]/[0.04] border-r-4 border-[#C5A023] p-6">
                    <h4 className="text-sm font-black text-[#001F3F] flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A023]" />
                      النقاط الرئيسية
                    </h4>
                    <ul className="space-y-3">
                      {post.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#001F3F]/75 leading-relaxed">
                          <span className="mt-0.5 w-5 h-5 rounded-full bg-[#C5A023]/20 border border-[#C5A023]/40 flex items-center justify-center shrink-0 text-[10px] font-black text-[#C5A023]">
                            {i + 1}
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* stats */}
                {post.stats && (
                  <div className="mt-8">
                    <h4 className="text-sm font-black text-[#001F3F] flex items-center gap-2 mb-4">
                      <BarChart3 className="w-4 h-4 text-[#C5A023]" />
                      أرقام وإحصائيات
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      {post.stats.map((stat, i) => (
                        <div key={i} className="rounded-xl bg-[#001F3F] text-center p-4">
                          <span className="block text-xl font-black text-[#C5A023] leading-none mb-1.5">{stat.value}</span>
                          <span className="block text-[11px] text-white/60 leading-snug">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* tips */}
                {post.tips && (
                  <div className="mt-8">
                    <h4 className="text-sm font-black text-[#001F3F] flex items-center gap-2 mb-4">
                      <Lightbulb className="w-4 h-4 text-[#C5A023]" />
                      نصائح عملية
                    </h4>
                    <div className="space-y-3">
                      {post.tips.map((tip, i) => (
                        <div key={i} className="flex items-start gap-3 rounded-lg bg-[#F3F5F9] border border-[#001F3F]/6 p-3.5">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-[#C5A023] text-[#001F3F] text-[11px] font-black flex items-center justify-center mt-0.5">
                            {i + 1}
                          </span>
                          <span className="text-sm text-[#001F3F]/75 leading-relaxed">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* pull quote */}
                {post.quote && (
                  <blockquote className="mt-10 border-r-4 border-[#C5A023] bg-gradient-to-l from-[#C5A023]/[0.05] to-transparent rounded-l-xl p-6">
                    <Quote className="w-7 h-7 text-[#C5A023]/30 mb-3" />
                    <p className="text-lg md:text-xl font-bold italic text-[#001F3F]/80 leading-relaxed mb-3">
                      &ldquo;{post.quote.text}&rdquo;
                    </p>
                    <cite className="text-xs text-[#001F3F]/45 not-italic font-bold">— {post.quote.author}</cite>
                  </blockquote>
                )}

                {/* conclusion */}
                {post.conclusion && (
                  <div className="mt-8 rounded-xl bg-[#001F3F] p-6">
                    <h4 className="text-[10px] font-black text-[#C5A023] uppercase tracking-widest mb-3">الخلاصة</h4>
                    <p className="text-sm leading-[1.9] text-white/80">{post.conclusion}</p>
                  </div>
                )}

                {/* tags */}
                <div className="mt-8 pt-6 border-t border-[#001F3F]/8 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#001F3F]/40 uppercase tracking-wider ml-1">
                    <Tag className="w-3 h-3" /> الوسوم:
                  </span>
                  {[post.category, post.tag].map((t) => (
                    <span key={t} className="text-[11px] font-bold rounded-full bg-[#001F3F]/6 text-[#001F3F]/70 px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>

                {/* footer */}
                <div className="mt-8 pt-6 border-t border-[#001F3F]/8 flex flex-wrap items-center justify-between gap-4">
                  <Link href="/blog" className="inline-flex items-center gap-2 rounded-full border border-[#001F3F]/20 text-[#001F3F] hover:bg-[#001F3F] hover:text-white px-5 py-2.5 text-sm font-black transition-colors">
                    <ArrowLeft className="w-4 h-4" /> كل المقالات
                  </Link>
                  <BlogPostTools slug={post.slug} title={post.title} />
                </div>
              </div>

              {/* related posts */}
              {related.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-base font-black text-[#001F3F] mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 rounded-full bg-[#C5A023] inline-block" />
                    مقالات ذات صلة
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {related.map((r) => (
                      <Link key={r.slug} href={`/blog/${r.slug}`} className="group rounded-xl bg-white border border-[#001F3F]/8 hover:border-[#C5A023]/40 hover:shadow-md transition-all overflow-hidden flex flex-col">
                        <div className="h-32 overflow-hidden">
                          <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-3 flex-1">
                          <span className="text-[#C5A023] text-[9px] font-black uppercase tracking-wider block mb-1">{r.category}</span>
                          <p className="text-xs font-black text-[#001F3F] leading-snug line-clamp-2">{r.title}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* ── Sidebar ── */}
            <aside className="w-full lg:w-80 xl:w-96 shrink-0 space-y-5 lg:sticky lg:top-28">

              {/* article info card */}
              <div className="rounded-2xl bg-[#001F3F] text-white p-5 space-y-4">
                <h3 className="text-sm font-black flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#C5A023]" /> معلومات المقال
                </h3>
                <div className="space-y-3 text-sm">
                  {[
                    { label: "التصنيف",    value: post.category },
                    { label: "الكاتب",     value: post.author },
                    { label: "تاريخ النشر", value: post.date },
                    { label: "وقت القراءة", value: post.readTime },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between border-b border-white/8 pb-2 last:border-0 last:pb-0">
                      <span className="text-white/45 text-xs">{label}</span>
                      <span className="font-bold text-xs text-white/90">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-1">
                  <span className="inline-flex items-center rounded-full bg-[#C5A023]/20 border border-[#C5A023]/30 px-3 py-1 text-[#C5A023] text-[10px] font-black">
                    # {post.tag}
                  </span>
                </div>
              </div>

              {/* other articles */}
              <div className="rounded-2xl bg-white border border-[#001F3F]/8 shadow-sm p-5">
                <h3 className="text-sm font-black text-[#001F3F] mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 rounded-full bg-[#C5A023] inline-block" />
                  مقالات أخرى
                </h3>
                <div className="space-y-3">
                  {others.map((o) => (
                    <Link key={o.slug} href={`/blog/${o.slug}`} className="group flex items-center gap-3 rounded-xl p-2 hover:bg-[#F3F5F9] transition-colors">
                      <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                        <img src={o.image} alt={o.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[#C5A023] text-[9px] font-black uppercase mb-0.5 block">{o.category}</span>
                        <p className="text-xs font-bold text-[#001F3F] leading-snug line-clamp-2 group-hover:text-[#C5A023] transition-colors">{o.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href="/blog" className="mt-4 w-full flex items-center justify-center gap-1 text-[11px] font-bold text-[#001F3F]/50 hover:text-[#C5A023] transition-colors pt-3 border-t border-[#001F3F]/8">
                  عرض كل المقالات <ArrowLeft className="w-3 h-3" />
                </Link>
              </div>

              {/* ZatBot */}
              <ZatBot />

              {/* CTA card */}
              <div className="rounded-2xl bg-[#C5A023] p-5 text-[#001F3F]">
                <h3 className="text-sm font-black mb-2">هل لديك مشروع؟</h3>
                <p className="text-xs leading-relaxed opacity-80 mb-4">
                  تواصل مع فريق ذات العماد للحصول على استشارة مجانية وعرض سعر لمشروعك.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 bg-[#001F3F] text-white text-xs font-black px-4 py-2.5 rounded-full hover:bg-[#002a54] transition-colors">
                  اتصل بنا الآن <ArrowLeft className="w-3.5 h-3.5" />
                </Link>
              </div>

            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
