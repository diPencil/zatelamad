import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "سابقة أعمالنا | إنجازات هندسية رائدة",
  description: "استعرض سابقة أعمال شركة ذات العماد للمقاولات العموميه. مشروعات سكينة وتجارية وبنية تحتية تعكس خبرتنا الممتدة لأكثر من 15 عاماً.",
}

export default function AchievementsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
