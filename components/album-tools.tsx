"use client"

import { useEffect, useMemo, useState } from "react"
import { Facebook, Linkedin, Instagram, Send, Copy, Users } from "lucide-react"

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/90" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/90" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
)

interface AlbumToolsProps {
  albumName: string
  shareUrl: string
}

export default function AlbumTools({ albumName, shareUrl }: AlbumToolsProps) {
  const [count, setCount] = useState(0)
  const [copied, setCopied] = useState(false)

  const encodedUrl = useMemo(() => encodeURIComponent(shareUrl), [shareUrl])
  const encodedTitle = useMemo(() => encodeURIComponent(albumName), [albumName])

  useEffect(() => {
    try {
      const key = `zat_album_visits_${encodeURIComponent(albumName)}`
      const current = parseInt(localStorage.getItem(key) || "0", 10) + 1
      localStorage.setItem(key, String(current))
      setCount(current)
    } catch {
      // ignore localStorage failures
    }
  }, [albumName])

  const open = (url: string) => window.open(url, "_blank", "noopener")

  const share = (network: string) => {
    if (network === "facebook") open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`)
    if (network === "twitter") open(`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`)
    if (network === "linkedin") open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`)
    if (network === "telegram") open(`https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`)
    if (network === "whatsapp") open(`https://api.whatsapp.com/send?text=${encodeURIComponent(albumName + " " + shareUrl)}`)
    if (network === "instagram") open("https://www.instagram.com/zatelamad/")
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // ignore copy failures
    }
  }

  const btnCls = "p-2 rounded-full hover:bg-white/15 transition-colors"

  return (
    <div className="flex items-center gap-3">
      <div className="inline-flex items-center gap-1.5 bg-[#001F3F] text-white rounded-full px-3 py-2">
        <Users className="w-3.5 h-3.5 text-[#C5A023]" />
        <span className="text-xs font-bold">{count}</span>
        <span className="text-xs text-white/60">زائر</span>
      </div>

      <div className="w-px h-5 bg-[#001F3F]/15 hidden sm:block" />

      <span className="hidden md:block text-[#001F3F]/50 text-xs">شارك:</span>

      <div className="inline-flex items-center gap-0.5 bg-[#001F3F] rounded-full px-2 py-1.5">
        <button onClick={() => share("facebook")} aria-label="Share on Facebook" className={btnCls}>
          <Facebook className="w-4 h-4 text-white/85" />
        </button>
        <button onClick={() => share("twitter")} aria-label="Share on X" className={btnCls}>
          <XIcon />
        </button>
        <button onClick={() => share("instagram")} aria-label="Share on Instagram" className={btnCls}>
          <Instagram className="w-4 h-4 text-white/85" />
        </button>
        <button onClick={() => share("whatsapp")} aria-label="Share on WhatsApp" className={btnCls}>
          <WhatsAppIcon />
        </button>
        <button onClick={() => share("telegram")} aria-label="Share on Telegram" className={btnCls}>
          <Send className="w-4 h-4 text-white/85" />
        </button>
        <button onClick={() => share("linkedin")} aria-label="Share on LinkedIn" className={btnCls}>
          <Linkedin className="w-4 h-4 text-white/85" />
        </button>
        <div className="w-px h-4 bg-white/15 mx-1" />
        <button onClick={copyLink} aria-label="Copy link" className={btnCls + " relative"}>
          <Copy className="w-4 h-4 text-white/85" />
          {copied && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#C5A023] text-[#001F3F] text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap">
              تم النسخ
            </span>
          )}
        </button>
      </div>
    </div>
  )
}
