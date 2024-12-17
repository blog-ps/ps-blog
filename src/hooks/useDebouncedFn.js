import { useRef, useCallback, useEffect } from 'react';

const useDebouncedFn = (fn, ms = 500) => {
  const timeoutRef = useRef(null);

  const debouncedFn = useCallback(
    (...args) => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        fn(...args);
      }, ms);
    },
    [fn, ms]
  );

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return debouncedFn;
};

export default useDebouncedFn;
