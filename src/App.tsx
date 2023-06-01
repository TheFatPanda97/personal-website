import './scss/index.scss';
import { useEffect, useState } from 'react';

import useScrollRerender from './hooks/useScrollRerender';

import Tabs from './components/Tabs';
import Home from './sections/HomeSection';
import About from './sections/AboutSection';
import Project from './sections/ProjectSection';

const App = () => {
  useScrollRerender();

  const [homeInView, setHomeInview] = useState(true);
  const [aboutInView, setAboutInview] = useState(false);

  return (
    <>
      <div className="top-vignette" />
      <img src="./logo.png" alt="logo" width={35} className="logo-img" />
      <Tabs inViews={[homeInView, aboutInView]} />
      <Home setInView={setHomeInview} />
      <About setInView={setAboutInview} />
      <Project />
      <div className="bottom-vignette" />
    </>
  );
};

export default App;
