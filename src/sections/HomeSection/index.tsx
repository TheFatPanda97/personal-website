import './style.scss';

import { Parallax } from 'react-parallax';

const Home = () => {
  return (
    <Parallax bgImage="./intro-background-dark.png" strength={200}>
      <div className="home-section">
        <h2 className="name">Shawn Hu</h2>
        <h1>SOFTWARE ENGINEER</h1>
        <h1 className="special">DREAMER</h1>
        <h1>PROBLEM SOLVER</h1>
      </div>
    </Parallax>
  );
};

export default Home;
