import React from "react";

import "./index.css";

const Footer = () => {
  return (
    <footer>
      <span>
        Made with <strong>React</strong> at{" "}
        <strong>
          <a href="https://www.lereacteur.io/" className="link">
            Le Reacteur{" "}
          </a>
        </strong>
        by{" "}
        <strong>
          <a
            href="https://www.linkedin.com/in/gloria-luzio-a7b05819b/"
            className="link"
          >
            Gloria
          </a>
        </strong>
      </span>
    </footer>
  );
};

export default Footer;
