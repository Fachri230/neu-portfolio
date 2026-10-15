import { about } from '../data/content.js';
import Reveal from './Reveal.jsx';

export default function About() {
  return (
    // scroll-mt keeps the heading from hiding under the fixed navbar when jumping here
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <div className="flex justify-center gap-14 md:grid-cols-2 md:items-center">
        {/* Left column: tag, heading, text */}
        <Reveal>
          <h2 className="flex justify-center mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
            About Me.
          </h2>
          <div className="mt-6 max-w-prose space-y-4 text-lg leading-relaxed text-mist-300">
            {about.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
