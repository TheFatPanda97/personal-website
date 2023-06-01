import { FC, useEffect, useState } from 'react';
import classnames from 'classnames';

import './style.scss';

interface IProps {
  inViews: boolean[];
}

const Tabs: FC<IProps> = ({ inViews }) => {
  const allTabs = ['Home', 'About', 'Projects', 'Contact'];
  const [tab, setTab] = useState<string>('Home');

  useEffect(() => {
    allTabs.every((tabName, index) => {
      if (inViews[index]) {
        setTab(tabName);
        // return false;
      }

      return true;
    });
  }, [inViews]);

  return (
    <ul className="tabs">
      {allTabs.map((tabName) => (
        <li key={tabName} onClick={() => setTab(tabName)}>
          <span className={classnames('tab', { 'tab--active': tab === tabName })}>{tabName}</span>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
