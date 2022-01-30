import Image from 'next/image';
import classNames from 'classnames';

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

const TabBar = (): JSX.Element => {
  return (
    <div className="tab-bar">
      <Tab
        focused
        title="viaplanner"
        iconUrl="https://raw.githubusercontent.com/VIAplanner/via-timetable/master/public/favicon.ico"
        onClick={() => {}}
      />
    </div>
  );
};

export default TabBar;
