import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-boba-border/80 bg-boba-cream/85 shadow-boba-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center px-6">
        <Link
          href="/"
          className="font-serif text-lg font-medium italic tracking-tight text-boba-espresso transition hover:text-boba-accent"
        >
          portfolio
        </Link>
      </div>
    </header>
  );
}
