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
      media: '/loop.mp4',
      title: 'loop',
      description: `OpenAI GPT Powered Test Driven Development. Give Me Tests, I'll Give You Code.`,
      repo: 'https://github.com/TheFatPanda97/loop',
      url: 'https://marketplace.visualstudio.com/items?itemName=thefatpanda97.loop',
    },
    {
      media: '/signado.png',
      title: 'Signado',
      description:
        '1st Place Winner of 2023 DeerHacks. By using computer vision, Signado seamlessly translates ASL to English in real time.',
      repo: 'https://devpost.com/software/signado',
      url: 'https://signado.tech/',
    },
    {
      media: '/viaplanner.mp4',
      title: 'VIAplanner',
      description:
        'VIAplanner is a web application that generates timetables for students at the University of Toronto for over 1000 users at peak usage.',
      repo: 'https://github.com/VIAplanner/via-timetable',
      url: 'https://viaplanner.ca',
    },
    {
      media: '/parcube.jpeg',
      title: 'Parcube',
      description:
        'Parcube is a cutting-edge React Native application designed to revolutionize the parking industry by decentralizing parking ownership. Our platform empowers individuals who own parking spots to effortlessly rent them out and earn a steady income.',
      repo: 'https://github.com/TheFatPanda97/finalprojectw23-parcube',
      url: 'https://parcube.netlify.app/',
      bottom: true,
    },
    {
      media: '/netlify-dns.png',
      title: 'Netlify DDNS',
      description:
        'A simple DDNS client that updates your Netlify DNS records to your current IP address.',
      repo: 'https://github.com/TheFatPanda97/netlify-dynamic-dns',
    },
    {
      media: '/mcss.png',
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
