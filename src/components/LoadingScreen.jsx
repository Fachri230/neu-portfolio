import { useEffect, useState } from 'react';

const greetings = [
  'Hello',
  'Hola',
  'Bonjour',
  'こんにちは',
  '你好',
  'Ciao',
  'Olá',
  '안녕하세요',
  'Halo',
  'مرحبا',
  'नमस्ते',
  'สวัสดी',
];

const LOADING_DURATION = 4200;
export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const startedAt = Date.now();
    let leaveTimer;

    const interval = window.setInterval(() => {
      const elapsed = Date.now() - startedAt;
      const ratio = Math.min(elapsed / LOADING_DURATION, 1);

      setProgress(Math.floor(ratio * 100));
      setGreetingIndex(
        Math.floor(elapsed / 650) % greetings.length
      );

      if (ratio >= 1) {
        window.clearInterval(interval);
        setProgress(100);
        setIsLeaving(true);

        leaveTimer = window.setTimeout(() => {
          setIsFinished(true);
          onFinish?.();
        }, 500);
      }
    }, 40);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(leaveTimer);
    };
  }, []);

  if (isFinished) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-[#020817] text-white transition-opacity duration-500 ease-in-out ${
        isLeaving
          ? 'pointer-events-none opacity-0'
          : 'opacity-100'
      }`}
      role="status"
      aria-label={`Loading portfolio, ${progress}%`}
      aria-live="polite"
    >
      <div className="w-[min(520px,calc(100vw-48px))] text-center">
        {/* Multilingual greeting */}
        <div className="mb-8 grid min-h-[clamp(100px,18vw,160px)] place-items-center sm:mb-[42px]">
          <span
            key={greetingIndex}
            className="block text-[clamp(56px,11vw,100px)] font-extrabold leading-none tracking-[-0.075em] text-[#f8fbff]"
          >
            {greetings[greetingIndex]}
          </span>
        </div>

        {/* Loading bar */}
        <div
          className="h-[5px] w-full overflow-hidden bg-[#13233e]"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          aria-label="Portfolio loading progress"
        >
          <div
            className="h-full bg-[#2878ff] shadow-[0_0_12px_rgba(40,120,255,0.45)] transition-[width] duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <div
          className="mt-3 flex items-baseline justify-end gap-0.5 font-sans text-xl font-bold tracking-[-0.04em] tabular-nums text-[#f8fbff]"
          aria-hidden="true"
        >
          <span>{progress}</span>
          <span className="text-[13px] font-extrabold text-[#2878ff]">
            %
          </span>
        </div>
      </div>
    </div>
  );
}
