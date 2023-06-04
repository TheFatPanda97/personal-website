import './style.scss';

import AnimatedText from '../../components/AnimatedText';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { FC, useEffect } from 'react';

interface IProps {
  setInView: (inView: boolean) => void;
}

const Contact: FC<IProps> = ({ setInView }) => {
  const { ref, inView } = useInView();
  useEffect(() => setInView(inView), [inView]);

  return (
    <div className="contact-section" ref={ref}>
      <AnimatedText className="title" center fontSize={36} speed={1.9}>
        Contact Me
      </AnimatedText>
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
