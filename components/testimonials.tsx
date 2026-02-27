import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "An absolutely remarkable collection. The sommelier recommendations have never steered me wrong. My go-to for special occasions.",
    author: "Catherine L.",
    title: "Wine Enthusiast",
  },
  {
    quote:
      "Maison du Vin introduced me to bottles I would have never discovered on my own. The quality is consistently outstanding.",
    author: "Thomas R.",
    title: "Restaurant Owner",
  },
  {
    quote:
      "The attention to detail in their curation is unlike anything else. Every bottle feels like a personal discovery.",
    author: "Margaux D.",
    title: "Collector",
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Testimonials
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-foreground md:text-5xl text-balance">
            What our patrons say
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="flex flex-col rounded-lg border border-border bg-card p-8"
            >
              <Quote className="h-8 w-8 text-primary/30" />
              <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground italic">
                {`"${t.quote}"`}
              </p>
              <footer className="mt-6 border-t border-border pt-4">
                <p className="font-serif text-base text-card-foreground">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.title}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
