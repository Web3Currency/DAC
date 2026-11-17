import { useEffect } from 'react';

export function PrototypeInteractionLock() {
  useEffect(() => {
    const blockPrototypeAction = (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
    };

    const blockPrototypeClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      // Explicitly allow essential navigation controls while retaining the
      // prototype interaction guard for the remaining demo controls.
      if (target.closest('[data-prototype-allow="true"]')) return;

      const control = target.closest('button, input[type="submit"], input[type="button"], [role="button"], a[href^="tel:"], a[href^="mailto:"]');
      if (!control) return;

      blockPrototypeAction(event);
    };

    document.addEventListener('click', blockPrototypeClick, true);
    document.addEventListener('submit', blockPrototypeAction, true);

    return () => {
      document.removeEventListener('click', blockPrototypeClick, true);
      document.removeEventListener('submit', blockPrototypeAction, true);
    };
  }, []);

  return null;
}
