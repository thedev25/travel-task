import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="mainlogo">
          <a href="/">
            {" "}
            <img src={require("../../assets/FooterLogo.png")} alt="" />
          </a>
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
          <a href="https://t.me/PrimeTech_hr4" target="_blank">
            <img src={require("../../assets/PrimeTechLogo.png")} alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
