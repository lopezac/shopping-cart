import styled from "styled-components";

export const NavBar = styled.nav`
  grid-area: navbar;
  background-color: #111827;
  padding: 10px;
  display: flex;
  column-gap: 10px;
  font-size: 1rem;
  align-items: center;
  color: #e5e7eb;

  a:last-child {
    margin-right: 5px;
  }

  .home-name {
    margin-right: auto;
    font-weight: bold;
  }

  .cart-icon {
    font-size: 1.2rem;
    padding-top: 5px;
    display: flex;
  }

  .cart-icon svg {
    font-size: 1.4rem;
  }
`;
