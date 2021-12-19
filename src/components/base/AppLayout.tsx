import { FC } from 'react';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppNavBar from './AppNavBar';

type Props = {
  appName: string;
};

const AppLayout: FC<Props> = ({ children, appName }) => {
  // eslint-disable-next-line no-console
  console.log('AppLayout');

  return (
    <div>
      <AppHeader appName={appName} />
      <AppNavBar />
      {children}
      <AppFooter appName={appName} />
    </div>
  );
};

export default AppLayout;
