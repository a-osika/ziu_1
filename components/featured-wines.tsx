"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

const wines = [
  {
    name: "Chateau Margaux",
    year: "2018",
    type: "Red",
    region: "Bordeaux, France",
    price: "$189",
    image: "/images/wine-red.jpg",
    description: "Rich and full-bodied with notes of blackcurrant, cedar, and subtle oak.",
  },
  {
    name: "Domaine Leflaive",
    year: "2020",
    type: "White",
    region: "Burgundy, France",
    price: "$124",
    image: "/images/wine-white.jpg",
    description: "Elegant Chardonnay with minerality, citrus blossom, and a silky finish.",
  },
  {
    name: "Whispering Angel",
    year: "2022",
    type: "Ros\u00e9",
    region: "Provence, France",
    price: "$48",
    image: "/images/wine-rose.jpg",
    description: "Delicate and refreshing with hints of strawberry, peach, and fresh herbs.",
  },
  {
    name: "Dom P\u00e9rignon",
    year: "2015",
    type: "Sparkling",
    region: "Champagne, France",
    price: "$275",
    image: "/images/wine-sparkling.jpg",
    description: "Exquisite champagne with brioche, white flowers, and a persistent effervescence.",
  },
]

export function FeaturedWines() {
  return (
    <section id="collection" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Our Selection
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-foreground md:text-5xl text-balance">
            Featured Collection
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Each bottle is hand-selected by our team of expert sommeliers to bring
            you only the finest wines from renowned estates.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {wines.map((wine) => (
            <article
              key={wine.name}
              className="group cursor-pointer overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src={wine.image}
                  alt={`${wine.name} ${wine.year} - ${wine.type} wine from ${wine.region}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-sm bg-primary px-3 py-1 text-xs tracking-wide text-primary-foreground">
                  {wine.type}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-lg text-card-foreground">{wine.name}</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {wine.region} &middot; {wine.year}
                    </p>
                  </div>
                  <span className="font-serif text-lg text-primary">{wine.price}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {wine.description}
                </p>
                <Button
                  className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm tracking-wide"
                  size="sm"
                >
                  Add to Cart
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
