'use client';

import { useEffect } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export default function PerformanceOptimizer({
  children,
}: PerformanceOptimizerProps) {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.querySelector(
        'link[rel="stylesheet"]',
      ) as HTMLLinkElement;
      if (criticalCSS) {
        criticalCSS.setAttribute('rel', 'preload');
        criticalCSS.setAttribute('as', 'style');
        criticalCSS.onload = () => {
          criticalCSS.setAttribute('rel', 'stylesheet');
        };
      }

      // Preload critical images
      const criticalImages = document.querySelectorAll(
        'img[data-priority="true"]',
      );
      criticalImages.forEach(img => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = img.getAttribute('src') || '';
        document.head.appendChild(link);
      });
    };

    // Optimize scroll performance
    const optimizeScroll = () => {
      let ticking = false;
      const updateScroll = () => {
        // Throttle scroll events
        if (!ticking) {
          requestAnimationFrame(() => {
            // Scroll optimization logic here
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', updateScroll, { passive: true });
      return () => window.removeEventListener('scroll', updateScroll);
    };

    // Optimize resize performance
    const optimizeResize = () => {
      let resizeTimeout: NodeJS.Timeout;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          // Resize optimization logic here
        }, 250);
      };

      window.addEventListener('resize', handleResize, { passive: true });
      return () => {
        clearTimeout(resizeTimeout);
        window.removeEventListener('resize', handleResize);
      };
    };

    // Initialize optimizations
    preloadCriticalResources();
    const cleanupScroll = optimizeScroll();
    const cleanupResize = optimizeResize();

    return () => {
      cleanupScroll();
      cleanupResize();
    };
  }, []);

  return <>{children}</>;
}
