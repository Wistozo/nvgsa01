import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos     = useRef({ x: -100, y: -100 });
  const ring    = useRef({ x: -100, y: -100 });
  const rafRef  = useRef<number>(0);

  useEffect(() => {
    // Only on non-touch devices
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.11);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.11);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Dot — snaps immediately */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-nvg-orange rounded-full mix-blend-difference will-change-transform"
        style={{ transform: 'translate(-100px, -100px)' }}
        aria-hidden="true"
      />
      {/* Ring — lerp-delayed */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-9 h-9 -translate-x-1/2 -translate-y-1/2 border-2 border-nvg-orange rounded-full mix-blend-difference will-change-transform"
        style={{ transform: 'translate(-100px, -100px)' }}
        aria-hidden="true"
      />
    </>
  );
}
