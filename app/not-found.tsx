import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[100vh] items-center justify-center overflow-hidden px-4 py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute bottom-1/6 left-0 h-64 w-64 rounded-full bg-secondary-500/10 blur-3xl" />
      </div>

      <section className="relative w-full max-w-3xl rounded-4xl border border-primary-600/80 bg-primary-900/70 p-8 text-center backdrop-blur-xl md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
          Error 404
        </p>
        <h1 className="mt-4 text-white">Page Not Found</h1>
        <h4 className="mx-auto mt-6 max-w-2xl text-primary-100">
          The page you requested does not exist or may have been moved. Return
          to the homepage or continue exploring our intelligence products.
        </h4>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="w-full rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-brand-500 hover:text-white sm:w-auto"
          >
            Back to Home
          </Link>
          <Link
            href="/Player_intelligence"
            className="w-full rounded-full border border-primary-400 bg-[linear-gradient(to_bottom,#292929_0%,black_50%,#292929_100%)] px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:bg-[linear-gradient(to_bottom,#331057_0%,black_50%,#331057_100%)] sm:w-auto"
          >
            Explore Player Intelligence
          </Link>
        </div>
      </section>
    </main>
  );
}
