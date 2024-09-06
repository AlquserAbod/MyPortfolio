import { useEffect, useRef } from 'react';

const useIntersectionObserver = (
  callback: (entry: IntersectionObserverEntry, direction: 'top' | 'bottom' | null) => void,
  options: IntersectionObserverInit = {}
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const previousPositionsRef = useRef<Map<Element, number>>(new Map());

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const prevTop = previousPositionsRef.current.get(entry.target);
        const currentTop = entry.boundingClientRect.top;
        let direction: 'top' | 'bottom' | null = null;

        if (prevTop !== undefined) {
          direction = currentTop < prevTop ? 'top' : 'bottom';
        }

        previousPositionsRef.current.set(entry.target, currentTop);
        callback(entry, direction);
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);

    return () => {
      observerRef.current?.disconnect();
      previousPositionsRef.current.clear(); // Clean up
    };
  }, [callback, options]);

  const observe = (element: Element) => {
    observerRef.current?.observe(element);
  };

  const unobserve = (element: Element) => {
    observerRef.current?.unobserve(element);
    previousPositionsRef.current.delete(element); // Remove when unobserving
  };

  return { observe, unobserve };
};

export default useIntersectionObserver;
