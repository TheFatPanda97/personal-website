import type { FC, ReactNode } from 'react';

interface IProps {
  width: number;
  children: ReactNode;
}

const AnimatedText: FC<IProps> = ({ width, children }) => {
  return (
    <div style={{ position: 'relative' }}>
      <p
        style={{
          position: 'absolute',
          fontSize: 24,
          color: 'grey',
          top: '0',
          left: '0',
        }}
      >
        {children}
      </p>
      <p
        style={{
          position: 'absolute',
          fontSize: 24,
          width: `${width}%`,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          color: '#88c5cc',
          top: '0',
          left: '0',
        }}
      >
        {children}
      </p>
    </div>
  );
};

export default AnimatedText;
