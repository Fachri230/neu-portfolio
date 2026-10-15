
import { useEffect, useState } from 'react';

export default function ScrollProgress({ loading }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) return;

    let frameId = 0;

    const updateProgress = () => {
      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        const doc = document.documentElement;
        const maxScroll = doc.scrollHeight - window.innerHeight;
        const scrollTop = window.scrollY || doc.scrollTop || 0;

        const percentage =
          maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

        setProgress(Math.min(100, Math.max(0, percentage)));
        frameId = 0;
      });
    };

    updateProgress();

    window.addEventListener('scroll', updateProgress, {
      passive: true,
    });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [loading]);

  if (loading) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[10001] h-1 w-full overflow-hidden bg-[#13233e]"
      aria-hidden="true"
    >
      <div
        className="h-full bg-[#2878ff] transition-[width] duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
