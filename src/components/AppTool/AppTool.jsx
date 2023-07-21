import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { AppToolStyled, AuthPartStyled } from './AppTool.styled';

export const AppTool = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppToolStyled>
      <Navigation />
      <AuthPartStyled>{isLoggedIn ? <UserMenu /> : <AuthNav />}</AuthPartStyled>
    </AppToolStyled>
  );
};
