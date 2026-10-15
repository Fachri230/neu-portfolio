
import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data/content.js';

export default function Navbar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    navLinks.forEach(({ id }) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar-intro fixed left-1/2 top-4 z-50 w-max max-w-[94vw] -translate-x-1/2 sm:top-6">
      <nav
        aria-label="Main navigation"
        className="flex items-center gap-1 rounded-full border border-abyss-600 bg-abyss-800 p-1.5 shadow-xl shadow-black/25"
      >

        {navLinks.map(({ id, label }, index) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active === id ? 'page' : undefined}
            className={`navbar-link rounded-full px-3 py-2 text-sm font-medium sm:px-4 ${
              active === id
                ? 'bg-abyss-600 text-mist-100'
                : 'text-mist-300 hover:bg-abyss-700 hover:text-mist-100'
            }`}
            style={{ '--link-index': index }}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
