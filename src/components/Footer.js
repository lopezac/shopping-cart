import { BsGithub } from "react-icons/bs";

import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        Axel C. Lopez @Copyright 2022{" "}
        <a href="https://www.github.com/lopezac">
          <BsGithub />
        </a>
      </p>
    </div>
  );
}
