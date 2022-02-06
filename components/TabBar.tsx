import Image from 'next/image';
import classNames from 'classnames';
import { useRouter } from 'next/dist/client/router';

import { useAppSelector, useAppDispatch } from '@store/hooks';

interface ITab {
  focused: boolean;
  iconUrl: string;
  title: string;
  onClick: () => void;
}

const Tab = ({ focused, title, onClick, iconUrl }: ITab): JSX.Element => {
  return (
    <div
      className={classNames('tab', {
        tab__focused: focused,
      })}
      onClick={onClick}
    >
      <div className="img-container">
        <Image src={iconUrl} alt="viaplanner" width={20} height={20} layout="intrinsic" />
      </div>
      {/* <div className="w-3" /> */}
      <p className="title">{title}</p>
    </div>
  );
};

const parsePathName = (pathname: string): string[] => {
  if (pathname === '/') {
    return ['/'];
  }

  return pathname.split('/').filter((path) => path !== '');
};

const TabBar = (): JSX.Element => {
  const router = useRouter();
  const { tabs } = useAppSelector((state) => state.tabs);
  const parsedPathName = parsePathName(router.asPath);
  const pageTabs = tabs[parsedPathName[0]] || [];

  return (
    <div className="tab-bar">
      {pageTabs.map(({ key, title, iconUrl }) => (
        <Tab
          key={key}
          focused={parsedPathName[1] === key}
          title={title}
          iconUrl={iconUrl}
          onClick={() => router.push(`/${parsedPathName[0]}/${key}`)}
        />
      ))}
    </div>
  );
};

export default TabBar;
