import './style.scss';

import Card from '../../components/Card';
import AnimatedText from '../../components/AnimatedText';
import { FC, useEffect } from 'react';
import useCustomInView from '../../hooks/useCustomInView';
import { IInViewState } from '../../types/general';

interface IProps {
  setInView: (inView: IInViewState) => void;
}

const Project: FC<IProps> = ({ setInView }) => {
  const { ref, inView, setRefs } = useCustomInView();
  useEffect(
    () =>
      setInView({
        inView,
        ref,
        tabName: 'Projects',
      }),
    [inView],
  );

  const projects = [
    {
      img: '/signado.png',
      title: 'Signado',
      description:
        '1st Place Winner of 2023 DeerHacks. By using computer vision, Signado seemlessly translates ASL to English in real-time.',
      repo: 'https://devpost.com/software/signado',
      url: 'https://signado.tech/',
    },
    {
      img: '/viaplanner.gif',
      title: 'VIAplanner',
      description:
        'VIAplanner is a tool designed by students at the University of Toronto to help the community. We desire to enhance the course selection process.',
      repo: 'https://github.com/VIAplanner/via-timetable',
      url: 'https://viaplanner.ca',
    },
    {
      img: '/parcube.jpeg',
      title: 'Parcube',
      description:
        'Parcube is an Android/iOS app that allows a driver to book an instant parking spot on some home owners sidewalk in the desired area.',
      repo: 'https://github.com/TheFatPanda97/finalprojectw23-parcube',
      url: 'https://parcube.netlify.app/',
      bottom: true,
    },
    {
      img: '/netlify-dns.png',
      title: 'Netlify DDNS',
      description:
        'A simple DDNS client that updates your Netlify DNS records to your current IP address.',
      repo: 'https://github.com/TheFatPanda97/netlify-dynamic-dns',
    },
    {
      img: '/mcss.png',
      title: 'UTM MCSS Website',
      description:
        'The official website for the University of Toronto Mississauga Math and Computational Sciences Society.',
      repo: 'https://github.com/utmmcss/mcss-website-frontend',
      url: 'https://mcss.club/',
      contain: true,
    },
  ];

  return (
    <div className="project-section" ref={setRefs}>
      <AnimatedText className="title" fontSize={36} speed={1.2} center>
        My Projects
      </AnimatedText>
      <div className="project-container">
        {projects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
