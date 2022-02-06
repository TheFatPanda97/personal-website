import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import classNames from 'classnames';

import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppShortcutOutlinedIcon from '@mui/icons-material/AppShortcutOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ISideButton {
  onClick: () => void;
  icon: JSX.Element;
  focused: boolean;
  description?: string;
  hideHighlight?: boolean;
  bottomButton?: boolean;
  className?: string;
}

const SideButton = ({
  onClick,
  icon,
  focused,
  description,
  hideHighlight,
  bottomButton,
  className,
}: ISideButton): JSX.Element => {
  return (
    <div className="side-button-container flex items-center" onClick={onClick}>
      <button
        className={classNames(className, {
          'side-button': !bottomButton,
          'side-button-bottom': bottomButton,
          'side-button__focused': focused,
          'side-button__focused__highlighted': focused && !hideHighlight,
        })}
        type="button"
      >
        {icon}
      </button>
      {description && (
        <p
          className={classNames('side-button-description text-xl', {
            'side-button-description__focused': focused,
          })}
        >
          {description}
        </p>
      )}
    </div>
  );
};

interface ISideBar {
  expandHeight: boolean | null;
  setExpandHeight: (expandHeight: boolean | null) => void;
}

const SideBar = ({ expandHeight, setExpandHeight }: ISideBar): JSX.Element => {
  const router = useRouter();
  const [expandWidth, setExpandWidth] = useState<boolean | null>(null);

  return (
    <div
      className={classNames('side-bar', {
        'side-bar__expand-width': expandWidth,
        'side-bar__collapse-width': expandWidth !== null ? !expandWidth : null,
        'side-bar__expand-height': expandHeight,
        'side-bar__collapse-height': expandHeight !== null ? !expandHeight : null,
      })}
    >
      <SideButton
        className={classNames({
          'side-button-bottom__move-up': expandHeight !== null ? !expandHeight : null,
          'side-button-bottom__move-down': expandHeight,
        })}
        onClick={() => {
          setExpandWidth(null);
          setExpandHeight(expandHeight === null ? false : !expandHeight);
        }}
        icon={expandHeight === null || expandHeight ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        focused
        hideHighlight
        bottomButton
      />

      {(expandHeight === null || expandHeight) && (
        <>
          <SideButton
            focused
            onClick={() => {
              setExpandHeight(null);
              setExpandWidth(expandWidth === null ? true : !expandWidth);
            }}
            icon={<MenuIcon />}
            description="Hide"
            hideHighlight
          />
          <SideButton
            focused={router.pathname.split('/')[1] === 'home'}
            onClick={() => router.push('/home')}
            icon={<HomeOutlinedIcon />}
            description="Home"
          />
          <SideButton
            focused={router.pathname.split('/')[1] === 'about'}
            onClick={() => router.push('/about')}
            icon={<InfoOutlinedIcon />}
            description="About"
          />
          <SideButton
            focused={router.pathname.split('/')[1] === 'projects'}
            onClick={() => router.push('/projects')}
            icon={<AppShortcutOutlinedIcon />}
            description="Projects"
          />
        </>
      )}
    </div>
  );
};

export default SideBar;
