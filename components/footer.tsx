"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUpLeft, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-[#001F3F] text-white pt-20 pb-10 overflow-hidden no-print">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C5A023]/5 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <img src="/zatlogowhite.png" alt="Zat Logo" className="h-16 w-auto" />
            </Link>
            <p className="text-white/60 leading-relaxed">
              شركة رائدة في مجال المقاولات العمومية والإنشاءات، نلتزم بتقديم أعلى معايير الجودة والاحترافية الهندسية في كافة مشروعاتنا القومية والخاصة.
            </p>
            <div className="flex gap-4">
              <Link 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-white/10 hover:bg-[#C5A023] hover:border-[#C5A023] transition-all group"
              >
                <Youtube className="w-5 h-5 group-hover:text-[#001F3F]" />
              </Link>
              <Link 
                href="https://www.facebook.com/zatelamadcom" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 hover:bg-[#C5A023] hover:border-[#C5A023] transition-all group"
              >
                <Facebook className="w-5 h-5 group-hover:text-[#001F3F]" />
                <span className="text-sm font-bold group-hover:text-[#001F3F]">تابعنا على فيسبوك</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              روابط سريعة
              <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-[#C5A023]" />
            </h4>
            <ul className="space-y-4">
              {[
                { name: "عن ذات العماد", href: "/about" },
                { name: "المدونة والأخبار", href: "/blog" },
                { name: "معرض المشروعات", href: "/projects-gallery" },
                { name: "الإنجازات", href: "/achievements" },
                { name: "خدماتنا المهنية", href: "/services" },
                { name: "تواصل معنا", href: "/contact" },
                { name: "سياسة الخصوصية", href: "/privacy" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/60 hover:text-[#C5A023] transition-colors flex items-center gap-2 group">
                    <ArrowUpLeft className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all font-bold" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              نطاق أعمالنا
              <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-[#C5A023]" />
            </h4>
            <ul className="space-y-4">
              {[
                { name: "المقاولات العمومية", href: "/services/construction" },
                { name: "التشطيبات الفاخرة", href: "/services/finishing" },
                { name: "البنية التحتية", href: "/services/infrastructure" },
                { name: "الأعمال الكهروميكانيكية", href: "/services/mep" },
                { name: "الترميم والتطوير", href: "/services/renovation" },
              ].map((service, i) => (
                <li key={i}>
                  <Link href={service.href} className="text-white/60 hover:text-[#C5A023] transition-colors flex items-center gap-2 group">
                    <ArrowUpLeft className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              بيانات التواصل
              <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-[#C5A023]" />
            </h4>
            <div className="space-y-6">
              <a 
                href="https://maps.app.goo.gl/SeSDComEaV39ZKq88" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-4 group/item"
              >
                <MapPin className="w-6 h-6 text-[#C5A023] shrink-0 group-hover/item:scale-110 transition-transform" />
                <p className="text-white/60 group-hover:text-[#C5A023] transition-colors leading-relaxed">البوابة الأولى، عمارة 123ز، شارع 1، حدائق الأهرام، الجيزة</p>
              </a>
              <a 
                href="tel:+201023610692" 
                className="flex items-center gap-4 text-lg font-bold group/item w-fit"
              >
                <Phone className="w-6 h-6 text-[#C5A023] shrink-0 group-hover/item:scale-110 transition-transform" />
                <span dir="ltr" className="group-hover:text-[#C5A023] transition-colors">+20 10 23610692</span>
              </a>
              <a 
                href="mailto:info@zatelamad.com" 
                className="flex items-center gap-4 group/item w-fit"
              >
                <Mail className="w-6 h-6 text-[#C5A023] shrink-0 group-hover/item:scale-110 transition-transform" />
                <span className="text-white/60 group-hover:text-[#C5A023] transition-colors">info@zatelamad.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} شركة ذات العماد للمقاولات العموميه. جميع الحقوق محفوظة.</p>
          <p>تصميم و تطوير بواسطة <a href="https://dipencil.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A023] font-bold">diPencil Studio</a></p>
        </div>
      </div>
    </footer>
  )
}
