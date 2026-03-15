"use client"

import { Suspense, useMemo, useState, useEffect } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ArrowRight, FolderOpen, Images, Play, Video, X, Eye } from "lucide-react"
import AlbumTools from "@/components/album-tools"

type MediaType = "image" | "video"

interface MediaItem {
  src: string
  type: MediaType
  caption: string
}

interface Album {
  name: string
  cover: string
  media: MediaItem[]
}

function toAssetPath(path: string) {
  // We use decodeURI then encodeURI to ensure it's consistently formatted
  return encodeURI(decodeURI(path))
}

function buildJpgSeries(folder: string, base: string, count: number): MediaItem[] {
  return Array.from({ length: count }, (_, i) => {
    const n = i + 1
    const src = toAssetPath(`/${folder}/${base} (${n}).jpg`)
    return { src, type: "image" as const, caption: `صورة ${n}` }
  })
}

const albums: Album[] = [
  {
    name: "موقع الغابه حدايق اكتوبر عقد ٣١",
    cover: toAssetPath("/موقع الغابه حدايق اكتوبر عقد ٣١/موقع الغابه حدايق اكتوبر عقد ٣١ (1).jpg"),
    media: buildJpgSeries("موقع الغابه حدايق اكتوبر عقد ٣١", "موقع الغابه حدايق اكتوبر عقد ٣١", 7),
  },
  {
    name: "موقع ال٩ عمارات الاسكان الاخضر قطاع (ج) موقع ٩١٥ و ٩١٦ و ٩٦٥",
    cover: toAssetPath("/موقع ال٩ عمارات الاسكان الاخضر قطاع (ج) موقع ٩١٥ و ٩١٦ و ٩٦٥/موقع-ال٩-عمارات-الاسكان-الاخضر-قطاع-(ج)-موقع-٩١٥-و-٩١٦-و-٩٦٥--1.jpg"),
    media: Array.from({ length: 16 }, (_, i) => {
      const n = i + 1
      return {
        src: toAssetPath(`/موقع ال٩ عمارات الاسكان الاخضر قطاع (ج) موقع ٩١٥ و ٩١٦ و ٩٦٥/موقع-ال٩-عمارات-الاسكان-الاخضر-قطاع-(ج)-موقع-٩١٥-و-٩١٦-و-٩٦٥--${n}.jpg`),
        type: "image" as const,
        caption: `صورة ${n}`,
      }
    }),
  },
  {
    name: "موقع 7 عمارات غرب المطار قطاع ب موقع 664",
    cover: toAssetPath("/موقع 7 عمارات غرب المطار قطاع ب موقع 664/موقع 7 عمارات غرب المطار قطاع ب موقع 664 (1).jpg"),
    media: buildJpgSeries("موقع 7 عمارات غرب المطار قطاع ب موقع 664", "موقع 7 عمارات غرب المطار قطاع ب موقع 664", 10),
  },
  {
    name: "مشروع الخدمات وموقع ٥ استكمال المعراج م. محمود البهنسي",
    cover: toAssetPath("/مشروع الخدمات وموقع ٥ استكمال المعراج م. محمود البهنسي/مشروع الخدمات وموقع ٥ استكمال المعراج م. محمود البهنسي (1).jpg"),
    media: buildJpgSeries("مشروع الخدمات وموقع ٥ استكمال المعراج م. محمود البهنسي", "مشروع الخدمات وموقع ٥ استكمال المعراج م. محمود البهنسي", 19),
  },
]

function GalleryContent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [tab, setTab] = useState<"all" | "photos" | "videos">("all")
  const [viewerIndex, setViewerIndex] = useState<number | null>(null)
  const [views, setViews] = useState<number[]>(() => Array(albums.length).fill(0))

  const selectedAlbumIdx = useMemo(() => {
    const albumParam = searchParams.get("album")
    if (!albumParam) return null
    const idx = parseInt(albumParam, 10) - 1
    return (!Number.isNaN(idx) && idx >= 0 && idx < albums.length) ? idx : null
  }, [searchParams])

  const activeAlbum = selectedAlbumIdx !== null ? albums[selectedAlbumIdx] : null

  const handleSelectAlbum = (idx: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("album", String(idx + 1))
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
    // optimistically update visible view count on the album card
    setViews((v) => {
      const next = v.slice()
      next[idx] = (next[idx] || 0) + 1
      return next
    })
    setTab("all")
    setViewerIndex(null)
  }

  const handleBackToAlbums = () => {
    router.push(pathname, { scroll: false })
    setTab("all")
    setViewerIndex(null)
  }

  const photosCount = activeAlbum?.media.filter((m) => m.type === "image").length ?? 0
  const videosCount = activeAlbum?.media.filter((m) => m.type === "video").length ?? 0

  // load stored view counts for album cards on mount
  useEffect(() => {
    try {
      const arr = albums.map((a) => parseInt(localStorage.getItem(`zat_album_visits_${encodeURIComponent(a.name)}`) || "0", 10) || 0)
      setViews(arr)
    } catch {
      // ignore localStorage failures
    }
  }, [])

  const filteredMedia = useMemo(() => {
    if (!activeAlbum) return [] as MediaItem[]
    if (tab === "all") return activeAlbum.media
    if (tab === "photos") return activeAlbum.media.filter((m) => m.type === "image")
    return activeAlbum.media.filter((m) => m.type === "video")
  }, [activeAlbum, tab])

  return (
    <main className="min-h-screen">
      <section className="relative pt-36 lg:pt-52 pb-16 bg-[#001F3F] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/Zatproject (5).jpeg" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-[#001F3F]/60 to-[#001F3F]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-[#C5A023] mb-4">معرض المشروعات</h1>
          <p className="text-white/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            اختر المشروع كألبوم ثم افتح معرض الصور/الفيديو الخاص به مثل جاليري الموبايل.
          </p>
        </div>
      </section>

      {selectedAlbumIdx === null ? (
        <section className="py-12 bg-[#F7F8FA]">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {albums.map((album, i) => {
                const photos = album.media.filter((m) => m.type === "image").length
                const videos = album.media.filter((m) => m.type === "video").length
                return (
                  <button
                    key={album.name}
                    onClick={() => handleSelectAlbum(i)}
                    className="group text-right bg-white rounded-3xl overflow-hidden border border-[#001F3F]/10 hover:border-[#C5A023]/40 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className="relative aspect-4/3 overflow-hidden">
                      <img src={album.cover} alt={album.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-linear-to-t from-[#001F3F]/80 via-[#001F3F]/20 to-transparent" />
                      <div className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-[#C5A023] px-3 py-1 text-[#001F3F] text-[10px] font-black">
                        <FolderOpen className="w-3.5 h-3.5" /> ألبوم
                      </div>
                      <div className="absolute bottom-3 right-3 left-3">
                        <h3 className="text-white text-sm font-black leading-snug line-clamp-2">{album.name}</h3>
                      </div>
                    </div>

                    <div className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs font-bold text-[#001F3F]/70">
                        <span className="inline-flex items-center gap-1">
                          <Images className="w-3.5 h-3.5 text-[#C5A023]" /> {photos}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Video className="w-3.5 h-3.5 text-[#C5A023]" /> {videos}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5 text-[#C5A023]" /> {views[i] ?? 0}
                        </span>
                      </div>
                      <span className="text-[#001F3F] text-xs font-black group-hover:text-[#C5A023] transition-colors">فتح الألبوم</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </section>
      ) : activeAlbum && (
        <section className="py-10 bg-[#F7F8FA]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-wrap gap-3 items-center justify-between mb-6">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleBackToAlbums}
                  className="inline-flex items-center gap-2 bg-[#001F3F] hover:bg-[#C5A023] text-white hover:text-[#001F3F] rounded-full px-5 py-2.5 text-sm font-black transition-all"
                >
                  <ArrowRight className="w-4 h-4" /> الرجوع لكل الألبومات
                </button>

                <div className="inline-flex bg-white border border-[#001F3F]/10 rounded-full p-1 gap-1">
                  <button onClick={() => setTab("all")} className={`px-4 py-2 rounded-full text-xs font-black transition-all ${tab === "all" ? "bg-[#001F3F] text-white" : "text-[#001F3F]/70"}`}>
                    الكل ({activeAlbum.media.length})
                  </button>
                  <button onClick={() => setTab("photos")} className={`px-4 py-2 rounded-full text-xs font-black transition-all ${tab === "photos" ? "bg-[#001F3F] text-white" : "text-[#001F3F]/70"}`}>
                    الصور ({photosCount})
                  </button>
                  <button onClick={() => setTab("videos")} className={`px-4 py-2 rounded-full text-xs font-black transition-all ${tab === "videos" ? "bg-[#001F3F] text-white" : "text-[#001F3F]/70"}`}>
                    الفيديو ({videosCount})
                  </button>
                </div>
              </div>

              <AlbumTools
                albumName={activeAlbum.name}
                shareUrl={typeof window !== "undefined" ? `${window.location.origin}${pathname}?album=${selectedAlbumIdx + 1}` : `${pathname}?album=${selectedAlbumIdx + 1}`}
              />
            </div>

            <h2 className="text-xl md:text-2xl font-black text-[#001F3F] mb-6">{activeAlbum.name}</h2>

            {filteredMedia.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {filteredMedia.map((item, i) => (
                  <button
                    key={`${item.src}-${i}`}
                    onClick={() => setViewerIndex(i)}
                    className="group relative aspect-square rounded-2xl overflow-hidden bg-black/5 shadow hover:shadow-xl transition-all"
                  >
                    {item.type === "image" ? (
                      <img src={item.src} alt={item.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    ) : (
                      <video src={item.src} className="w-full h-full object-cover" muted />
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-[#001F3F]/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="w-12 h-12 rounded-full bg-[#C5A023] text-[#001F3F] flex items-center justify-center shadow-xl">
                          <Play className="w-5 h-5 fill-[#001F3F] ml-0.5" />
                        </span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[#001F3F]/20 p-10 text-center text-muted-foreground bg-white">
                لا توجد عناصر في هذا التبويب حالياً.
              </div>
            )}
          </div>
        </section>
      )}

      {activeAlbum && viewerIndex !== null && filteredMedia[viewerIndex] && (
        <div className="fixed inset-0 bg-black/90 z-300 p-4 flex items-center justify-center" onClick={(e) => e.target === e.currentTarget && setViewerIndex(null)}>
          <button onClick={() => setViewerIndex(null)} className="absolute top-6 left-6 text-white/70 hover:text-white transition-colors">
            <X className="w-8 h-8" />
          </button>

          <div className="w-full max-w-5xl">
            {filteredMedia[viewerIndex].type === "image" ? (
              <img src={filteredMedia[viewerIndex].src} alt={filteredMedia[viewerIndex].caption} className="w-full max-h-[80vh] object-contain rounded-2xl" />
            ) : (
              <video src={filteredMedia[viewerIndex].src} controls autoPlay className="w-full max-h-[80vh] object-contain rounded-2xl bg-black" />
            )}

            <div className="flex items-center justify-between mt-4 text-white/80 text-sm">
              <button
                onClick={() => setViewerIndex((v) => (v && v > 0 ? v - 1 : v))}
                disabled={viewerIndex === 0}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 transition-colors"
              >
                السابق
              </button>
              <span>{viewerIndex + 1} / {filteredMedia.length}</span>
              <button
                onClick={() => setViewerIndex((v) => (v !== null && v < filteredMedia.length - 1 ? v + 1 : v))}
                disabled={viewerIndex === filteredMedia.length - 1}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 transition-colors"
              >
                التالي
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default function ProjectsGalleryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#001F3F] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#C5A023] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <GalleryContent />
    </Suspense>
  )
}
