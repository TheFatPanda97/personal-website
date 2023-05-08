import type { FC, ReactNode } from 'react';
import './style.scss';

interface IProps {
  width: number;
  children: ReactNode;
  fontSize?: number;
  unfillColor?: string;
  fillColor?: string;
}

const AnimatedText: FC<IProps> = ({
  width,
  children,
  fontSize = 24,
  unfillColor = 'grey',
  fillColor = '#88c5cc',
}) => {
  return (
    <div className="animated-text-container">
      <div className="inner-container">
        <p className="background-text" style={{ fontSize, color: unfillColor }}>
          {children}
        </p>
        <p className="fill-text" style={{ fontSize, color: fillColor, width: `${width}%` }}>
          {children}
        </p>
      </div>
    </div>
  );
};

export default AnimatedText;
