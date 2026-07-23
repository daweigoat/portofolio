import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-6 px-6">
      <p className="text-xs tracking-[0.4em] uppercase text-muted">404</p>
      <h1 className="text-display-xl font-light tracking-tight text-primary">
        Page not found.
      </h1>
      <p className="text-secondary max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-4 px-6 py-3 rounded-full glass border border-white/[0.1] text-primary text-sm hover:bg-white/[0.06] transition-all duration-300"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
