import { FC, useEffect } from 'react';
import useCustomInView from '../../hooks/useCustomInView';
import AnimatedText from '../../components/AnimatedText';
import { ReactComponent as Rocket } from '../../assets/rocket.svg';
import { IInViewState } from '../../types/general';

import './style.scss';

interface IProps {
  setInView: (inView: IInViewState) => void;
}

const About: FC<IProps> = ({ setInView }) => {
  const { ref, inView, setRefs } = useCustomInView();
  useEffect(
    () =>
      setInView({
        inView,
        ref,
        tabName: 'About',
      }),
    [inView],
  );

  return (
    <div className="about-section" ref={setRefs}>
      <Rocket className="rocket" />
      <AnimatedText fontSize={36}>Who I Was</AnimatedText>
      <h2>
        Backend Software Devloper Intern @ <span className="highlight">Shopify</span>
      </h2>
      <h2>
        Software Devloper Intern @ <span className="highlight">Forma AI</span>
      </h2>
      <h2>
        Computer Science Teaching Assistant @{' '}
        <span className="highlight">University of Toronto</span>
      </h2>
      <h2>
        Residence Life Staff @ <span className="highlight">University of Toronto Mississauga</span>
      </h2>
      <AnimatedText fontSize={36}>Who I Am</AnimatedText>
      <h2>
        Software Engineer @ <span className="highlight">Maneva AI</span>
      </h2>
      <h2>
        <span className="highlight">Computer Science Graduate </span> From the University of Toronto
      </h2>
      <h2>
        Software Developer with <span className="highlight"> Over 4 Years of Experience</span>
      </h2>
      <h2>
        Passionate about
        <span className="highlight"> Web Development, Cloud Computing and AI </span>
      </h2>
      <AnimatedText fontSize={36}>Who I Want to Be</AnimatedText>
      <h2>
        An <span className="highlight">AWS Certified</span> Software Engineer
      </h2>
      <h2>
        Working On Projects That <span className="highlight"> Directly Impacts Customers </span>
      </h2>
    </div>
  );
};

export default About;
