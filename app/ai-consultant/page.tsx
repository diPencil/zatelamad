"use client"

import { useState, useRef, useEffect } from "react"
import { Bot, Send, ArrowLeft, Sparkles, Command, RotateCcw, Clock, ExternalLink, Copy, ThumbsUp, ThumbsDown, Share2 } from "lucide-react"
import { LottieIcon } from "@/components/lottie-icon"
import Link from "next/link"
import { FormattedText } from "@/components/formatted-text"
import { useToast } from "@/hooks/use-toast"

interface Message {
  role: "user" | "bot"
  text: string
  timestamp: Date
}

const INITIAL_SUGGESTIONS = [
  "ما هي خطوات البدء في بناء منزل؟",
  "كيف يتم تسعير أعمال المقاولات؟",
  "أريد استشارة حول عزل الأسطح",
  "ما هي أنواع التشطيبات المتاحة؟",
]

export default function AIConsultantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "مرحباً بك في منصة ذات العماد للاستشارات الذكية. أنا مساعدك الهندسي من شركة ذات العماد للمقاولات العموميه، كيف يمكنني خدمتك اليوم؟",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [likedMessages, setLikedMessages] = useState<Record<number, boolean>>({})
  const [dislikedMessages, setDislikedMessages] = useState<Record<number, boolean>>({})
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const handleSend = async (text: string) => {
    if (!text.trim() || isTyping) return

    const userMessage: Message = { role: "user", text, timestamp: new Date() }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      })

      const data = await response.json()
      
      const botMessage: Message = {
        role: "bot",
        text: data.text || data.error || "عذراً، حدث خطأ ما. يرجى المحاولة مرة أخرى.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Chat Error:", error)
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "عذراً، لا يمكنني الاتصال بالخادم الآن. يرجى التأكد من اتصالك بالإنترنت.", timestamp: new Date() },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  const resetChat = () => {
    setMessages([
      {
        role: "bot",
        text: "مرحباً بك في منصة ذات العماد للاستشارات الذكية. أنا مساعدك الهندسي من شركة ذات العماد للمقاولات العموميه، كيف يمكنني خدمتك اليوم؟",
        timestamp: new Date(),
      },
    ])
  }

  const handleAction = (type: string, text: string, index: number) => {
    if (type === 'copy') {
      navigator.clipboard.writeText(text)
      toast({
        title: "تم النسخ",
        description: "تم نسخ النص إلى الحافظة بنجاح",
      })
    } else if (type === 'share') {
      if (navigator.share) {
        navigator.share({
          title: 'استشارة هندسية من ذات بوت',
          text: text,
          url: window.location.href,
        })
      } else {
        navigator.clipboard.writeText(text)
        toast({
          title: "تم نسخ الرابط",
          description: "خاصية المشاركة غير مدعومة، تم نسخ النص بدلاً من ذلك",
        })
      }
    } else if (type === 'like') {
      setLikedMessages(prev => ({ ...prev, [index]: !prev[index] }))
      setDislikedMessages(prev => ({ ...prev, [index]: false }))
      if (!likedMessages[index]) {
        toast({
          title: "شكراً لك",
          description: "تم تسجيل إعجابك بالرد",
        })
      }
    } else if (type === 'dislike') {
      setDislikedMessages(prev => ({ ...prev, [index]: !prev[index] }))
      setLikedMessages(prev => ({ ...prev, [index]: false }))
      if (!dislikedMessages[index]) {
        toast({
          title: "نعتذر عن ذلك",
          description: "سنحاول تحسين جودة الردود مستقبلاً",
        })
      }
    }
  }

  return (
    <div className="h-screen overflow-hidden bg-[#050505] text-white flex flex-col font-cairo">
      {/* Header */}
      <header className="h-20 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl sticky top-0 z-50 flex items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-4">
          <Link href="/" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group">
            <ArrowLeft className="w-5 h-5 text-white/60 group-hover:text-white" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center overflow-visible">
              <LottieIcon className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-lg font-black leading-tight flex items-center gap-2">
                ذات بوت 
                <span className="hidden sm:inline-block text-[13px] text-white/80 font-medium whitespace-nowrap pt-1">تم التطوير بواسطة سوبر فيليز AI</span>
                <span className="text-[9px] sm:text-[10px] bg-white/10 px-2 py-0.5 rounded-full text-white/40 font-bold uppercase tracking-widest">Live AI</span>
              </h1>
              <p className="text-[11px] text-white/30 font-medium flex items-center gap-2">
              <span className="opacity-50"><Command className="w-3 h-3" /></span>
              مدعوم بمحرك سوبر فيليز 1.0
            </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-6 text-white/40 text-xs">
          <div className="hidden lg:flex items-center gap-2">
            <Command className="w-3.5 h-3.5" />
            <span>مدعوم بمحرك سوبر فيليز 1.0</span>
          </div>
          <button 
            onClick={resetChat}
            className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-xs font-bold text-white shadow-lg"
            title="جلسة جديدة"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden sm:inline">جلسة جديدة</span>
          </button>
        </div>
      </header>

      <div className="flex-1 container mx-auto max-w-5xl flex flex-col relative overflow-hidden">
        {/* Chat Area */}
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto pt-10 pb-36 px-4 space-y-8 scroll-smooth custom-scrollbar"
        >
          {messages.map((m, i) => (
            <div key={i} className={`flex w-full ${m.role === "user" ? "justify-start" : "justify-end"}`}>
              <div className="flex gap-3 md:gap-4 max-w-[90%] md:max-w-[70%]">
                {/* Avatar */}
                <div className={`shrink-0 flex items-center justify-center overflow-visible ${m.role === 'bot' ? 'w-6 h-6 md:w-8 md:h-8' : 'w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-lg'}`}>
                  {m.role === 'bot' ? <LottieIcon className="w-8 h-8 md:w-11 md:h-11" /> : <div className="text-[9px] md:text-[10px] font-black">أنت</div>}
                </div>

                {/* Content */}
                <div className="space-y-2">
                      <div className={`p-4 md:p-5 rounded-2xl leading-relaxed text-xs md:text-base whitespace-pre-wrap ${
                        m.role === 'user' 
                        ? 'bg-[#C5A023] text-[#001F3F] font-bold rounded-tr-none' 
                        : 'bg-white/5 border border-white/10 text-white/90 rounded-tr-none'
                      }`}>
                        {m.role === 'bot' && (
                          <div className="flex flex-col mb-3 text-right">
                            <span className="text-[11px] md:text-xs font-black text-[#C5A023] uppercase tracking-wider">فيليز الذكي</span>
                            <span className="text-[9px] md:text-[10px] text-white/30 font-medium mt-0.5">بدعم من بنسل استوديو</span>
                          </div>
                        )}
                    <FormattedText text={m.text} />
                  </div>
                  
                  {m.role === 'bot' && (
                    <div className="flex items-center gap-1.5 pt-1">
                      <button 
                        onClick={() => handleAction('copy', m.text, i)}
                        className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-white/30 hover:text-[#C5A023] transition-all"
                        title="نسخ النص"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => handleAction('like', m.text, i)}
                        className={`w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center transition-all ${likedMessages[i] ? 'text-green-500 bg-green-500/10' : 'text-white/30 hover:text-green-500'}`}
                        title="أعجبني"
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => handleAction('dislike', m.text, i)}
                        className={`w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center transition-all ${dislikedMessages[i] ? 'text-red-500 bg-red-500/10' : 'text-white/30 hover:text-red-500'}`}
                        title="لم يعجبني"
                      >
                        <ThumbsDown className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => handleAction('share', m.text, i)}
                        className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-white/30 hover:text-blue-500 transition-all"
                        title="مشاركة"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </button>
                      <div className="mr-auto hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/2">
                         <Sparkles className="w-3 h-3 text-[#C5A023]" />
                         <span className="text-[9px] font-bold text-white/30 uppercase tracking-tighter">تم التطوير بواسطة سوبر فيليز</span>
                      </div>
                    </div>
                  )}

                  <div className={`flex items-center gap-2 text-[10px] text-white/20 ${m.role === 'user' ? 'justify-end' : ''}`}>
                    <Clock className="w-3 h-3" />
                    {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-end">
              <div className="flex gap-4 max-w-[70%]">
                <div className="w-8 h-8 shrink-0 flex items-center justify-center overflow-visible">
                  <LottieIcon className="w-10 h-10" />
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl rounded-tr-none flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#C5A023] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-[#C5A023] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-[#C5A023] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Floating Input Area */}
        <div className="absolute bottom-0 inset-x-0 p-4 md:p-8 bg-linear-to-t from-[#050505] via-[#050505] to-transparent pointer-events-none">
          <div className="max-w-3xl mx-auto space-y-4 pointer-events-auto">
            {/* Quick Suggestions */}
            {messages.length <= 2 && !isTyping && (
              <div className="flex flex-wrap gap-2 justify-center pb-2">
                {INITIAL_SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSend(s)}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#C5A023]/40 hover:bg-[#C5A023]/5 text-xs text-white/60 hover:text-white transition-all active:scale-95"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input Bar */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-linear-to-r from-[#C5A023] to-[#001F3F] rounded-2xl blur opacity-10 group-focus-within:opacity-30 transition-opacity" />
              <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-2 flex items-center gap-2 shadow-2xl">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                  placeholder="اسأل عن مشروعك أو اطلب نصيحة هندسية..."
                  className="flex-1 bg-transparent px-3 md:px-4 py-3 outline-none text-xs md:text-sm placeholder:text-white/20 text-white"
                />
                <button 
                  onClick={() => handleSend(input)}
                  disabled={!input.trim() || isTyping}
                  className="w-12 h-12 rounded-xl bg-[#C5A023] flex items-center justify-center text-[#001F3F] shadow-lg shadow-[#C5A023]/20 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:scale-100 transition-all group/send"
                >
                  <Send className="w-5 h-5 group-hover:-translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Footer Text */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[8px] md:text-[10px] text-white/20 font-bold uppercase tracking-widest text-center">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#C5A023]" />
                <span>ذكاء اصطناعي حقيقي</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20 hidden md:block" />
              <div className="flex items-center gap-1.5">
                <span>شركة ذات العماد © 2026</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20 hidden md:block" />
              <Link href="https://dipencil.com" target="_blank" className="hover:text-[#C5A023] transition-colors flex items-center gap-1">
                بنسل استوديو <ExternalLink className="w-2.5 h-2.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
