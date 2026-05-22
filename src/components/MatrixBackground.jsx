import React, { useEffect, useRef } from 'react';

const MATRIX_CHARS = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*+-<>[]{}';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d', { alpha: true });
    if (!context) return;

    let animationFrameId;
    let lastFrameTime = 0;
    let columns = [];
    let charSize = 14;
    let trailFade = 0.08;

    const randomChar = () => MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];

    const setup = () => {
      const dpr = window.devicePixelRatio || 1;
      const { innerWidth, innerHeight } = window;

      canvas.width = Math.floor(innerWidth * dpr);
      canvas.height = Math.floor(innerHeight * dpr);
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      charSize = innerWidth < 768 ? 12 : 14;
      trailFade = innerWidth < 768 ? 0.12 : 0.08;

      const totalColumns = Math.floor(innerWidth / charSize);
      columns = Array.from({ length: totalColumns }, () => ({
        y: Math.random() * -innerHeight,
        speed: 0.75 + Math.random() * 1.45,
      }));

      context.fillStyle = '#020202';
      context.fillRect(0, 0, innerWidth, innerHeight);
      context.font = `${charSize}px 'Fira Code', monospace`;
    };

    const draw = (timestamp) => {
      if (!lastFrameTime) {
        lastFrameTime = timestamp;
      }

      const delta = timestamp - lastFrameTime;
      if (delta < 33) {
        animationFrameId = window.requestAnimationFrame(draw);
        return;
      }
      lastFrameTime = timestamp;

      const width = window.innerWidth;
      const height = window.innerHeight;

      context.fillStyle = `rgba(2, 2, 2, ${trailFade})`;
      context.fillRect(0, 0, width, height);

      context.font = `${charSize}px 'Fira Code', monospace`;

      columns.forEach((column, index) => {
        const x = index * charSize;
        const char = randomChar();

        context.fillStyle = Math.random() > 0.94 ? '#d8ffe8' : '#00ff41';
        context.shadowBlur = 10;
        context.shadowColor = '#00ff41';
        context.fillText(char, x, column.y);

        column.y += charSize * column.speed;

        if (column.y > height + Math.random() * 120) {
          column.y = -Math.random() * height * 0.8;
          column.speed = 0.75 + Math.random() * 1.45;
        }
      });

      context.shadowBlur = 0;
      animationFrameId = window.requestAnimationFrame(draw);
    };

    setup();
    animationFrameId = window.requestAnimationFrame(draw);

    window.addEventListener('resize', setup);

    return () => {
      window.removeEventListener('resize', setup);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="matrix-bg" aria-hidden="true">
      <canvas ref={canvasRef} className="matrix-canvas" />
      <div className="matrix-vignette" />
      <div className="matrix-grid-overlay" />
    </div>
  );
};

export default MatrixBackground;

