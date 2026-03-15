"use client"

import { Bot, MessageSquare, Sparkles, Send, HelpCircle, Zap, ShieldCheck, Cpu } from "lucide-react"
import { LottieIcon } from "./lottie-icon"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function AIConsultantCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with subtle AI-themed patterns */}
      <div className="absolute inset-0 bg-[#001F3F] -z-20" />
      <div className="absolute inset-0 opacity-20 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C5A023] rounded-full blur-[160px] opacity-20" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[120px] opacity-10" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden group">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 p-4 md:p-8 opacity-20 group-hover:opacity-40 transition-opacity">
             <LottieIcon className="w-32 h-32 md:w-48 md:h-48" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C5A023]/20 border border-[#C5A023]/30 text-[#C5A023] text-xs font-black tracking-widest uppercase">
                <Sparkles className="w-4 h-4" />
                تكنولوجيا المستقبل
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                  مستشارك <span className="text-[#C5A023]">الذكي</span> <br />
                  دائماً في خدمتك
                </h2>
                <p className="text-white/60 text-lg leading-relaxed max-w-md">
                  هل لديك استفسارات فنية؟ خبيرنا المدعوم بالذكاء الاصطناعي متواجد 24/7 ليقدم لك نصائح وحلول هندسية فورية لمشروعك.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/ai-consultant">
                  <Button className="h-14 px-7 bg-[#C5A023] hover:bg-[#A6861D] text-[#001F3F] font-black rounded-2xl text-base group/btn shadow-xl shadow-[#C5A023]/20 transition-all active:scale-95 flex items-center gap-2.5">
                    <span>ابدأ الاستشارة الآن</span>
                    <MessageSquare className="w-5 h-5 transition-transform group-hover/btn:-translate-x-1" />
                  </Button>
                </Link>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="h-14 px-7 rounded-2xl font-black border border-white/10 hover:bg-white/5 transition-all active:scale-95 text-white text-base flex items-center justify-center gap-2.5 group">
                      <span>كيف يعمل؟</span>
                      <HelpCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-[#001F3F] border-white/10 text-white max-w-xl rounded-3xl p-0 overflow-hidden">
                    <div className="relative p-6 md:p-8">
                      {/* Decorative Background for Modal */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A023]/10 blur-3xl -z-10" />
                      
                      <DialogHeader className="text-center md:text-right space-y-2 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-[#C5A023]/10 flex items-center justify-center mb-4 mx-auto md:mr-0">
                          <HelpCircle className="w-6 h-6 text-[#C5A023]" />
                        </div>
                        <DialogTitle className="text-xl md:text-2xl font-black text-white">
                          دليلك لاستخدام <span className="text-[#C5A023]">ذات بوت</span>
                        </DialogTitle>
                        <p className="text-white/60 text-xs leading-relaxed">
                          نحن نسخر الذكاء الاصطناعي لخدمتكم. هكذا يمكنك الاستفادة القصوى من خبراتنا الهندسية الفورية.
                        </p>
                      </DialogHeader>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          {
                            icon: MessageSquare,
                            title: "اسأل بوضوح",
                            desc: "يمكنك سؤاله عن تكاليف البناء، أنواع التشطيبات، أو حتى استشارات فنية."
                          },
                          {
                            icon: Zap,
                            title: "إجابات فورية",
                            desc: "تحليل أولي دقيق في ثوانٍ معدودة بناءً على آلاف البيانات الهندسية."
                          },
                          {
                            icon: ShieldCheck,
                            title: "دقة وموثوقية",
                            desc: "تعتمد الإجابات على معايير شركة ذات العماد، مما يضمن لك حلولاً واقعية."
                          },
                          {
                            icon: Cpu,
                            title: "تعلّم مستمر",
                            desc: "نظام سوبرفيليز المطور من بنسل يتعلم باستمرار لتقديم أفضل تجربة."
                          }
                        ].map((step, i) => (
                          <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-xl hover:border-[#C5A023]/30 transition-colors group/item">
                            <div className="w-8 h-8 rounded-lg bg-[#C5A023]/10 flex items-center justify-center mb-3 group-hover/item:bg-[#C5A023]/20 transition-colors">
                              <step.icon className="w-4 h-4 text-[#C5A023]" />
                            </div>
                            <h4 className="font-black text-sm text-white mb-1">{step.title}</h4>
                            <p className="text-[10px] text-white/50 leading-relaxed">{step.desc}</p>
                          </div>
                        ))}
                      </div>

                      <Link href="/ai-consultant" className="block">
                        <div className="mt-8 p-4 rounded-xl bg-[#C5A023] flex items-center justify-between group/cta cursor-pointer transition-transform hover:scale-[1.01]">
                          <div className="text-[#001F3F]">
                            <p className="font-black text-xs">هل أنت جاهز لتجربة المستقبل؟</p>
                            <p className="text-[10px] font-bold opacity-70">ابدأ محادثتك الأولى الآن</p>
                          </div>
                          <div className="w-8 h-8 flex items-center justify-center overflow-visible">
                            <LottieIcon className="w-10 h-10" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="relative">
              {/* Chat Simulation Visual */}
              <div className="bg-zinc-950/50 rounded-3xl border border-white/10 p-6 space-y-4 shadow-2xl backdrop-blur-md transform hover:-rotate-2 transition-transform duration-500">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C5A023] flex items-center justify-center shrink-0">
                    <Bot className="w-5 h-5 text-[#001F3F]" />
                  </div>
                  <div className="bg-white/10 p-4 rounded-2xl rounded-tr-none text-white text-sm max-w-[80%] leading-relaxed">
                    مرحباً بك في ذات العماد! كيف يمكنني مساعدتك في استشارتك الهندسية اليوم؟
                  </div>
                </div>
                
                <div className="flex gap-3 justify-end">
                  <div className="bg-[#C5A023]/80 p-4 rounded-2xl rounded-tl-none text-[#001F3F] text-sm max-w-[80%] font-bold">
                    أريد معرفة التكلفة التقريبية لبناء فيلا سكنية في أكتوبر الجديدة.
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C5A023] flex items-center justify-center shrink-0">
                    <Bot className="w-5 h-5 text-[#001F3F]" />
                  </div>
                  <div className="bg-white/10 p-4 rounded-2xl rounded-tr-none text-white text-sm max-w-[80%] space-y-2">
                    <p>بالتأكيد، يعتمد ذلك على المساحة ونوع التشطيب. دعنا نبدأ بتحديد التفاصيل...</p>
                    <div className="flex gap-1 pt-1">
                       <span className="w-1.5 h-1.5 bg-[#C5A023] rounded-full animate-bounce delay-100" />
                       <span className="w-1.5 h-1.5 bg-[#C5A023] rounded-full animate-bounce delay-200" />
                       <span className="w-1.5 h-1.5 bg-[#C5A023] rounded-full animate-bounce delay-300" />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex gap-2">
                  <div className="flex-1 bg-white/5 rounded-xl h-10 px-4 flex items-center text-white/30 text-xs">
                    اكتب سؤالك هنا...
                  </div>
                  <div className="w-10 h-10 bg-[#C5A023] rounded-xl flex items-center justify-center text-[#001F3F]">
                    <Send className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Decorative Floating Badges */}
              <div className="absolute -top-6 -right-6 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase opacity-50">الحالة</div>
                  <div className="text-xs font-black text-[#001F3F] dark:text-white">متاح الآن</div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Attribution Box - Centered at the bottom */}
          <div className="pt-12 mt-12 border-t border-white/5 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C5A023]" />
                <p className="text-white/80 text-sm font-bold">
                  ذات بوت مدعوم بتقنية الذكاء الاصطناعي <span className="text-[#C5A023]">سوبرفيليز</span>
                </p>
                <div className="w-1.5 h-1.5 rounded-full bg-[#C5A023]" />
              </div>
              <p className="text-white/40 text-xs leading-relaxed max-w-2xl">
                "فيليز" هو وكيل ذكاء اصطناعي خاص من <a href="https://dipencil.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#C5A023] transition-colors font-bold">بنسل استوديو</a>. جميع الحقوق محفوظة لشركة بنسل © 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
