import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { GoMoveToTop } from 'react-icons/go';

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);
  // const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      setIsVisible(scrolled > 300);

      // Tính phần trăm scroll
      // const winScroll = document.documentElement.scrollTop;
      // const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      // const scrolledPercent = (winScroll / height) * 100;
      // setScrollProgress(scrolledPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollStep = () => {
      const distance = window.scrollY;
      if (distance > 0) {
        window.scrollTo(0, distance - distance / 13); // điều chỉnh tốc độ ở đây
        requestAnimationFrame(scrollStep);
      }
    };
    requestAnimationFrame(scrollStep);
  };

  if (!isVisible) return null;

  return (
    <div className="animate-in fade-in fixed right-2 bottom-18 z-40 flex flex-col items-center space-y-3 duration-300">
      {/* Main Button */}
      <div className="group relative">
        <Button
          onClick={scrollToTop}
          className="h-12 w-12 rounded-full border-0 bg-[#0a0264] shadow-lg transition-all duration-300 hover:scale-105 hover:from-amber-600 hover:to-yellow-600 hover:shadow-xl active:scale-95"
          // title="Lên đầu trang"
        >
          <GoMoveToTop className="h-5 w-5 transform text-2xl font-semibold text-white transition-transform duration-300 group-hover:-translate-y-0.5" />
        </Button>

        {/* Tooltip */}
        <div className="pointer-events-none absolute top-1/2 right-full mr-3 -translate-y-1/2 transform rounded bg-yellow-400 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Lên đầu trang
          <div className="absolute top-1/2 left-full -translate-y-1/2 transform border-4 border-transparent border-l-yellow-400"></div>
        </div>
      </div>

      {/* Progress Bar
      <div className="h-16 w-1 overflow-hidden rounded-full bg-gray-200">
        <div
          className="w-full rounded-full bg-gradient-to-b from-amber-500 to-yellow-500 transition-all duration-100"
          style={{
            transform: `scaleY(${scrollProgress / 100})`,
            transformOrigin: 'bottom',
          }}
        />
      </div> */}
    </div>
  );
}
