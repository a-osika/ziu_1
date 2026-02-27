export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="font-serif text-2xl tracking-tight text-foreground">
              Maison du Vin
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Curating the world&apos;s finest wines since 1987. Every bottle
              tells a story.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-foreground">
              Explore
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {["Red Wines", "White Wines", "Ros\u00e9", "Sparkling"].map((item) => (
                <li key={item}>
                  <a
                    href="#collection"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-foreground">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {["About Us", "Our Vineyards", "Press", "Careers"].map((item) => (
                <li key={item}>
                  <a
                    href="#story"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-foreground">
              Support
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {["Shipping", "Returns", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#contact"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Maison du Vin. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Must be 21 or older to purchase.
          </p>
        </div>
      </div>
    </footer>
  )
}
