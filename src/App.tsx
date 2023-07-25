import './scss/index.scss';
import { useState, MutableRefObject } from 'react';

import useScrollRerender from './hooks/useScrollRerender';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Tabs from './components/Tabs';
import Home from './sections/HomeSection';
import About from './sections/AboutSection';
import Project from './sections/ProjectSection';
import Contact from './sections/ContactSection';

interface ITabState {
  ref: MutableRefObject<any> | null;
  inView: boolean;
  tabName: string;
}

const App = () => {
  useScrollRerender();

  const [homeInView, setHomeInview] = useState<ITabState>({
    ref: null,
    inView: true,
    tabName: 'Home',
  });
  const [aboutInView, setAboutInview] = useState<ITabState>({
    ref: null,
    inView: false,
    tabName: 'About',
  });
  const [projectInView, setProjectInview] = useState<ITabState>({
    ref: null,
    inView: false,
    tabName: 'Projects',
  });
  const [contactInView, setContactInview] = useState<ITabState>({
    ref: null,
    inView: false,
    tabName: 'Contact',
  });

  const onLogoClick = () => {
    if (homeInView.ref) {
      homeInView.ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <div className="top-vignette" />
      <img className="logo-img" src="./logo.webp" alt="logo" width={35} onClick={onLogoClick} />
      <LinkedInIcon
        id="linkedin-icon"
        onClick={() => window.open('https://www.linkedin.com/in/shawn-hu/', '_blank')}
      />
      <GitHubIcon
        id="github-icon"
        onClick={() => window.open('https://github.com/TheFatPanda97', '_blank')}
      />
      <Tabs tabStates={[homeInView, aboutInView, projectInView, contactInView]} />
      <Home setInView={setHomeInview} />
      <About setInView={setAboutInview} />
      <Project setInView={setProjectInview} />
      <Contact setInView={setContactInview} />
      <div className="bottom-vignette" />
    </div>
  );
};

export default App;
