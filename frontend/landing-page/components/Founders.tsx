export default function Founders() {
  return (
    <section className="bg-white border-y hairline">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div>
          <span className="label">For founders who do their own outbound</span>
          <h2 className="mt-2 text-[32px] md:text-[40px] font-semibold tracking-tightest leading-[1.1]">
            Replace 10–15 hours a week of manual prospecting.
          </h2>
          <p className="mt-4 text-stone-500 text-[15px] leading-relaxed">
            You know the drill. Sales Nav at midnight, scraping websites for
            emails, writing the same first line 40 different ways, pasting into
            a sheet, forgetting who you messaged. OpenSales runs the whole loop
            while you keep shipping — and leaves a full trace so you can trust
            every step.
          </p>
          <ul className="mt-6 space-y-2.5 text-[14.5px]">
            {[
              "Source 20 prospects in ~4 minutes",
              "Each draft quotes a real, recent signal",
              "Every run is reproducible — same ICP, same pipeline",
              "You approve every email before it sends",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <span
                  className="mt-0.5 inline-flex w-4 h-4 rounded-full items-center justify-center shrink-0"
                  style={{ background: "#dff5e8", color: "#0a7c4a" }}
                >
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden>
                    <path
                      d="M1.5 5.2L4 7.5L8.5 2.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-ink">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="md:pl-8 md:border-l hairline">
          <blockquote className="text-[22px] md:text-[24px] font-semibold leading-snug tracking-tight text-ink">
            &ldquo;I stopped dreading Monday outbound. I paste an ICP, go eat
            dinner, come back to eight drafts that actually quote something real
            the person said last week. Approve, send, sleep.&rdquo;
          </blockquote>
          <figcaption className="mt-5 text-[13px] text-stone-500 mono">
            — A founder doing outbound at 11pm
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
