import Image from "next/image"

const stats = [
  { value: "37", label: "Years of Excellence" },
  { value: "200+", label: "Curated Labels" },
  { value: "12", label: "Wine Regions" },
  { value: "50K+", label: "Happy Customers" },
]

export function Story() {
  return (
    <section id="story" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/images/vineyard.jpg"
              alt="Sweeping vineyard landscape at golden hour"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Our Story
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-foreground md:text-5xl text-balance">
              A tradition of artisanal winemaking
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Founded in 1987, Maison du Vin has been dedicated to sourcing the
              world&apos;s most exceptional wines. Our relationships with
              family-owned vineyards across France, Italy, and beyond allow us
              to offer selections that can&apos;t be found anywhere else.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every bottle in our collection tells a story of terroir,
              craftsmanship, and generations of passion. We believe great wine is
              not just a beverage &mdash; it&apos;s an experience that connects
              people to the land and to each other.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl text-primary">{stat.value}</p>
                  <p className="mt-1 text-xs tracking-wide text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
