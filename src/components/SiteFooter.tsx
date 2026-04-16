export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="mt-auto border-t border-boba-border/90 bg-boba-foam/90"
      style={{ position: "relative", zIndex: 10 }}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-boba-muted">
          © {year} Ethan Cai
        </p>
        <div className="flex flex-wrap gap-6">
          <a
            href="https://github.com/vitgruib"
            className="animate-bob text-sm font-medium text-boba-mocha transition-colors duration-200 hover:text-boba-accent focus-visible:focus-ring rounded-sm"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="mailto:ethanc8858@gmail.com"
            className="animate-bob text-sm font-medium text-boba-mocha transition-colors duration-200 hover:text-boba-accent focus-visible:focus-ring rounded-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
