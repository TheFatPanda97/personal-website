import { useState } from 'react';
import classnames from 'classnames';

import './style.scss';

import type { FC, ReactNode } from 'react';
interface IProps {
  speed?: number;
  children: ReactNode;
  fontSize?: number;
  unfillColor?: string;
  fillColor?: string;
  center?: boolean;
  className?: string;
}

const AnimatedText: FC<IProps> = ({
  speed = 1,
  children,
  fontSize = 24,
  unfillColor = 'grey',
  fillColor = '#54b3d6',
  center,
  className = '',
}) => {
  const [fillWidth, setFillWidth] = useState(0);

  return (
    <div
      className={classnames('animated-text-container', {
        'animated-text-container--center': center,
        [className]: className,
      })}
      ref={(el) => {
        if (!el) return;

        const currTop = el.getBoundingClientRect().top >= 0 ? el.getBoundingClientRect().top : 0;

        if (currTop <= window.innerHeight) {
          const val = (100 - (currTop / window.innerHeight) * 100) * speed;
          setFillWidth(val < 100 ? val : 100);
        }
      }}
    >
      <div className="inner-container">
        <p className="background-text" style={{ fontSize, color: unfillColor }}>
          {children}
        </p>
        <p className="fill-text" style={{ fontSize, color: fillColor, width: `${fillWidth}%` }}>
          {children}
        </p>
      </div>
    </div>
  );
};

export default AnimatedText;
