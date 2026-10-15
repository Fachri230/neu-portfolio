import useInView from '../hooks/useInView.js';

// Wrapper that fades and slides its children in when they scroll into view.
// "delay" (in ms) staggers elements so they don't all appear at once.
export default function Reveal({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref} // lets the hook watch this div
      style={{ transitionDelay: `${delay}ms` }} // inline style for the dynamic delay
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
