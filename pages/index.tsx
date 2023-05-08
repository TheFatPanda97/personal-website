import type { NextPage } from 'next';
import NavBar from '../components/NavBar/NavBar';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [width, setWidth] = useState(0);
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

  return (
    <div>
      <NavBar />
      <div style={{ height: 1000 }}></div>
      <div
        style={{ position: 'relative', height: 'auto' }}
        ref={(el) => {
          // el can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
          if (!el) return;

          const val = (scrollPosition / 1000) * 100;

          console.log(val <= 100 ? val : 100);

          setWidth(val <= 100 ? val : 100);

          // console.log(el.getBoundingClientRect().top);

          // console.log(el.getBoundingClientRect().top); // prints 200px
        }}
      >
        <p
          style={{
            fontSize: 24,
            color: 'grey',
            top: '0',
            left: '0',
          }}
        >
          This is just a test muhahahahahahahaa
        </p>
        <p
          style={{
            position: 'absolute',
            fontSize: 24,
            width: `${width}%`,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            color: '#88c5cc',
            top: '0',
            left: '0',
          }}
        >
          This is just a test muhahahahahahahaa
        </p>
      </div>
      <div style={{ height: 1000 }}></div>
    </div>
  );
};

export default Home;
