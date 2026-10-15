import { useState } from 'react';
import { profile } from '../data/content.js';

export default function Hero() {
  // If the photo file is missing, we show a simple silhouette instead of a broken image
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    // overflow-hidden stops the orbit ring from creating horizontal scroll on phones
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32 text-center"
    >
      {/* Section tag */}
      <div className="animate-rise" style={{ animationDelay: '0.05s' }}>
      </div>

      {/* ===== Large centered photo ===== */}
      <div
        className="animate-rise relative mt-8 w-[min(78vw,26rem)] md:w-[28rem]"
        style={{ animationDelay: '0.2s' }}
      >

        {/* Photo plate: a plain abyss arch, so the background stays blank and clean */}
        <div className="animate-float relative aspect-[4/5] overflow-hidden rounded-b-[2.5rem] rounded-t-[2.5rem] bg-abyss-800 ring-1 ring-abyss-500/50">
          {photoFailed ? (
            // Placeholder silhouette shown until you add /public/owner.jpg
            <svg viewBox="0 0 100 125" className="h-full w-full text-abyss-600" aria-label="Photo placeholder">
              <circle cx="50" cy="48" r="17" fill="currentColor" />
              <path d="M12 125c0-26 17-42 38-42s38 16 38 42z" fill="currentColor" />
            </svg>
          ) : (
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              onError={() => setPhotoFailed(true)} // switch to placeholder if loading fails
              className="h-full w-full object-cover object-top"
            />
          )}
        </div>
      </div>

      {/* ===== Name, role, intro ===== */}
      <h1
        className="animate-rise mt-12 font-display text-5xl font-bold tracking-tight md:text-7xl"
        style={{ animationDelay: '0.45s' }}
      >
        {profile.name}
      </h1>
      <p className="animate-rise mt-4 text-lg text-mist-300 md:text-xl" style={{ animationDelay: '0.6s' }}>
        {profile.role}
      </p>
      <p className="animate-rise mt-3 max-w-lg text-mist-500" style={{ animationDelay: '0.7s' }}>
        {profile.intro}
      </p>

    </section>
  );
}
