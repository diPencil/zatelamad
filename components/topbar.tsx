"use client"

import { Mail, Phone, Clock, MapPin } from "lucide-react"

export function Topbar() {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 bg-[#001F3F] text-white py-2 hidden lg:block border-b border-white/10 no-print">
      <div className="container mx-auto px-4 flex justify-between items-center text-[13px] font-medium">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#C5A023]" />
            <span dir="ltr">+20 10 23610692</span>
          </div>
          <div className="flex items-center gap-2 border-l border-white/20 pl-6 uppercase">
            <Mail className="w-3.5 h-3.5 text-[#C5A023]" />
            <span>info@zatelamad.com</span>
          </div>
          <div className="flex items-center gap-2 border-l border-white/20 pl-6">
            <Clock className="w-3.5 h-3.5 text-[#C5A023]" />
            <span>9:00 ص - 6:00 م</span>
          </div>
        </div>
        <div className="flex items-center gap-2 opacity-80">
          <MapPin className="w-3.5 h-3.5 text-[#C5A023]" />
          <span>البوابة الأولى، عمارة 123ز، شارع 1، حدائق الأهرام، الجيزة</span>
        </div>
      </div>
    </div>
  )
}
