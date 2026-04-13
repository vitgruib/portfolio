export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-cozy-border/90 bg-cozy-foam/90">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-cozy-muted">
          © {year} — Warm wishes & Next.js
        </p>
        <div className="flex flex-wrap gap-6">
          <a
            href="https://github.com"
            className="text-sm font-medium text-cozy-mocha transition hover:text-cozy-accent focus-visible:focus-ring rounded-sm"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="mailto:hello@example.com"
            className="text-sm font-medium text-cozy-mocha transition hover:text-cozy-accent focus-visible:focus-ring rounded-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
