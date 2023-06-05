import { FC } from 'react';
import './style.scss';

import Button from '@mui/material/Button';
import classNames from 'classnames';

interface IProps {
  img: string;
  description: string;
  repo: string;
  url?: string;
  title: string;
  contain?: boolean;
  bottom?: boolean;
}

const Card: FC<IProps> = ({ title, img, description, repo, url, contain, bottom }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img className={classNames({ contain, bottom })} src={img} alt="project image" />
      </div>
      <div className="description-container">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
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
