import React from "react";

import "./index.css";
import Logo from "./Deliveroo_logo.svg";
import Container from "../Container";

const Header = ({ title, data }) => {
  return (
    <header className="main-header">
      <div className="topbar">
        <Container>
          <img src={Logo} alt="logo deliveroo" />
        </Container>
      </div>
      <Container>
        <div className="restaurants-infos">
          <div className="restaurants-infos-left">
            <h1>{title}</h1>
            <p> {data.restaurant.description}</p>
          </div>
          <div className="restaurants-infos-right">
            <img src={data.restaurant.picture} alt="un petit déjeuner" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
