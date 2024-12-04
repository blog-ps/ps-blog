import { useState, useEffect } from 'react';

const useWindowSize = (initialWidth, initialHeight) => {
  const [size, setSize] = useState({
    width: initialWidth,
    height: initialHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      const scaleFactor = Math.min(
        window.innerWidth / initialWidth,
        window.innerHeight / initialHeight
      );
      setSize({
        width: initialWidth * scaleFactor,
        height: initialHeight * scaleFactor,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [initialWidth, initialHeight]);

  return size;
};

export default useWindowSize;
