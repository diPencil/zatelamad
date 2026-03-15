import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Tag, BookOpen } from "lucide-react"
import { blogCategories, blogPosts } from "@/lib/blog-data"

export const metadata = {
  title: "المدونة والأخبار | ذات العماد للمقاولات العامة",
  description: "أحدث المقالات الهندسية ونشرات الأخبار من شركة ذات العماد للمقاولات",
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative pt-36 lg:pt-52 pb-20 bg-[#001F3F] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/construction-blueprint-architectural-plans.jpg" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-[#001F3F]/60 to-[#001F3F]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A023]/15 border border-[#C5A023]/30 text-[#C5A023] text-[10px] font-bold tracking-widest uppercase mb-5">
            <BookOpen className="w-3 h-3" /> المدونة الهندسية
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
            المدونة <span className="text-[#C5A023]">والأخبار</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            مقالات ونشرات هندسية متخصصة يكتبها فريق ذات العماد — نشارككم خبرتنا لتبنوا بوعي أكبر.
          </p>
        </div>
      </section>

      {/* ── Featured Post ── */}
      <section className="pt-10 pb-20 bg-[#F3F5F9]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* section label */}
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center gap-2.5 text-[10px] font-black tracking-[0.3em] uppercase text-[#C5A023]">
                <span className="w-10 h-0.5 rounded-full bg-[#C5A023]" />
                المقال المميز
              </span>
              <Link href="/blog" className="text-[11px] font-bold text-[#001F3F]/45 hover:text-[#C5A023] transition-colors">
                كل المقالات ←
              </Link>
            </div>

            {/* card */}
            <Link href={`/blog/${featured.slug}`} className="group block">
              <article className="relative w-full rounded-[28px] overflow-hidden min-h-[440px] md:min-h-[560px] shadow-[0_32px_90px_-30px_rgba(0,31,63,0.55)]">

                {/* bg image */}
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />

                {/* gradient layers */}
                <div className="absolute inset-0 bg-linear-to-t from-[#00111f]/97 via-[#00111f]/55 to-[#00111f]/10" />
                <div className="absolute inset-0 bg-linear-to-r from-[#00111f]/60 via-transparent to-transparent" />

                {/* golden vertical accent */}
                <div className="absolute right-0 inset-y-0 w-1 bg-linear-to-b from-transparent via-[#C5A023]/80 to-transparent" />

                {/* top strip */}
                <div className="absolute top-6 inset-x-6 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C5A023] text-[#001F3F] text-[10px] font-black px-3 py-1.5 shadow-md">
                    {featured.tag}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/12 backdrop-blur-md border border-white/20 text-white/80 text-[10px] font-bold px-3 py-1.5">
                    <Clock className="w-3 h-3" /> {featured.readTime}
                  </span>
                </div>

                {/* bottom content */}
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-12 z-10">
                  <div className="max-w-2xl">
                    <span className="text-[#C5A023] text-[11px] font-black tracking-[0.25em] uppercase block mb-3">
                      {featured.category}
                    </span>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
                      {featured.title}
                    </h2>
                    <p className="text-white/65 text-sm md:text-base leading-relaxed mb-7 max-w-xl line-clamp-2">
                      {featured.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="inline-flex items-center gap-1.5 text-white/45 text-xs">
                        <Calendar className="w-3.5 h-3.5" /> {featured.date}
                      </span>
                      <span className="inline-flex items-center gap-2 bg-[#C5A023] group-hover:bg-[#d4ad2a] text-[#001F3F] font-black text-sm px-6 py-2.5 rounded-full transition-all shadow-lg shadow-[#c5a023]/25 group-hover:scale-105">
                        اقرأ المقال <ArrowLeft className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>

              </article>
            </Link>

          </div>
        </div>
      </section>

      {/* ── Category chips ── */}
      <section className="pb-4 bg-[#F7F8FA]">
        <div className="container mx-auto px-4 pt-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {blogCategories.map((cat) => (
              <span key={cat} className="px-4 py-1.5 rounded-full bg-white border border-[#001F3F]/10 text-xs font-bold text-[#001F3F] hover:bg-[#C5A023] hover:text-white hover:border-[#C5A023] transition-all cursor-pointer">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grid of 8 posts ── */}
      <section className="py-12 bg-[#F7F8FA]">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
            {rest.map((post) => (
              <article key={post.id} className="group bg-white rounded-2xl overflow-hidden border border-[#001F3F]/6 hover:border-[#C5A023]/40 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#001F3F]/50 to-transparent" />
                  <span className="absolute top-3 right-3 bg-[#C5A023] text-[#001F3F] text-[9px] font-black px-2.5 py-0.5 rounded-full">{post.tag}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[#C5A023] text-[10px] font-black tracking-widest uppercase mb-2">{post.category}</span>
                  <h3 className="font-black text-[#001F3F] text-sm leading-snug mb-3 flex-1">{post.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground mt-auto">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="mt-3 text-center text-xs font-black text-[#001F3F] hover:text-[#C5A023] flex items-center justify-center gap-1 group/btn transition-colors">
                    اقرأ المزيد <ArrowLeft className="w-3 h-3 group-hover/btn:-translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="py-20 bg-[#001F3F]">
        <div className="container mx-auto px-4 text-center">
          <Tag className="w-8 h-8 text-[#C5A023] mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">لا تفوّت أي مقال جديد</h2>
          <p className="text-white/60 text-sm mb-8 max-w-lg mx-auto">اشترك في نشرتنا البريدية وستصلك أحدث المقالات الهندسية مباشرة إلى بريدك.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input type="email" placeholder="بريدك الإلكتروني" className="flex-1 rounded-full px-5 py-3 text-sm outline-none bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-[#C5A023]" />
            <button className="bg-[#C5A023] hover:bg-[#d4ad2a] text-[#001F3F] font-black text-sm px-6 py-3 rounded-full transition-all hover:scale-105 whitespace-nowrap">اشترك الآن</button>
          </div>
        </div>
      </section>
    </main>
  )
}
