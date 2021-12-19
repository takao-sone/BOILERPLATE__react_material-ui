import { FC } from 'react';

type Props = {
  appName: string;
};

const AppHeader: FC<Props> = ({ appName }) => {
  // eslint-disable-next-line no-console
  console.log('AppHeader');

  return (
    <div>
      <span>{appName}-AppHeader</span>
    </div>
  );
};

export default AppHeader;
