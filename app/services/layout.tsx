import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "خدماتنا الهندسية | حلول تشييد وبناء متكاملة",
  description: "نقدم في ذات العماد للمقاولات العموميه مجموعة شاملة من الخدمات: المقاولات العمومية، التشطيبات، البنية التحتية، والأعمال الكهروميكانيكية.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
