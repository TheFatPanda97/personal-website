import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedText from '../../components/AnimatedText';
import { ReactComponent as Rocket } from '../../assets/rocket.svg';

import './style.scss';

interface IProps {
  setInView: (inView: boolean) => void;
}

const About: FC<IProps> = ({ setInView }) => {
  const { ref, inView } = useInView();
  useEffect(() => setInView(inView), [inView]);

  return (
    <div className="about-section" ref={ref}>
      <Rocket className="rocket" />
      <h2 className="title">About Me</h2>
      <AnimatedText fontSize={36}>Who I Was</AnimatedText>
      <h2>
        Backend Software Devloper Intern @ <span className="highlight">Shopify</span>
      </h2>
      <h2>
        Software Devloper Intern @ <span className="highlight">Forma AI</span>
      </h2>
      <h2>
        Computer Science Teachin Assistant @{' '}
        <span className="highlight">University of Toronto</span>
      </h2>
      <h2>
        Residence Life Staff @ <span className="highlight">University of Toronto Mississauga</span>
      </h2>
      <AnimatedText fontSize={36}>Who I Am</AnimatedText>
      <h2>
        <span className="highlight">Computer Science Graduate </span> From the University of Toronto
      </h2>
      <h2>
        Software Developer With Over <span className="highlight"> 4 Years of Experiences</span>
      </h2>
      <h2>
        Passionate about
        <span className="highlight"> web development, cloud computing and AI </span>
      </h2>
      <AnimatedText fontSize={36}>Who I Want to Be</AnimatedText>
      <h2>
        A Full-Time <span className="highlight">Software Engineer </span>
      </h2>
      <h2>
        Working On Something That <span className="highlight"> Directly Impacts Customers </span>
      </h2>
    </div>
  );
};

export default About;
