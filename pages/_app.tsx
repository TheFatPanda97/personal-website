import '@scss/index.scss';
import type { AppProps } from 'next/app';

import SideBar from '@components/SideBar';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="flex h-full">
      <SideBar />
      <Component {...pageProps} />
    </div>
  );
};
export default MyApp;
