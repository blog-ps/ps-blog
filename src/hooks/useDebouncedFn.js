import { useRef } from 'react';

const useDebouncedFn = (fn, ms = 500) => {
  let timeoutRef = useRef(null);

  const debouncedFn = (...args) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, ms);
  };

  return debouncedFn;
};

export default useDebouncedFn;
