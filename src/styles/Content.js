import styled from "styled-components";

export const Hero = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background: #e5e7eb;
  margin-bottom: 1rem;
  padding: 10px 0;
`;

export const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
`;

export const FooterStyle = styled.div`
  grid-area: footer;
  background-color: #111827;
  color: #e5e7eb;
  margin-top: 15px;
`;
