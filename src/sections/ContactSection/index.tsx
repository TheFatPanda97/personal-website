import './style.scss';

import AnimatedText from '../../components/AnimatedText';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useCustomInView from '../../hooks/useCustomInView';
import { FC, useEffect } from 'react';
import { IInViewState } from '../../types/general';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface IProps {
  setInView: (inView: IInViewState) => void;
}

const Contact: FC<IProps> = ({ setInView }) => {
  const { ref, inView, setRefs } = useCustomInView();
  useEffect(
    () =>
      setInView({
        inView,
        ref,
        tabName: 'Contact',
      }),
    [inView],
  );

  return (
    <div className="contact-section" ref={setRefs}>
      <AnimatedText className="title" center fontSize={36} speed={1.9}>
        Contact Me
      </AnimatedText>
      <div className="link-container">
        <LinkedInIcon
          onClick={() => window.open('https://www.linkedin.com/in/shawn-hu/', '_blank')}
        />
        <GitHubIcon onClick={() => window.open('https://github.com/TheFatPanda97', '_blank')} />
      </div>
      <div className="form-container">
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <TextField required label="Name" name="name" variant="standard" />
          <TextField required label="Email" name="email" variant="standard" type="email" />
          <TextField
            required
            label="Message"
            name="message"
            multiline
            rows={4}
            variant="standard"
          />
          <Button className="submit-btn" variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
