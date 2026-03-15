"use client"

import * as React from "react"

export function StatsBar() {
  const stats = [
    { label: "سنوات الخبرة", val: "+10" },
    { label: "مشروع مكتمل", val: "+50" },
    { label: "مهندس وخبير", val: "+25" },
    { label: "شريك نجاح", val: "100%" },
  ]

  return (
    <section className="bg-[#001F3F] border-b border-white/5 py-10 lg:py-16 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#C5A023] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#C5A023] rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center justify-center text-center lg:border-l last:border-l-0 border-white/10 px-6 group"
            >
              <div className="relative mb-2">
                <span className="text-4xl lg:text-5xl font-black text-[#C5A023] tracking-tighter transition-all group-hover:scale-110 block">
                  {stat.val}
                </span>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#C5A023]/20 rounded-full" />
              </div>
              <span className="text-xs lg:text-sm text-white/60 font-black uppercase tracking-[0.2em] mt-3">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
