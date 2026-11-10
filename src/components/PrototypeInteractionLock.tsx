import { useEffect } from 'react';

export function PrototypeInteractionLock() {
  useEffect(() => {
    const blockPrototypeAction = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const control = target.closest('button, input[type="submit"], input[type="button"], [role="button"], a[href^="tel:"], a[href^="mailto:"]');
      if (!control) return;
      event.preventDefault();
      event.stopPropagation();
      if ('disabled' in control) (control as HTMLButtonElement).disabled = true;
    };

    document.addEventListener('click', blockPrototypeAction, true);
    document.addEventListener('submit', blockPrototypeAction, true);
    return () => {
      document.removeEventListener('click', blockPrototypeAction, true);
      document.removeEventListener('submit', blockPrototypeAction, true);
    };
  }, []);

  return null;
}
