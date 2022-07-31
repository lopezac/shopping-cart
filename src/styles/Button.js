import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
  font-size: 1.2rem;
  padding: 10px 15px;
  background-color: #111827;
  color: #e5e7eb;
  border: none;
`;

export const AnchorLink = styled.a`
  color: #e5e7eb;
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  color: #e5e7eb;
  text-decoration: none;
`;

export const FooterAnchor = styled(AnchorLink)`
  font-size: 1.4rem;
  color: #e5e7eb;
  text-decoration: none;
`;
