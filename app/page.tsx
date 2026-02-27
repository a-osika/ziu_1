import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedWines } from "@/components/featured-wines"
import { Story } from "@/components/story"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedWines />
      <Story />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
