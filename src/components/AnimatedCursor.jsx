import { useEffect, useRef, useState } from 'react';

const HOVER_SELECTOR = 'a, button, .cyber-btn, .project-card, .skill-tag, .nav-links a';

const AnimatedCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const ringPositionRef = useRef({ x: 0, y: 0 });
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const updateEnabled = () => {
      setIsEnabled(mediaQuery.matches && window.innerWidth > 768);
    };

    updateEnabled();
    mediaQuery.addEventListener('change', updateEnabled);
    window.addEventListener('resize', updateEnabled);

    return () => {
      mediaQuery.removeEventListener('change', updateEnabled);
      window.removeEventListener('resize', updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return undefined;

    let animationFrameId;

    const moveCursor = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      ringPositionRef.current.x += (x - ringPositionRef.current.x) * 0.15;
      ringPositionRef.current.y += (y - ringPositionRef.current.y) * 0.15;
    };

    const animateRing = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPositionRef.current.x}px, ${ringPositionRef.current.y}px, 0)`;
      }
      animationFrameId = window.requestAnimationFrame(animateRing);
    };

    const handlePointerOver = (event) => {
      setIsHovering(Boolean(event.target.closest(HOVER_SELECTOR)));
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handlePointerOver);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    animationFrameId = window.requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handlePointerOver);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [isEnabled]);

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      <div
        ref={ringRef}
        className={`cursor-ring ${isVisible ? 'visible' : ''} ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
      />
      <div ref={dotRef} className={`cursor-dot ${isVisible ? 'visible' : ''}`} />
    </>
  );
};

export default AnimatedCursor;
