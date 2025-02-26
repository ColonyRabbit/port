"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Scroll: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ใช้ easing function + requestAnimationFrame เพื่อให้ smooth ขึ้น
  const scrollToTop = () => {
    const scrollDuration = 1200; // ปรับความเร็วของการเลื่อน (ms)
    const start = window.scrollY;
    const startTime = performance.now();

    const easeOutCubic = (t: number) => --t * t * t + 1; // Easing function

    const scrollStep = (timestamp: number) => {
      const currentTime = timestamp - startTime;
      const progress = Math.min(currentTime / scrollDuration, 1);
      const easedProgress = easeOutCubic(progress);

      window.scrollTo(0, start * (1 - easedProgress));

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  return (
    <div>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed lg:bottom-5 lg:right-5 max-md:bottom-5 max-md:left-5 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, y: 20 }}
        >
          ↑ To Top
        </motion.button>
      )}
    </div>
  );
};

export default Scroll;
