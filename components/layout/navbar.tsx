import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
          Nova Atelier
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted">
          <a href="#" aria-disabled="true" className="cursor-default">
            Link One
          </a>
          <a href="#" aria-disabled="true" className="cursor-default">
            Link Two
          </a>
        </nav>
      </div>
    </header>
  );
}
