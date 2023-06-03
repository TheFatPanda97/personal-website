import { FC } from 'react';
import './style.scss';

import Button from '@mui/material/Button';

interface IProps {
  img: string;
  description: string;
  repo: string;
  url?: string;
}

const Card: FC<IProps> = ({ img, description, repo, url }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={img} alt="project image" />
      </div>
      <div className="description-container">{description}</div>
      <div className="btn-group">
        <Button variant="text" onClick={() => window.open(repo, '_blank')}>
          VISIT REPOSITORY
        </Button>
        {url && (
          <Button variant="text" onClick={() => window.open(url, '_blank')}>
            VISIT WEBSITE
          </Button>
        )}
      </div>
    </div>
  );
};

export default Card;
