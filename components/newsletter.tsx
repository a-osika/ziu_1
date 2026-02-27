"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section id="contact" className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70">
          Stay Connected
        </p>
        <h2 className="mt-4 font-serif text-4xl tracking-tight text-primary-foreground md:text-5xl text-balance">
          Join our wine circle
        </h2>
        <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
          Be the first to know about new arrivals, exclusive tastings, and
          seasonal collections delivered to your inbox.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-lg border border-primary-foreground/20 p-6">
            <p className="font-serif text-xl text-primary-foreground">
              Welcome to the circle.
            </p>
            <p className="mt-2 text-sm text-primary-foreground/70">
              You&apos;ll receive our next curated selection in your inbox soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/30"
              aria-label="Email address"
            />
            <Button
              type="submit"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 text-sm tracking-wide"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
