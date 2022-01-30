import '@scss/index.scss';
import type { AppProps } from 'next/app';
import { useState } from 'react';

import SideBar from '@components/SideBar';
import TabBar from '@components/TabBar';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [expandHeight, setExpandHeight] = useState<boolean | null>(null);

  return (
    <div className="main-app">
      <div className="flex h-full">
        <SideBar expandHeight={expandHeight} setExpandHeight={setExpandHeight} />
        <div className="w-full">
          <TabBar />
          {(expandHeight === null || expandHeight) && (
            <div className="content">
              <Component {...pageProps} />
            </div>
          )}
        </div>
      </div>
      {expandHeight !== null && !expandHeight && (
        <div className="content">
          <Component {...pageProps} />
        </div>
      )}
    </div>
  );
};
export default MyApp;
