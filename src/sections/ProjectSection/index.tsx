import './style.scss';
import Card from '../../components/Card';
import AnimatedText from '../../components/AnimatedText';

const Project = () => {
  return (
    <div className="project-section">
      <AnimatedText className="title" fontSize={36} speed={1.2} center>
        My Projects
      </AnimatedText>
      <div className="project-container">
        <Card
          img="/intro-background-dark.png"
          description="1"
          repo="https://github.com/VIAplanner/via-timetable"
        />
        <Card
          img="/intro-background-dark.png"
          description="2"
          repo="https://github.com/VIAplanner/via-timetable"
        />
        <Card
          img="/intro-background-dark.png"
          description="3"
          repo="https://github.com/VIAplanner/via-timetable"
        />
        <Card
          img="/intro-background-dark.png"
          description="4"
          repo="https://github.com/VIAplanner/via-timetable"
        />
        <Card
          img="/intro-background-dark.png"
          description="5"
          repo="https://github.com/VIAplanner/via-timetable"
        />
        <Card
          img="/intro-background-dark.png"
          description="6"
          repo="https://github.com/VIAplanner/via-timetable"
        />
      </div>
    </div>
  );
};

export default Project;
