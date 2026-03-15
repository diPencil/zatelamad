import { Hero } from "@/components/hero"
import { StatsBar } from "@/components/stats-bar"
import { HomepageIntro } from "@/components/homepage-intro"
import { Services } from "@/components/services"
import { CompanyValues } from "@/components/company-values"
import { AIConsultantCTA } from "@/components/ai-consultant-cta"
import { ProjectsSlider } from "@/components/projects-slider"
import { Gallery } from "@/components/gallery"
import { Blog } from "@/components/blog"
import { WorkPreview } from "@/components/work-preview"
import { WorkDetails } from "@/components/work-details"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsBar />
      <HomepageIntro />
      <WorkDetails />
      <Services />
      <ProjectsSlider />
      <Gallery />
      <WorkPreview />
      <Blog />
      <CompanyValues />
      <AIConsultantCTA />
    </main>
  )
}


