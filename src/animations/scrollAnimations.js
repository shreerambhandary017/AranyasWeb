import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimations = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-parallax]').forEach((element, index) => {
        gsap.fromTo(
          element,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'power3.out',
            duration: 1.2,
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              toggleActions: 'play none none none'
            },
            delay: index * 0.08
          }
        );
      });

      gsap.utils.toArray('[data-timeline]').forEach((element) => {
        gsap.from(element, {
          height: 0,
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          duration: 1.2,
          ease: 'power2.out'
        });
      });
    });

    // --- Fallback: after short delay, ensure all .parallax/.timeline are visible ---
    const fallbackTimeout = setTimeout(() => {
      document.querySelectorAll('[data-parallax], [data-timeline]').forEach((el) => {
        el.style.opacity = '1';
        el.style.transition = 'none';
      });
    }, 250);

    // SAFETY: we purposely do not call ctx.revert() in cleanup (since it unconditionally re-hides all animated elements)
    return () => {
      clearTimeout(fallbackTimeout);
      // Intentionally not reverting GSAP context
    };
  }, []);
};

export default useScrollAnimations;

