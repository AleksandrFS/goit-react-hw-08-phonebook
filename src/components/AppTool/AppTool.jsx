import { AuthNav } from '../AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import { useAuth } from 'hooks/useAuth';
// import { UserMenu } from 'components/UserMenu/UserMenu';
import { UserMenu } from '../UserMenu/UserMenu';

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
