import { useEffect, useRef } from 'react';

export default function ScrollProgressBar() {
  const progress = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = (scrollTop / scrollHeight) * 100;
      if (progress.current) {
        progress.current.style.width = percent + '%';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div
      ref={progress}
      style={{ width: '0%' }}
      className="h-0.5 rounded-full bg-amber-400 transition-[width] duration-100 ease-linear"
    ></div>
  );
}
