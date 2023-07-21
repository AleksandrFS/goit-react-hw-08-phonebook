import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  font-size: 30px;
  text-decoration: none;
  transition: transform 0.15s 0.1s ease;

  &.active {
    color: #f7b603c5;
  }

  :hover {
    transform: scale(1.05);
  }
`;