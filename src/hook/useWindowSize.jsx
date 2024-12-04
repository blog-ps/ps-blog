import { useState, useEffect } from 'react';

/**
 *
 * @param {Number} initialWidth 初始宽度
 * @param {Number} initialHeight 初始高度
 * @returns {width: Number, height: Number} 返回当前窗口的宽高
 */
const useWindowSize = (initialWidth, initialHeight = 800) => {
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
