import './scss/index.scss';
import { useState } from 'react';

import useScrollRerender from './hooks/useScrollRerender';

import Tabs from './components/Tabs';
import Home from './sections/HomeSection';
import About from './sections/AboutSection';
import Project from './sections/ProjectSection';
import Contact from './sections/ContactSection';

const App = () => {
  useScrollRerender();

  const [homeInView, setHomeInview] = useState({
    ref: null,
    inView: true,
    tabName: 'Home',
  });
  const [aboutInView, setAboutInview] = useState({
    ref: null,
    inView: false,
    tabName: 'About',
  });
  const [projectInView, setProjectInview] = useState({
    ref: null,
    inView: false,
    tabName: 'Projects',
  });
  const [contactInView, setContactInview] = useState({
    ref: null,
    inView: false,
    tabName: 'Contact',
  });

  return (
    <>
      <div className="top-vignette" />
      <img src="./logo.png" alt="logo" width={35} className="logo-img" />
      <Tabs tabStates={[homeInView, aboutInView, projectInView, contactInView]} />
      <Home setInView={setHomeInview} />
      <About setInView={setAboutInview} />
      <Project setInView={setProjectInview} />
      <Contact setInView={setContactInview} />
      <div className="bottom-vignette" />
    </>
  );
};

export default App;
