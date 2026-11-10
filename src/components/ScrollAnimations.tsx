import { useEffect } from 'react';

export function ScrollAnimations() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const sections = Array.from(document.querySelectorAll('main section'));
    const observers: IntersectionObserver[] = [];

    sections.forEach((section, sectionIndex) => {
      const heading = section.querySelector('h2');
      if (heading) heading.classList.add('scroll-reveal', sectionIndex % 3 === 0 ? 'reveal-left' : sectionIndex % 3 === 1 ? 'reveal-up' : 'reveal-right');

      const cards = section.querySelectorAll('.grid > div, .grid > article');
      cards.forEach((card, index) => {
        card.classList.add('scroll-reveal', 'reveal-card');
        (card as HTMLElement).style.setProperty('--reveal-delay', `${(index % 4) * 100}ms`);
      });

      const images = section.querySelectorAll('img');
      images.forEach((img, index) => {
        if (img.closest('.grid')) return;
        img.classList.add('scroll-reveal', index % 2 === 0 ? 'reveal-image' : 'reveal-image-alt');
      });
    });

    const targets = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -48px 0px' });

    targets.forEach((target) => observer.observe(target));
    observers.push(observer);

    return () => observers.forEach((item) => item.disconnect());
  }, []);

  return null;
}
