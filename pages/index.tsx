import { useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/home/welcome');
  }, []);

  return <div className="index-page">what uppp</div>;
};

export default Home;
