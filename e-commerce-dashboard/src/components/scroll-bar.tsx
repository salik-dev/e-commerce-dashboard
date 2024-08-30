import React, { useState, useEffect, useRef } from 'react';

const ScrollBar = () => {
  const [scrollDirection, setScrollDirection] = useState<string>(''); // null, 'up', 'down'
  const lastScrollTop = useRef(0); // Store the last scroll position

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // console.log(currentScrollTop, lastScrollTop)

    if (currentScrollTop > lastScrollTop.current) {
      // Scrolling down
      setScrollDirection('down');
    } else if (currentScrollTop < lastScrollTop.current) {
      // Scrolling up
      setScrollDirection('up');
    }

    lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`ScrollBar m-0 p-0 overflow-y-scroll h-[100vh] ${
        scrollDirection === 'down' ? 'scroll-down-style' : scrollDirection === 'up' ? 'scroll-up-style' : ''
      }`}
    >
      {/* Your content here */}
      
    </div>
  );
};

export default ScrollBar;
