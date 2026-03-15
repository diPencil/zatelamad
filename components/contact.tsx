"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="relative py-20 md:py-28 bg-[#F7F8FA] overflow-hidden" id="contact">
      <div className="absolute inset-0 z-0">
        <img
          src="/construction-blueprint-architectural-plans.jpg"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">

        {/* headline */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A023]/10 border border-[#C5A023]/20 text-[#C5A023] text-xs font-bold tracking-widest uppercase mb-4">
            ابدأ مشروعك معنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#001F3F]">
            تواصل <span className="text-[#C5A023]">معنا</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto leading-relaxed">
            نحن جاهزون لتنفيذ مشروعك القادم — أرسل لنا تفاصيله وسيتواصل معك فريقنا في أقرب وقت.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-0 max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl">

          {/* ── Left: Contact Info ── */}
          <div className="lg:col-span-2 bg-[#001F3F] p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#C5A023]/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#C5A023]" />
                </div>
                <h3 className="text-white font-black text-lg">معلومات التواصل</h3>
              </div>

              <div className="space-y-5">
                <a
                  href="mailto:info@zatelamad.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A023]/50 hover:bg-white/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C5A023]/15 flex items-center justify-center shrink-0 group-hover:bg-[#C5A023] transition-colors">
                    <Mail className="w-5 h-5 text-[#C5A023] group-hover:text-[#001F3F]" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs mb-0.5">البريد الإلكتروني</p>
                    <p className="text-white font-bold text-sm group-hover:text-[#C5A023] transition-colors">info@zatelamad.com</p>
                  </div>
                </a>

                <a
                  href="tel:+201023610692"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A023]/50 hover:bg-white/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C5A023]/15 flex items-center justify-center shrink-0 group-hover:bg-[#C5A023] transition-colors">
                    <Phone className="w-5 h-5 text-[#C5A023] group-hover:text-[#001F3F]" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs mb-0.5">رقم الهاتف</p>
                    <p className="text-white font-bold text-sm group-hover:text-[#C5A023] transition-colors" dir="ltr">+20 10 23610692</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#C5A023]/15 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#C5A023]" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs mb-0.5">العنوان</p>
                    <p className="text-white font-bold text-sm">البوابة الأولى، عمارة 123ز، شارع 1، حدائق الأهرام، الجيزة</p>
                  </div>
                </div>
              </div>
            </div>

            {/* decorative corner */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white/40 text-xs leading-relaxed">
                ساعات العمل: الأحد – الخميس<br />من 9 صباحاً حتى 5 مساءً
              </p>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="lg:col-span-3 bg-white p-8 md:p-10">
            <h3 className="text-[#001F3F] font-black text-xl mb-7">أرسل لنا رسالة</h3>
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#001F3F]/60 tracking-wide">الاسم</label>
                  <input
                    type="text"
                    placeholder="اسمك الكامل"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#001F3F]/12 bg-[#F7F8FA] text-[#001F3F] text-sm placeholder:text-[#001F3F]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A023]/40 focus:border-[#C5A023] transition-all text-right"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#001F3F]/60 tracking-wide">البريد الإلكتروني</label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#001F3F]/12 bg-[#F7F8FA] text-[#001F3F] text-sm placeholder:text-[#001F3F]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A023]/40 focus:border-[#C5A023] transition-all text-right"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#001F3F]/60 tracking-wide">رقم الهاتف</label>
                <input
                  type="tel"
                  placeholder="01xxxxxxxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#001F3F]/12 bg-[#F7F8FA] text-[#001F3F] text-sm placeholder:text-[#001F3F]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A023]/40 focus:border-[#C5A023] transition-all text-right"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#001F3F]/60 tracking-wide">رسالتك</label>
                <textarea
                  placeholder="اكتب تفاصيل مشروعك أو استفسارك هنا..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-[#001F3F]/12 bg-[#F7F8FA] text-[#001F3F] text-sm placeholder:text-[#001F3F]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A023]/40 focus:border-[#C5A023] transition-all resize-none text-right"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#001F3F] text-white font-black text-sm tracking-wide hover:bg-[#C5A023] hover:text-[#001F3F] transition-all duration-300 group"
              >
                إرسال الرسالة
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

