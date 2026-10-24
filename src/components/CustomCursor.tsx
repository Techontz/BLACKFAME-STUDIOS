import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const INTERACTIVE_SELECTOR =
  'button, a, [role="button"], input, textarea, select, .interactive-card';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Only show the custom cursor on devices with a precise pointer (mouse/trackpad)
  useEffect(() => {
    const query = window.matchMedia('(pointer: fine)');
    const update = () => setEnabled(query.matches);

    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };

    // One delegated listener instead of attaching to every interactive element
    const handleOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      setHovered(Boolean(target?.closest?.(INTERACTIVE_SELECTOR)));
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', moveCursor, { passive: true });
    document.addEventListener('mouseover', handleOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleOver);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled, cursorX, cursorY]);

  if (!enabled || !visible) return null;

  return (
    <>
      {/* Dynamic Cursor spot */}
      <motion.div
        className="custom-cursor"
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
        className="fixed w-1.5 h-1.5 bg-[#d4af37] rounded-full pointer-events-none z-[99999] transform -translate-x-1/2 -translate-y-1/2"
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
