import { FC } from 'react';
import './style.scss';

import Button from '@mui/material/Button';
import classNames from 'classnames';

interface IProps {
  media: string;
  description: string;
  repo: string;
  url?: string;
  title: string;
  contain?: boolean;
  bottom?: boolean;
}

const getExtension = (file: string) => {
  const regex = /\.[^.\\/:*?"<>|\r\n]+$/gm;
  let extension = '';
  let m;

  while ((m = regex.exec(file)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    m.forEach((match) => {
      extension = match;
    });
  }

  return extension;
};

const Card: FC<IProps> = ({ title, media, description, repo, url, contain, bottom }) => {
  const extension = getExtension(media);

  return (
    <div className="card">
      <div className="media-container">
        {extension === '.mp4' ? (
          <video src={media} autoPlay loop muted />
        ) : (
          <img className={classNames({ contain, bottom })} src={media} alt="project image" />
        )}
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
