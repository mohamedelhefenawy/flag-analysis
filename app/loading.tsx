export default function Loading() {
  return (
    <main
      className="relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden px-4 py-20"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute bottom-2 right-6 h-56 w-56 rounded-full bg-secondary-500/10 blur-3xl" />
      </div>

      <section className="relative w-full max-w-xl rounded-4xl border border-primary-600/80 bg-primary-900/70 p-8 text-center backdrop-blur-xl md:p-10">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-brand-400/50 bg-black/60">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary-600 border-t-brand-500" />
        </div>

        <h3 className="text-white">Loading Football Intelligence</h3>
        <p className="mx-auto mt-3 max-w-md text-primary-100">
          Preparing your analysis view. This usually takes a moment.
        </p>

        <div className="mx-auto mt-8 w-full max-w-sm space-y-3">
          <div className="h-2 w-full animate-pulse rounded-full bg-primary-600/60" />
          <div className="h-2 w-5/6 animate-pulse rounded-full bg-primary-600/50" />
          <div className="h-2 w-2/3 animate-pulse rounded-full bg-primary-600/40" />
        </div>
      </section>
    </main>
  );
}
