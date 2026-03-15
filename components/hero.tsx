"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

const HERO_STAGES = [
  {
    id: "01",
    title: "رؤية رائدة",
    badge: "روّاد التشييد والبناء الحديث",
    headline: <>نشيّد <span className="text-[#C5A023]">المستقبل</span> بلمسات هندسية</>,
    description: "خبرة هندسية تتجاوز الـ 10 سنوات في السوق المصري، نجمع بين عراقة التنفيذ وحداثة التصميم.",
    image: "/heroslider/Gemini_Generated_Image_irpsk0irpsk0irps.png"
  },
  {
    id: "02",
    title: "جودة عالمية",
    badge: "معايير دولية في التنفيذ",
    headline: <>دقة <span className="text-[#C5A023]">متناهية</span> في كل تفصيلة</>,
    description: "نلتزم بأعلى معايير الجودة العالمية لضمان سلامة واستدامة مشاريعنا الإنشائية الكبرى.",
    image: "/heroslider/Gemini_Generated_Image_lwys4ulwys4ulwys.png"
  },
  {
    id: "03",
    title: "التزام هندسي",
    badge: "فريق هندسي متكامل",
    headline: <>ابتكار <span className="text-[#C5A023]">حلول</span> إنشائية ذكية</>,
    description: "نطوع التكنولوجيا الحديثة لخدمة الهندسة المعمارية، لنقدم لعملائنا أفضل النتائج في أسرع وقت.",
    image: "/heroslider/Gemini_Generated_Image_vcfegjvcfegjvcfe.png"
  },
  {
    id: "04",
    title: "شراكة نجاح",
    badge: "شركاؤكم في البناء",
    headline: <>نبني <span className="text-[#C5A023]">ثقة</span> تدوم لأجيال</>,
    description: "علاقتنا بعملائنا تبدأ من أول حجر أساس وتستمر كشراكة نجاح حقيقية في كل مشروعاتهم.",
    image: "/heroslider/Gemini_Generated_Image_wdzyg1wdzyg1wdzy.png"
  }
]

export function Hero() {
  // overallProgress runs from 0 to 400 (100 for each of the 4 stages)
  const [overallProgress, setOverallProgress] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const durationPerStage = 5000 
    const interval = 30 
    const step = (interval / durationPerStage) * 100

    const timer = setInterval(() => {
      setOverallProgress((prev) => {
        const next = prev + step
        if (next >= 400) {
          setIsAnimating(true)
          setTimeout(() => setIsAnimating(false), 500)
          return 0
        }
        // Detect stage transition for animation trigger
        if (Math.floor(next / 100) !== Math.floor(prev / 100)) {
          setIsAnimating(true)
          setTimeout(() => setIsAnimating(false), 500)
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const currentStage = Math.floor(overallProgress / 100)
  const progressInCurrentStage = overallProgress % 100

  const getProgressBarWidth = () => {
    return `${(overallProgress / 400) * 100}%`
  }

  const stage = HERO_STAGES[currentStage]

  return (
    <section className="relative h-dvh flex items-center justify-center overflow-hidden">
      {/* Background with Overlay and Transitions */}
      <div className="absolute inset-0 z-0">
        {HERO_STAGES.map((s, idx) => (
          <div
            key={idx}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              currentStage === idx ? "opacity-100" : "opacity-0"
            )}
          >
            <img 
              src={s.image} 
              alt={s.title} 
              className={cn(
                "h-full w-full object-cover scale-105 transition-transform duration-5000 linear",
                currentStage === idx ? "scale-110" : "scale-105"
              )} 
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-linear-to-l from-[#001F3F] via-[#001F3F]/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content Area */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center text-white pt-24">
        <div className={cn(
          "max-w-3xl space-y-6 transition-opacity duration-1000 ease-in-out",
          isAnimating ? "opacity-0" : "opacity-100"
        )}>
          <div className="inline-flex items-center gap-3 px-5 py-2 border border-[#C5A023]/30 bg-[#C5A023]/10 backdrop-blur-md rounded-full text-[#C5A023] font-bold text-[11px] tracking-widest uppercase mb-2 animate-fade-in shadow-[0_0_15px_rgba(197,160,35,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A023]"></span>
            </span>
            {stage.badge}
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-[1.2] text-balance drop-shadow-2xl">
            {stage.headline}
          </h1>
          
          <p className="text-sm md:text-base text-white/90 max-w-3xl mx-auto leading-relaxed text-balance">
            {stage.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 no-print">
            <Button size="lg" className="bg-[#C5A023] hover:bg-white text-[#001F3F] px-6 py-4 text-sm font-bold rounded-lg shadow-2xl transition-all hover:scale-105 group" asChild>
              <a href="#projects">
                تصفح مشروعاتنا
                <ArrowLeft className="mr-3 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 backdrop-blur-md hover:bg-white/20 text-white border-white/30 px-6 py-4 text-sm font-bold rounded-lg transition-all"
              onClick={() => window.print()}
            >
              بروفايل الشركة (PDF)
            </Button>
          </div>
        </div>
      </div>

      {/* Right navigation removed per request (MISSION/VISION/VALUE/TARGET) */}

      {/* Hero Timeline Overlay */}
      <div className="absolute bottom-6 left-0 right-0 z-30 hidden lg:block no-print">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto relative h-16">
            
            {/* 1. Labels Row */}
            <div className="relative h-6 w-full">
              {HERO_STAGES.map((stage, idx) => (
                <div 
                  key={idx} 
                  className="absolute top-0 flex flex-col items-center whitespace-nowrap"
                  style={{ 
                    right: `${idx * 25}%`,
                    transform: 'translateX(50%)'
                  }}
                >
                  <span className={cn(
                    "text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-500",
                    currentStage === idx ? "text-[#C5A023]" : "text-white/40"
                  )}>
                    <span className="opacity-50 ml-2">{stage.id}.</span>
                    {stage.title}
                  </span>
                </div>
              ))}
            </div>

            {/* 2. Timeline Line & Dots Container */}
            <div className="relative h-[2px] w-full mt-2 flex items-center">
              {/* Baseline */}
              <div className="absolute inset-0 bg-white/10" />

              {/* Animated Progress Line */}
              <div 
                className="absolute right-0 top-0 h-full bg-[#C5A023] transition-all duration-100 ease-linear shadow-[0_0_15px_#C5A023]"
                style={{ 
                  width: getProgressBarWidth(),
                  maxWidth: '100%',
                  zIndex: 5
                }}
              />

              {/* Ticks Overlay */}
              <div className="absolute inset-0 flex justify-between px-0 pointer-events-none items-center z-10">
                {[...Array(41)].map((_, i) => (
                  <div key={i} className={cn("w-[1.5px] bg-white opacity-20", i % 10 === 0 ? "h-3" : "h-1.5")} />
                ))}
              </div>

              {/* Milestones (Dots) */}
              {HERO_STAGES.map((_, idx) => (
                <div 
                  key={idx} 
                  className="absolute top-1/2 flex items-center justify-center cursor-pointer group z-20"
                  style={{ 
                    right: `${idx * 25}%`,
                    transform: 'translate(50%, -50%)'
                  }}
                  onClick={() => setOverallProgress(idx * 100)}
                >
                  <div className={cn(
                    "w-4 h-4 rounded-full border-2 transition-all duration-500",
                    currentStage >= idx 
                      ? "bg-[#C5A023] border-[#C5A023] shadow-[0_0_20px_rgba(197,160,35,0.6)]" 
                      : "bg-[#001F3F] border-white/40",
                    currentStage === idx && "scale-125"
                  )}>
                    {currentStage === idx && (
                      <span className="absolute inset-0 rounded-full animate-ping bg-[#C5A023] opacity-40"></span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
