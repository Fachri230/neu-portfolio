
import { projects } from '../data/content.js';
import Reveal from './Reveal.jsx';

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
    >
      <Reveal>
        <h2 className="flex justify-center mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
          My Work.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal
            key={project.title}
            delay={i * 120}
            className="h-full"
          >
            <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-abyss-800 transition-transform duration-300 hover:-translate-y-1.5">
              {/* Project image */}
              <div className="grid h-48 place-items-center bg-abyss-700">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="font-display text-6xl font-bold text-abyss-500">
                    {project.title[0]}
                  </span>
                )}
              </div>

              {/* Project details */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm text-mist-500">
                  {project.category}
                </p>

                <h3 className="mt-1 font-display text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-mist-300">
                  {project.text}
                </p>

                {/* Technology tags */}
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-abyss-700 px-3 py-1 text-sm text-mist-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {/* GitHub repository button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-mist-500/30 px-4 py-3 text-sm font-semibold text-mist-100 transition-colors duration-200 hover:border-[#2878ff] hover:bg-[#2878ff] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2878ff] focus-visible:ring-offset-2 focus-visible:ring-offset-abyss-800"
                >
                  {/* GitHub icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.646.35-1.087.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.56 9.56 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.944.359.31.679.92.679 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z"
                    />
                  </svg>

                  View on GitHub

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17 17 7M8 7h9v9"
                    />
                  </svg>
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
