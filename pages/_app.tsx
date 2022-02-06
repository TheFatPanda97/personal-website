import '../scss/index.scss';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Provider } from 'react-redux';

import SideBar from '@components/SideBar';
import TabBar from '@components/TabBar';
import { store } from '@store/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [expandHeight, setExpandHeight] = useState<boolean | null>(null);

  return (
    <Provider store={store}>
      <div className="main-app">
        <div className="flex h-full">
          <SideBar expandHeight={expandHeight} setExpandHeight={setExpandHeight} />
          <div className="main-area">
            <TabBar />
            {(expandHeight === null || expandHeight) && (
              <div className="content">
                <Component {...pageProps} />
              </div>
            )}
          </div>
        </div>
        {expandHeight !== null && !expandHeight && <Component {...pageProps} />}
      </div>
    </Provider>
  );
};
export default MyApp;
