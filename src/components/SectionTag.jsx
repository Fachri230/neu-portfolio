// The small pill label shown above every section heading (the "section tag").
export default function SectionTag({ children }) {
  return (
    <span className="inline-block rounded-full border border-abyss-500/60 bg-abyss-800 px-4 py-1 text-sm font-medium text-mist-300">
      {children}
    </span>
  );
}
