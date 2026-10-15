
import Reveal from './Reveal.jsx';

export default function Achievement() {
  return (
    <section
      id="achievement"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
    >
      <Reveal>

        <h2 className="flex justify-center mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
          My journey has just started.
        </h2>

      </Reveal>

      <Reveal delay={120}>
        <div className="achievement-panel mt-12 flex min-h-64 flex-col items-center justify-center rounded-3xl border border-abyss-700 bg-abyss-800 px-6 py-12 text-center">
          <div className="grid h-16 w-16 place-items-center rounded-2xl border border-abyss-600 bg-abyss-900 text-mist-300">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-8 w-8"
            >
              <path
                d="M8 4h8v4.5a4 4 0 0 1-8 0V4Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M8 6H5v2a4 4 0 0 0 4 4M16 6h3v2a4 4 0 0 1-4 4M12 12.5V17m-4 3h8m-7-3h6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-mist-500">
            Achievement log
          </p>

          <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-mist-100 md:text-4xl">
            Coming Soon
          </h3>

          <p className="mt-3 max-w-md text-sm leading-6 text-mist-400">
            New milestones will be added here. Stay tuned.
          </p>

          <span className="mt-7 h-px w-16 bg-abyss-500" />
        </div>
      </Reveal>
    </section>
  );
}
