import Image from 'next/image';
import styles from './navbar.module.scss';
import { useState } from 'react';

const NavBar = () => {
  const tabs = ['Highlights', 'Projects', 'Contact'];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className={styles['nav-bar']}>
      <div className={styles['home-section']}>
        <div className={styles['logo-container']}>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </div>
        <p className={styles.title}>Shawn Hu</p>
      </div>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <p
            key={tab}
            className={`${styles.tab} ${tab === selectedTab && styles['tab-active']}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </p>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
