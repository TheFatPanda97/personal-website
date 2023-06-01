/// <reference types="vite-plugin-svgr/client" />
import './style.scss';

import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { ReactComponent as LighBulb } from '../../assets/lightbulb.svg';
import { ReactComponent as Dream } from '../../assets/dream.svg';
import { ReactComponent as Wrench } from '../../assets/wrench.svg';

interface IProps {
  setInView: (inView: boolean) => void;
}

const Home: FC<IProps> = ({ setInView }) => {
  const { ref, inView } = useInView();
  useEffect(() => setInView(inView), [inView]);

  return (
    <div className="home-section" ref={ref}>
      <LighBulb className="lightbulb" />
      <Dream className="dream" />
      <Wrench className="wrench" />
      <div className="text-container">
        <h2 className="name">Shawn Hu</h2>
        <h1>SOFTWARE ENGINEER</h1>
        <h1 className="special">DREAMER</h1>
        <h1>PROBLEM SOLVER</h1>
      </div>
    </div>
  );
};

export default Home;
