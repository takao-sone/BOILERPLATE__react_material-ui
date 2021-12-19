import { FC } from 'react';

type Props = {
  appName: string;
};

const AppFooter: FC<Props> = ({ appName }) => {
  // eslint-disable-next-line no-console
  console.log('AppFooter');

  return (
    <div>
      <span>{appName}-AppFooter</span>
    </div>
  );
};

export default AppFooter;
