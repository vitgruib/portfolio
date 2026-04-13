import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/featured", label: "Featured" },
  { href: "/tools", label: "Tools" },
  { href: "/funsies", label: "Funsies" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-surface-border bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-auto min-h-16 max-w-5xl flex-col gap-3 px-6 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-0">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-zinc-100 transition hover:text-accent-hover"
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
              className="text-sm text-zinc-400 transition hover:text-zinc-100 focus-visible:focus-ring rounded-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
