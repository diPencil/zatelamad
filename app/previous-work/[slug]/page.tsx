import { redirect } from "next/navigation"
import { projectsData } from "@/lib/projects-data"

export function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }))
}

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  redirect(`/projects-samples/${slug}`)
}
