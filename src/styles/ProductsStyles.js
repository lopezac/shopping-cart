import styled from "styled-components";

export const ProductsStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 0 1rem;

  p {
    margin: 0;
  }

  @media screen and (min-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ProductStyle = styled.div`
  background-color: #e5e7eb;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  padding: 10px 0;
  font-size: 1rem;
`;

export const ProductBottomStyle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;

  svg {
    cursor: pointer;
  }
`;
