import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const useScrollPosition = (
  location,
  customHandleScroll = () => {},
  item = window
) => {
  const scrollY = useRef(0);
  // useEffect(() => {
  //   const storedScrollY = window.localStorage.getItem(
  //     `${location}-${item}-scroll-y`
  //   );
  //   if (storedScrollY) {
  //     scrollY.current = parseInt(storedScrollY, 10);
  //   }
  // }, [location, item]);
  const [isNavigating, setIsNavigating] = useState(false);
  const handleScroll = useCallback(() => {
    if (isNavigating) {
      setIsNavigating(false);
    } else {
      customHandleScroll(scrollY.current, item.scrollY);
    }
    scrollY.current = item.scrollY;
  }, [customHandleScroll, isNavigating, item]);
  useEffect(() => {
    const storedScrollY = window.localStorage.getItem(
      `${location}-${item}-scroll-y`
    );
    if (storedScrollY) {
      scrollY.current = parseInt(storedScrollY, 10);
    }
    item.scrollTo(0, scrollY.current);
    console.log('scrollTo', scrollY.current);

    item.addEventListener('scroll', handleScroll);

    return () => {
      item.removeEventListener('scroll', handleScroll);
      window.localStorage.setItem(
        `${location}-${item}-scroll-y`,
        scrollY.current
      );
    };
  }, [handleScroll, item, location]);
  useEffect(() => {
    setIsNavigating(true);
  }, [location]);
  return scrollY;
};
export default useScrollPosition;
