import '@scss/index.scss';
import type { AppProps } from 'next/app';

import SideBar from '@components/SideBar';
import TabBar from '@components/TabBar';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="flex h-full main-app">
      <SideBar />
      <div className="w-full">
        <TabBar />
        <div className="content">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
};
export default MyApp;
