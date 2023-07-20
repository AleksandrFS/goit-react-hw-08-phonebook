// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

import { StyledNavLink } from 'components/AppTool/NavLink.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </>
  );
};
