"use client"

import * as React from "react"
import { X, ZoomIn } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface GalleryGridProps {
  images: string[]
  title: string
  subtitle: string
}

export function GalleryGrid({ images, title, subtitle }: GalleryGridProps) {
  return (
    <section className="py-16 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-[#001F3F]" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="text-muted-foreground text-sm mt-2">{subtitle}</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-3">
          {/* Top Row: 4 columns on medium+, 2 on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {images.slice(0, 4).map((src, i) => (
              <GalleryItem key={i} src={src} height="h-44" />
            ))}
          </div>

          {/* Bottom Row: 3 columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {images.slice(4, 7).map((src, i) => (
              <GalleryItem key={i} src={src} height="h-40" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function GalleryItem({ src, height }: { src: string; height: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={cn("group relative rounded-2xl overflow-hidden cursor-pointer", height)}>
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-[#001F3F]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#001F3F] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <ZoomIn className="w-5 h-5" />
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden bg-transparent border-none shadow-none">
        <DialogTitle className="sr-only">Image Preview</DialogTitle>
        <div className="relative w-full h-full flex items-center justify-center outline-none">
          <img
            src={src}
            alt="Gallery Preview"
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          />
          <DialogClose className="absolute -top-12 right-0 p-2 text-white hover:text-[#C5A023] transition-colors outline-none">
            <X className="w-8 h-8" />
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}
