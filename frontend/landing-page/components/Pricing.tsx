import { Github, BookOpen } from "lucide-react";

const GITHUB_URL = "https://github.com/siddartha19/SalesOS";

const perks = [
  "Self-host on any machine",
  "Bring your own API keys",
  "No SaaS lock-in, no seat fees",
  "No data leaves your environment",
];

export default function Pricing() {
  return (
    <section id="pricing" className="max-w-6xl mx-auto px-6 py-20 md:py-24">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <span className="label">Pricing</span>
        <h2 className="mt-2 text-[32px] md:text-[40px] font-semibold tracking-tightest leading-[1.1]">
          Free. Forever. MIT licensed.
        </h2>
        <p className="mt-3 text-stone-500 text-[15px] leading-relaxed">
          OpenSales is open source. You pay only for the tokens and API credits
          you actually use.
        </p>
      </div>

      <div className="max-w-2xl mx-auto card p-8 md:p-10 text-center">
        <div className="inline-flex items-baseline gap-1.5">
          <span className="text-[56px] font-bold tracking-tightest leading-none">
            $0
          </span>
          <span className="text-stone-500 text-[14px] mono">/ forever</span>
        </div>
        <div className="mt-2 pill pill-accent mono text-[11px]">
          MIT · open-source
        </div>

        <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-left max-w-md mx-auto">
          {perks.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-[14px]">
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
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-center justify-center gap-2.5 flex-wrap">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <Github size={14} strokeWidth={2.25} />
            Clone the repo
          </a>
          <a
            href={`${GITHUB_URL}#readme`}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <BookOpen size={14} strokeWidth={2.25} />
            Read the docs
          </a>
        </div>
      </div>
    </section>
  );
}
