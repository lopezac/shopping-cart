import styled from "styled-components";

export const ProductImg = styled.img`
  max-width: 100%;
`;

export const HeroImg = styled.img`
  width: 300%;

  @media screen and (min-width: 540px) {
    width: 150%;
  }

  @media screen and (min-width: 800px) {
    width: 50%;
  }

  @media screen and (min-width: 1300px) {
    width: 40%;
  }
`;
