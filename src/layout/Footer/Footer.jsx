import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="mainlogo">
          <img src={require("../../assets/FooterLogo.png")} alt="" />
        </div>
        <ol>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#travel">Destination</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ol>
        <div className="company__logo">
          <img src={require("../../assets/PrimeTechLogo.png")} alt="" />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
