export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-surface-border bg-surface-muted/50">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-500">
          © {year} — Built with Next.js
        </p>
        <div className="flex flex-wrap gap-6">
          <a
            href="https://github.com"
            className="text-sm text-zinc-400 transition hover:text-zinc-100 focus-visible:focus-ring rounded-sm"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="mailto:hello@example.com"
            className="text-sm text-zinc-400 transition hover:text-zinc-100 focus-visible:focus-ring rounded-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
