import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const useScrollPosition = (
  location,
  customHandleScroll = () => {},
  item = window
) => {
  let pageScrollY = window.localStorage.getItem(`${location}-${item}-scroll-y`);
  if (!pageScrollY) pageScrollY = 0;
  const scrollY = useRef(pageScrollY);
  const handleScroll = useCallback(() => {
    customHandleScroll(scrollY.current, item.scrollY);
    scrollY.current = item.scrollY;
  }, [customHandleScroll, item]);
  useEffect(() => {
    item.scrollTo(0, scrollY.current);
    item.addEventListener('scroll', handleScroll);
    return () => {
      item.removeEventListener('scroll', handleScroll);
      window.localStorage.setItem(
        `${location}-${item}-scroll-y`,
        scrollY.current
      );
    };
  }, [handleScroll, item, scrollY, location]);
  return scrollY;
};
export default useScrollPosition;
