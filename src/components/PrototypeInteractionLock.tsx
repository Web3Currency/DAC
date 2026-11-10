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
