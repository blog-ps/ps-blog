import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const useScrollPosition = (
  location,
  customHandleScroll = () => {},
  item = window
) => {
  const scrollY = useRef(() => {
    const pageScrollY = window.localStorage.getItem(
      `${location}-${item}-scroll-y`
    );
    return pageScrollY ? parseInt(pageScrollY) : 0;
  });
  const handleScroll = useCallback(() => {
    customHandleScroll(scrollY.current, item.scrollY);
    scrollY.current = item.scrollY;
  }, [customHandleScroll]);
  useEffect(() => {
    item.addEventListener('scroll', handleScroll);

    item.scrollTo(0, scrollY.current);
    return () => {
      item.removeEventListener('scroll', handleScroll);
      window.localStorage.setItem(
        `${location}-${item}-scroll-y`,
        window.scrollY
      );
    };
  }, [handleScroll, location, item]);
  return scrollY;
};
export default useScrollPosition;
