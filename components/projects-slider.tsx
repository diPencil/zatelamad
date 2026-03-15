"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Link from "next/link"
import { projectsData } from "@/lib/projects-data"
import { ChevronRight, ChevronLeft, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "إسكان مميز – جهاز أكتوبر الجديدة",
    category: "إسكان فاخر",
    image: "/images/Zatproject (1).jpeg",
    description: "تنفيذ عمارات سكنية طبقًا للمواصفات الفنية المعتمدة للهيئة المهندسية.",
  },
  {
    title: "الإسكان الاجتماعي – 800 فدان",
    category: "مشروعات قومية",
    image: "/images/Zatproject (3).jpeg",
    description: "إدارة دقيقة للوقت والموارد في تنفيذ واحد من أكبر مشروعات الإسكان.",
  },
  {
    title: "مشروعات الخدمات العامة",
    category: "مباني خدمية",
    image: "/images/Zatproject (5).jpeg",
    description: "مجموعة متكاملة من المباني الخدمية تشمل مدارس ووحدات صحية.",
  },
  {
    title: "غرب المطار – المرحلة السادسة",
    category: "توسعات عمرانية",
    image: "/images/Zatproject (7).jpeg",
    description: "تنفيذ 7 عمارات سكنية كاملة وفق جدول زمني منضبط.",
  },
  {
    title: "تطوير العمارات السكنية",
    category: "ترميم وتطوير",
    image: "/images/Zatproject (9).jpeg",
    description: "استكمال تنفيذ عمارات الإسكان الاجتماعي بأعلى معايير الجودة.",
  },
]

export function ProjectsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    direction: "rtl",
    loop: true,
  })

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="py-24 bg-[#001F3F] text-white overflow-hidden" id="projects-slider">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A023]/10 border border-[#C5A023]/20 text-[#C5A023] text-xs font-bold tracking-wider uppercase">
              مشاريعنا
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black">إبداعات <span className="text-[#C5A023]">هندسية</span> متميزة</h2>
            <p className="text-white/60 max-w-xl text-lg">
              نستعرض مجموعة من أبرز مشاريعنا التي تجسد رؤيتنا في دقة التنفيذ وجمال التصميم.
            </p>
          </div>
          
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full border-white/10 bg-white/5 hover:bg-[#C5A023] hover:text-[#001F3F] transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full border-white/10 bg-white/5 hover:bg-[#C5A023] hover:text-[#001F3F] transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {projects.map((project, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6">
                <div className="group relative aspect-square rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Permanent subtle overlay for readability */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                  
                  {/* Stronger overlay on hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <span className="text-[#C5A023] font-black text-[10px] tracking-widest uppercase drop-shadow-sm">{project.category}</span>
                        <h3 className="text-xl md:text-2xl font-black leading-tight text-white drop-shadow-md">{project.title}</h3>
                      </div>
                      
                      {/* Description only on hover with slide-up effect */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 opacity-0 group-hover:opacity-100">
                        <div className="overflow-hidden">
                          <p className="text-white/80 text-xs md:text-sm line-clamp-2 drop-shadow-sm font-medium mt-2">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      <div className="pt-2">
                        {projectsData[index] ? (
                          <Link href={`/projects-samples/${projectsData[index].slug}`} className="text-[#C5A023] p-0 font-black group/btn text-sm md:text-base h-auto inline-flex items-center">
                            عرض التفاصيل
                            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover/btn:-translate-x-1" />
                          </Link>
                        ) : (
                          <Button variant="link" className="text-[#C5A023] p-0 font-black group/btn text-sm md:text-base h-auto">
                            عرض التفاصيل
                            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover/btn:-translate-x-1" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
