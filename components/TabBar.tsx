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
      <Image src={iconUrl} alt="viaplanner" width={20} height={20} />
      <div className="w-3" />
      <p>{title}</p>
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
  const parsedPathName = parsePathName(router.pathname);
  const pageTabs = tabs[parsedPathName[0]];

  const xsss = '';

  console.log(parsedPathName);
  console.log(pageTabs);

  return (
    <div className="tab-bar">
      {pageTabs.map(({ key, title, iconUrl }) => (
        <Tab key={key} focused title={title} iconUrl={iconUrl} onClick={() => {}} />
      ))}
    </div>
  );
};

export default TabBar;
