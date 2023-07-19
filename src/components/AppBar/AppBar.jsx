import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { useAuth } from 'redux/hooks/useAuth';
import { UserMenu } from 'components/UserMenu/userMenu';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};
