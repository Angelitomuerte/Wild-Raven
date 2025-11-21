// Server Component (no "use client")

// Top-level Server Action
export async function subscribe(formData: FormData) {
  "use server";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  // TODO: Save to ESP/DB
  console.log("[CTA subscribe]", email);
}

export default function CTA() {
  return (
    <section id="cta" className="section bg-[--color-olive-green]/10">
      <div className="mx-auto max-w-3xl text-center px-4">
        <h2 className="section-heading text-[--color-forest-green]">
          <span className="script">Stay in the Loop</span>
          Launch updates, small-batch releases, and homestead stories
        </h2>
        <p className="mt-4 text-black/80 ui-serif">
          No spam—just honest apothecary notes from the bench.
        </p>

        <form
          action={subscribe}
          className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          aria-label="Join our mailing list"
        >
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="w-full sm:w-80 rounded-md border border-[--color-olive-green]/40 bg-white/90 px-4 py-2"
            required
          />
          <button type="submit" className="btn">Join</button>
        </form>
      </div>
    </section>
  );
}
