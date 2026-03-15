"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/blog-data"

const homePosts = blogPosts.slice(0, 3)

export function Blog() {
  return (
    <section className="py-24 bg-muted/30" id="blog">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="text-center md:text-right">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#001F3F]">المدونة <span className="text-[#C5A023]">والأخبار</span></h2>
            <p className="text-muted-foreground mt-4 text-lg">نشارككم المعرفة وأحدث التطورات في عالم الهندسة والبناء.</p>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="border-[#001F3F] text-[#001F3F] hover:bg-[#001F3F] hover:text-white font-bold px-8 py-6 rounded-xl transition-all">
              مشاهدة كل المقالات
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homePosts.map((post) => (
            <article key={post.slug} className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-xl border border-zinc-100 dark:border-zinc-800 transition-all hover:translate-y-[-10px]">
              <div className="aspect-16/10 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-[#C5A023]" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4 text-[#C5A023]" />
                    {post.author}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#001F3F] dark:text-white leading-tight line-clamp-2 hover:text-[#C5A023] transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="pt-4">
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center p-0 text-[#C5A023] font-bold group">
                    إقرأ المزيد
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
