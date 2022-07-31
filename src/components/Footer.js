import { BsGithub } from "react-icons/bs";

import { FooterAnchor } from "../styles/Button";
import { FooterPara } from "../styles/Paragraph";
import { FooterStyle } from "../styles/Content";

export default function Footer() {
  return (
    <FooterStyle>
      <FooterPara>
        Axel C. Lopez @Copyright 2022{" "}
        <FooterAnchor href="https://www.github.com/lopezac">
          <BsGithub />
        </FooterAnchor>
      </FooterPara>
    </FooterStyle>
  );
}
