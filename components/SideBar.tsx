import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import classNames from 'classnames';

import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppShortcutOutlinedIcon from '@mui/icons-material/AppShortcutOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface ISideButton {
  onClick: () => void;
  icon: JSX.Element;
  focused: boolean;
  description?: string;
}

const SideButton = ({ onClick, icon, focused, description }: ISideButton): JSX.Element => {
  return (
    <div className="flex items-center" onClick={onClick}>
      <button
        className={classNames('side-button', {
          'side-button__focused': focused,
        })}
      >
        {icon}
      </button>
      <p
        className={classNames('side-button-description text-xl', {
          'side-button-description__focused': focused,
        })}
      >
        {description}
      </p>
    </div>
  );
};

const SideBar = (): JSX.Element => {
  const router = useRouter();
  const [opened, setOpened] = useState<boolean | null>(null);

  return (
    <div
      className={classNames('side-bar', {
        'side-bar__opened': opened,
        'side-bar__closed': opened !== null ? !opened : null,
      })}
    >
      <SideButton
        focused
        onClick={() => setOpened(opened === null ? true : !opened)}
        icon={<MenuIcon />}
      />
      <SideButton
        focused={router.pathname === '/'}
        onClick={() => router.push('/')}
        icon={<HomeOutlinedIcon />}
        description="Home"
      />
      <SideButton
        focused={router.pathname === '/about'}
        onClick={() => router.push('/about')}
        icon={<InfoOutlinedIcon />}
        description="About"
      />
      <SideButton
        focused={router.pathname === '/projects'}
        onClick={() => router.push('/projects')}
        icon={<AppShortcutOutlinedIcon />}
        description="Projects"
      />
    </div>
  );
};

export default SideBar;
