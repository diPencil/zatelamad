"use client"

import { useState, useRef, useEffect } from "react"
import { Bot, Send, X, ChevronDown } from "lucide-react"
import { FormattedText } from "./formatted-text"
import { LottieIcon } from "./lottie-icon"

interface Message {
  role: "user" | "bot"
  text: string
}

const QUICK = [
  "ما هي خدمات ذات العماد؟",
  "كيف أطلب عرض سعر؟",
  "ما معايير الجودة التي تتبعونها؟",
  "هل تنفذون مشاريع خارج القاهرة؟",
]

export default function ZatBot() {
  const [open, setOpen] = useState(true)
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "مرحباً بك في منصة ذات العماد للاستشارات الذكية. أنا مساعدك الهندسي من شركة ذات العماد للمقاولات العموميه، كيف يمكنني خدمتك اليوم؟" },
  ])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [messages, typing])

  const API_URL = process.env.NEXT_PUBLIC_CHAT_API_URL || "/api/chat"

  const send = async (text: string) => {
    if (!text.trim() || typing) return
    const userMessage: Message = { role: "user", text }
    
    setInput("")
    setMessages((prev) => [...prev, userMessage])
    setTyping(true)

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      })

      const data = await response.json()
      
      const botMessage: Message = {
        role: "bot",
        text: data.text || data.error || "عذراً، حدث خطأ. يمكنك المحاولة لاحقاً.",
      }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Chat Error:", error)
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "عذراً، لا يمكنني الاتصال بالذكاء الاصطناعي الآن." },
      ])
    } finally {
      setTyping(false)
    }
  }

  return (
    <div className="rounded-2xl border border-[#001F3F]/10 bg-white shadow-sm overflow-hidden">
      {/* header */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-3 px-4 py-3.5 bg-[#001F3F] text-white"
      >
        <div className="w-8 h-8 flex items-center justify-center shrink-0 overflow-visible">
          <LottieIcon className="w-8 h-8" />
        </div>
        <div className="flex-1 text-right">
          <p className="text-sm font-black leading-none">ذات بوت</p>
          <p className="text-[10px] text-white/60 mt-0.5">مساعد ذكي • متاح الآن</p>
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-auto" />
        {open ? <ChevronDown className="w-4 h-4 text-white/60" /> : <ChevronDown className="w-4 h-4 text-white/60 rotate-180" />}
      </button>

      {open && (
        <>
          {/* messages */}
          <div ref={containerRef} className="h-64 overflow-y-auto p-4 space-y-3 bg-[#F7F8FA] scroll-smooth custom-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex w-full ${m.role === "user" ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[85%] flex flex-col gap-1 ${
                    m.role === "user" ? "items-start" : "items-end"
                  }`}
                >
                  {m.role === "bot" && (
                    <div className="flex items-center gap-1.5 mb-1 px-1">
                      <span className="text-[8px] font-bold text-[#C5A023] uppercase tracking-wider">فيليز الذكي</span>
                      <span className="text-[7px] text-[#001F3F]/40">| بنسل استوديو</span>
                    </div>
                  )}
                  <div
                    className={`rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed whitespace-pre-wrap shadow-sm ${
                      m.role === "user"
                        ? "bg-[#001F3F] text-white rounded-tr-none"
                        : "bg-white border border-[#001F3F]/8 text-[#001F3F]/85 rounded-tl-none"
                    }`}
                  >
                    <FormattedText text={m.text} />
                  </div>
                  {m.role === "bot" && (
                    <div className="flex items-center gap-2 mt-1 px-1 opacity-0 hover:opacity-100 transition-opacity">
                       <span className="text-[7px] text-[#001F3F]/30">تم التطوير بواسطة سوبر فيليز</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-end">
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-1.5 mb-1 px-1">
                    <span className="text-[8px] font-bold text-[#C5A023] uppercase tracking-wider">فيليز الذكي</span>
                  </div>
                  <div className="bg-white border border-[#001F3F]/8 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#001F3F]/40 animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#001F3F]/40 animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#001F3F]/40 animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* quick replies */}
          <div className="px-3 py-2 flex flex-wrap gap-1.5 border-t border-[#001F3F]/6 bg-white">
            {QUICK.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="text-[10px] font-bold border border-[#001F3F]/15 text-[#001F3F]/70 hover:bg-[#001F3F] hover:text-white hover:border-[#001F3F] rounded-full px-2.5 py-1 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* input */}
          <div className="flex items-center gap-2 px-3 py-2.5 border-t border-[#001F3F]/8 bg-white">
            <button
              onClick={() => send(input)}
              disabled={!input.trim() || typing}
              className="w-8 h-8 rounded-full bg-[#C5A023] disabled:opacity-40 flex items-center justify-center shrink-0 transition-opacity"
            >
              <Send className="w-3.5 h-3.5 text-[#001F3F]" />
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
              placeholder="اكتب سؤالك هنا..."
              className="flex-1 text-xs bg-[#F3F5F9] rounded-full px-3.5 py-2 outline-none placeholder:text-[#001F3F]/35 text-[#001F3F] border border-transparent focus:border-[#C5A023]/50"
            />
          </div>
        </>
      )}
    </div>
  )
}
