import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-wine.jpg"
          alt="Elegant wine arrangement on rustic table"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-secondary/80">
          Curated Since 1987
        </p>
        <h1 className="font-serif text-5xl leading-tight tracking-tight text-secondary md:text-7xl lg:text-8xl text-balance">
          Exceptional wines, timeless craft
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-secondary/80">
          Discover our handpicked collection of rare and exceptional wines from
          the world&apos;s most celebrated vineyards.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-sm tracking-wide"
            asChild
          >
            <a href="#collection">
              Explore Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-secondary/30 bg-transparent text-secondary hover:bg-secondary/10 hover:text-secondary px-8 py-6 text-sm tracking-wide"
            asChild
          >
            <a href="#story">Our Story</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
