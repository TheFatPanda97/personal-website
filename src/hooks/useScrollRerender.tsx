import { useState, useEffect } from 'react';

/**
 * a bit of a hack to get the text to re-render on scroll
 */
const useScrollRerender = () => {
  const [_, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useScrollRerender;
