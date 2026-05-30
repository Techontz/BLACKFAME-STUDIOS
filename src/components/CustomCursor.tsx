import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 40, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const handleLinkHover = () => setHovered(true);
    const handleLinkLeave = () => setHovered(false);

    const updateHoverListeners = () => {
      const targets = document.querySelectorAll('button, a, [role="button"], input, textarea, select, .interactive-card');
      targets.forEach((target) => {
        target.addEventListener('mouseenter', handleLinkHover);
        target.addEventListener('mouseleave', handleLinkLeave);
      });
    };

    // Listeners for hover transitions
    updateHoverListeners();
    const observer = new MutationObserver(updateHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
      const targets = document.querySelectorAll('button, a, [role="button"], .interactive-card');
      targets.forEach((target) => {
        target.removeEventListener('mouseenter', handleLinkHover);
        target.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Dynamic Cursor spot */}
      <motion.div
        className="custom-cursor hidden md:block"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          borderColor: hovered ? '#d4af37' : 'rgba(255, 255, 255, 0.4)',
          backgroundColor: hovered ? 'rgba(214, 175, 55, 0.15)' : 'transparent',
          width: hovered ? 58 : 24,
          height: hovered ? 58 : 24,
        }}
      />
      {/* Innermost focused dot */}
      <motion.div
        className="fixed w-1.5 h-1.5 bg-[#d4af37] rounded-full pointer-events-none z-[99999] transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          left: cursorX,
          top: cursorY,
        }}
        animate={{
          scale: hovered ? 1.5 : 1,
        }}
      />
    </>
  );
}
