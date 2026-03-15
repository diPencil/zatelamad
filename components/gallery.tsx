"use client"

import * as React from "react"
import { Play } from "lucide-react"
import { cn } from "@/lib/utils"

const galleryItems = [
  { type: "image", src: "/images/Zatproject (2).jpeg", title: "موقع أكتوبر الجديدة" },
  { type: "image", src: "/images/Zatproject (4).jpeg", title: "مشروع الـ 800 فدان" },
  { type: "video", src: "/images/Zatproject (6).jpeg", title: "جولة في المنشآت التعليمية" },
  { type: "image", src: "/images/Zatproject (8).jpeg", title: "واجهة معمارية حديثة" },
  { type: "image", src: "/images/Zatproject (10).jpeg", title: "أعمال التشطيبات النهائية" },
  { type: "video", src: "/images/Zatproject (12).jpeg", title: "فيديو من أرض الواقع" },
]

export function Gallery() {
  const [filter, setFilter] = React.useState("all")

  const filteredItems = galleryItems.filter(item => 
    filter === "all" ? true : item.type === filter
  )

  return (
    <section className="py-24 bg-white dark:bg-zinc-950" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#001F3F] dark:text-white">معرض <span className="text-[#C5A023]">الوسائط</span></h2>
            <div className="w-24 h-1 bg-[#C5A023] mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              لمحات حية من مواقع العمل توثق دقة التنفيذ ومراحل التطور في مشاريعنا المختلفة.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => setFilter("all")}
              className={cn(
                "px-8 py-3 rounded-xl font-bold transition-all duration-300 border-2 text-sm",
                filter === "all" 
                  ? "bg-[#001F3F] border-[#001F3F] text-white shadow-lg" 
                  : "bg-transparent border-zinc-200 text-[#001F3F] hover:border-[#C5A023] hover:text-[#C5A023] dark:border-zinc-800 dark:text-zinc-400"
              )}
            >
              كل الوسائط
            </button>
            <button
              onClick={() => setFilter("image")}
              className={cn(
                "px-8 py-3 rounded-xl font-bold transition-all duration-300 border-2 text-sm",
                filter === "image" 
                  ? "bg-[#001F3F] border-[#001F3F] text-white shadow-lg" 
                  : "bg-transparent border-zinc-200 text-[#001F3F] hover:border-[#C5A023] hover:text-[#C5A023] dark:border-zinc-800 dark:text-zinc-400"
              )}
            >
              الصور
            </button>
            <button
              onClick={() => setFilter("video")}
              className={cn(
                "px-8 py-3 rounded-xl font-bold transition-all duration-300 border-2 text-sm",
                filter === "video" 
                  ? "bg-[#001F3F] border-[#001F3F] text-white shadow-lg" 
                  : "bg-transparent border-zinc-200 text-[#001F3F] hover:border-[#C5A023] hover:text-[#C5A023] dark:border-zinc-800 dark:text-zinc-400"
              )}
            >
              الفيديوهات
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={`${filter}-${index}`} 
              className="group relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 animate-in fade-in zoom-in duration-500"
            >
              <img
                src={item.src}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                {item.type === "video" && (
                  <div className="relative flex items-center justify-center">
                    {/* Pulsating Ripple Rings */}
                    <div className="absolute w-20 h-20 rounded-full bg-[#C5A023]/30 animate-ping" />
                    <div className="absolute w-16 h-16 rounded-full bg-[#C5A023]/50 animate-pulse" />
                    
                    {/* Main Play Button */}
                    <div className="relative w-16 h-16 rounded-full bg-[#C5A023] flex items-center justify-center text-[#001F3F] shadow-2xl transform transition-transform duration-500 group-hover:scale-110">
                      <Play className="fill-current w-8 h-8 mr-1" />
                    </div>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-linear-to-t from-black/60 to-transparent">
                  <p className="text-white font-bold text-lg">{item.title}</p>
                </div>
              </div>
              {item.type === "video" && (
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded tracking-widest uppercase">
                  VIDEO
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

