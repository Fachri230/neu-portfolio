
import Reveal from './Reveal.jsx';

const technologies = [
  {
    name: 'Laravel',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
  },
  {
    name: 'HTML5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'MySQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
];

function TechnologyCard({ name, logo, index }) {
  return (
    <article
      className="skill-card group relative flex min-h-40 flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-abyss-700 bg-abyss-800 p-5 text-center"
      style={{ '--card-index': index }}
    >
      <div className="skill-logo-wrap relative z-10 grid h-14 w-14 place-items-center rounded-xl">
        <img
          src={logo}
          alt={`${name} logo`}
          loading="lazy"
          className="skill-logo h-12 w-12 object-contain"
        />
      </div>

      <h3 className="skill-name relative z-10 text-sm font-semibold tracking-wide text-mist-100">
        {name}
      </h3>
    </article>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-28"
    >
      <Reveal>

        <h2 className="flex justify-center mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
          Tech I Use.
        </h2>

      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {technologies.map((technology, index) => (
          <TechnologyCard
            key={technology.name}
            {...technology}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
