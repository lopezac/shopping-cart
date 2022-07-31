import styled from "styled-components";
import { Content } from "../styles/Content";
import { ContentTitle } from "../styles/Title";

const List = styled.ul`
  padding: 0;

  li {
    list-style-type: none;
  }
`;

const Contact = () => {
  return (
    <Content>
      <ContentTitle>Contact</ContentTitle>
      <p>This page is for all watches fans out there.</p>
      <p>For more info, or consumer's help contact me on:</p>
      <List>
        <li>Phone: 1111-1111</li>
        <li>Email: notfake@email.com</li>
        <li>Address: real address 1155</li>
      </List>
    </Content>
  );
};

export default Contact;
