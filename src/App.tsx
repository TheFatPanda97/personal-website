import './scss/index.scss';
import useScrollRerender from './hooks/useScrollRerender';

import AnimatedText from './components/AnimatedText';
import Tabs from './components/Tabs';
import Home from './sections/HomeSection';

const App = () => {
  useScrollRerender();

  return (
    <>
      <div className="top-vignette" />
      <img src="./logo.png" alt="logo" width={35} className="logo-img" />
      <Tabs />
      <Home />
      <AnimatedText speed={3}>This is a test</AnimatedText>
      <AnimatedText>This is another test</AnimatedText>
      <AnimatedText>This is a test</AnimatedText>
      <div style={{ height: 1000 }}></div>
      <div className="bottom-vignette" />
    </>
  );
};

export default App;
