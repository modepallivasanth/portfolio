import { useEffect, useRef } from 'react';

export default function useScrollAnimation(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: options.rootMargin || '0px 0px -60px 0px',
        threshold: options.threshold || 0.1,
      }
    );

    // Observe the element and its children with the class
    const targets = element.querySelectorAll('.animate-on-scroll');
    targets.forEach((target) => observer.observe(target));

    // Also observe the element itself if it has the class
    if (element.classList.contains('animate-on-scroll')) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [options.rootMargin, options.threshold]);

  return ref;
}
