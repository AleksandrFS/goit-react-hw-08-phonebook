import { Outlet } from 'react-router-dom';

import { AppTool } from 'components/AppTool/AppTool';
import { Spinner } from 'components/Loader/Loader';
import { Suspense } from 'react';

import { MainBox } from './SharedLayot.styled';

const SharedLayout = () => {
  return (
    <MainBox>
      <nav>
      <AppTool />
      </nav>
      <main>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      </main>
    </MainBox>
  );
};

export default SharedLayout;
