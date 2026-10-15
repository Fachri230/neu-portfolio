
import { profile, socials } from '../data/content.js';
import Reveal from './Reveal.jsx';

const socialIcons = {
  Instagram: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),

  GitHub: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.646.35-1.087.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.56 9.56 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.944.359.31.679.92.679 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z"
      />
    </svg>
  ),
};

export default function Contact() {
  const visibleSocials = socials.filter(({ label }) =>
    ['Instagram', 'GitHub'].includes(label)
  );

  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl scroll-mt-24 px-6 py-28 text-center"
    >
      <Reveal>

        <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
          Have a project in mind?
        </h2>

        <p className="mt-4 text-lg text-mist-300">
          Write to me at
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-3 inline-block break-all font-display text-2xl font-bold underline decoration-abyss-500 decoration-2 underline-offset-8 transition-colors hover:text-[#2878ff] sm:text-4xl"
        >
          {profile.email}
        </a>

        {/* Social media icon links */}
        <ul className="mt-12 flex items-center justify-center gap-6">
          {visibleSocials.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${label} profile`}
                title={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-abyss-700 text-mist-300 transition-all duration-200 hover:-translate-y-1 hover:border-[#2878ff] hover:bg-[#2878ff] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2878ff] focus-visible:ring-offset-2 focus-visible:ring-offset-abyss-900"
              >
                {socialIcons[label]}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
