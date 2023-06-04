import { FC, useEffect, useState } from 'react';
import classnames from 'classnames';

import './style.scss';

interface IProps {
  tabStates: {
    ref: any;
    inView: boolean;
    tabName: string;
  }[];
}

const Tabs: FC<IProps> = ({ tabStates }) => {
  const [tab, setTab] = useState<string>('Home');

  const setTabState = (tabName: string, ref: any) => {
    setTab(tabName);
    const yOffset = -100;
    const element = ref.current;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  useEffect(() => {
    tabStates.forEach(({ inView, tabName }) => {
      if (inView) {
        setTab(tabName);
      }
    });
  }, [tabStates]);

  return (
    <ul className="tabs">
      {tabStates.map(({ tabName, ref }) => (
        <li key={tabName} onClick={() => setTabState(tabName, ref)}>
          <span className={classnames('tab', { 'tab--active': tab === tabName })}>{tabName}</span>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
