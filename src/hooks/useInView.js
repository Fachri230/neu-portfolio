import { useEffect, useRef, useState } from 'react';

// Custom hook: tells us when an element has scrolled into view (only once).
export default function useInView(threshold = 0.2) {
  const ref = useRef(null); // will point to the DOM element we want to watch
  const [inView, setInView] = useState(false); // becomes true when visible

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // IntersectionObserver fires a callback when the element crosses the screen edge
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // stop watching: animate only once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect(); // cleanup when the component unmounts
  }, [threshold]);

  return [ref, inView]; // the component attaches "ref" and reads "inView"
}
