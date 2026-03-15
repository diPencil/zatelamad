import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "تواصل معنا | احصل على استشارة هندسية",
  description: "تواصل مع فريق ذات العماد للمقاولات العموميه لمناقشة مشروعك القادم. نحن هنا لخدمتكم وتقديم أفضل الحلول الإنشائية.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
