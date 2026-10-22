import { useEffect, useRef } from 'react';

const CHARACTERS = '01アイウエオカキクケコサシスセソタチツテト<>/{}';
const randomCharacter = () => CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];

export default function MatrixBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!context) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0;
    let height = 0;
    let streams = [];
    let frame = 0;
    let lastTime = 0;

    const paint = () => {
      context.clearRect(0, 0, width, height);
      context.font = '12px "IBM Plex Mono", monospace';
      streams.forEach(stream => {
        stream.glyphs.forEach((glyph, index) => {
          const y = stream.y - index * 19;
          if (y < -20 || y > height + 20) return;
          const opacity = (1 - index / stream.glyphs.length) * stream.brightness;
          context.fillStyle = index === 0 ? `rgba(212,255,224,${opacity})` : `rgba(115,224,147,${opacity * 0.75})`;
          context.shadowColor = '#79ffac';
          context.shadowBlur = index < 2 ? 9 : 0;
          context.fillText(glyph, stream.x, y);
        });
      });
      context.shadowBlur = 0;
    };

    const setup = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const spacing = width < 600 ? 32 : 35;
      streams = Array.from({ length: Math.ceil(width / spacing) }, (_, index) => ({
        x: index * spacing + 9,
        y: Math.random() * (height + 500),
        speed: 17 + Math.random() * 28,
        brightness: 0.3 + Math.random() * 0.55,
        glyphs: Array.from({ length: 9 + Math.floor(Math.random() * 18) }, randomCharacter),
      }));
      paint();
    };

    const animate = timestamp => {
      const elapsed = timestamp - lastTime;
      if (elapsed >= 50) {
        const seconds = Math.min(elapsed / 1000, 0.1);
        lastTime = timestamp;
        streams.forEach(stream => {
          stream.y += stream.speed * seconds;
          if (stream.y - stream.glyphs.length * 19 > height) stream.y = -20;
          if (Math.random() < 0.025) stream.glyphs[Math.floor(Math.random() * stream.glyphs.length)] = randomCharacter();
        });
        paint();
      }
      frame = window.requestAnimationFrame(animate);
    };

    const syncAnimation = () => {
      window.cancelAnimationFrame(frame);
      lastTime = 0;
      if (!document.hidden && !reducedMotion.matches) frame = window.requestAnimationFrame(animate);
      else paint();
    };

    setup();
    syncAnimation();
    window.addEventListener('resize', setup);
    document.addEventListener('visibilitychange', syncAnimation);
    reducedMotion.addEventListener('change', syncAnimation);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', setup);
      document.removeEventListener('visibilitychange', syncAnimation);
      reducedMotion.removeEventListener('change', syncAnimation);
    };
  }, []);

  return <div className="matrix-bg" aria-hidden="true">
    <canvas ref={canvasRef} className="matrix-canvas" />
    <div className="matrix-gloss" />
    <div className="matrix-grid-overlay" />
    <div className="matrix-vignette" />
  </div>;
}
