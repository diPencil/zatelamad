"use client"

import { Contact } from "@/components/contact"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="relative pt-36 lg:pt-52 pb-20 bg-[#001F3F] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="/modern-construction-site-building-concrete-structu.jpg" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-black text-[#C5A023] mb-4">اتصل بنا</h1>
            <p className="text-white/70 text-base md:text-lg max-w-4xl md:max-w-5xl mx-auto leading-relaxed">نحن هنا للإجابة على استفساراتكم ومناقشة مشروعاتكم القادمة.</p>
        </div>
      </section>

      <Contact />

      {/* Map Section */}
      <section className="py-16 bg-[#F7F8FA]">
        <div className="container mx-auto px-4">

          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-[#001F3F]/10" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#C5A023]">موقعنا على الخريطة</span>
            <div className="h-px flex-1 bg-[#001F3F]/10" />
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#001F3F]/8 h-[460px] group">
            {/* grayscale lifted on hover */}
            <iframe
              src="https://maps.google.com/maps?q=29.97823,31.13042&z=17&hl=ar&output=embed"
              className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع ذات العماد - حدائق الأهرام"
            />
            {/* pin card overlay */}
            <a 
              href="https://maps.app.goo.gl/SeSDComEaV39ZKq88"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-5 right-5 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 max-w-[280px] border border-[#001F3F]/8 hover:border-[#C5A023]/50 hover:shadow-2xl transition-all group/pin z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-[#C5A023] flex items-center justify-center shrink-0 group-hover/pin:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#001F3F]">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-[#001F3F] font-black text-sm leading-tight group-hover/pin:text-[#C5A023] transition-colors">البوابة الأولى، عمارة 123ز</p>
                <p className="text-[#001F3F]/50 text-xs mt-0.5">شارع 1، حدائق الأهرام، الجيزة</p>
              </div>
            </a>
          </div>

        </div>
      </section>
    </main>
  )
}
