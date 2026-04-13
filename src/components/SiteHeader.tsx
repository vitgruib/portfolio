import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" },
  { href: "/funsies", label: "Funsies" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-cozy-border/80 bg-cozy-cream/85 shadow-cozy-sm backdrop-blur-md">
      <div className="mx-auto flex h-auto min-h-16 max-w-5xl flex-col gap-3 px-6 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-0">
        <Link
          href="/"
          className="font-serif text-lg font-medium italic tracking-tight text-cozy-espresso transition hover:text-cozy-accent"
        >
          portfolio
        </Link>
        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:justify-end"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-cozy-mocha transition hover:text-cozy-espresso focus-visible:focus-ring rounded-full px-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
