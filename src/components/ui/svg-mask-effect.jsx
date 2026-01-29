import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const MaskContainer = ({
  children,
  className,
  size = 0, // Default size 0 biar handle lewat CSS variable aja
}) => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const containerRef = useRef(null);

  const updateMousePosition = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", updateMousePosition);
      return () => {
        if (container) {
          container.removeEventListener("mousemove", updateMousePosition);
        }
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full w-full overflow-hidden", className)}
    >
      {/* Background Layer with Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-50 z-0 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.15), transparent 40%)`,
        }}
      />
      
      {/* Content Layer (Tetap bisa diklik & interaktif) */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};