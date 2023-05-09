import { useState } from 'react';
import classnames from 'classnames';

import './style.scss';

const Tabs = () => {
  const [tab, setTab] = useState<string>('About');

  return (
    <ul className="tabs">
      {['About', 'Projects', 'Contact'].map((tabName) => (
        <li onClick={() => setTab(tabName)}>
          <span className={classnames('tab', { 'tab--active': tab === tabName })}>{tabName}</span>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
