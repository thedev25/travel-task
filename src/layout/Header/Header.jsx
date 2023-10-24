import React from "react";
import "./Header.css";
import Logo from "../../assets/Logo.jpg";
function Header() {
  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <ol>
              <li>
                <a href="/">Asosiy</a>
              </li>
              <li>
                <a href="#about">Men haqimda</a>
              </li>
            </ol>
            <div className="logo">
              <img className="img" src={Logo} alt="" />
              <img
                className="mobile__img"
                src={require("../../assets/MobileLogo.png")}
                alt=""
              />
            </div>

            <ol>
              <li>
                <a href="#travel">Sayohatlarim</a>
              </li>
              <li>
                <a href="#contact">Bog’lanish</a>
              </li>
            </ol>

            <label htmlFor="menu">
              <img src={require("../../assets/Open.png")} alt="" />
            </label>
            <input type="checkbox" id="menu" />

            <ul>
              <img src={require("../../assets/NavMobileLogo.png")} alt="" />
              <li>
                <a href="/">Asosiy</a>
              </li>
              <li>
                <a href="#about">Men haqimda</a>
              </li>
              <li>
                <a href="#travel">Sayohatlarim</a>
              </li>
              <li>
                <a href="#contact">Bog’lanish</a>
              </li>
              <label htmlFor="menu">
                <img src={require("../../assets/close.png")} alt="" />
              </label>
            </ul>
          </nav>
        </div>
        <section>
          <div className="section__box">
            <div className="container">
              <div className="item__bg"></div>
              <div className="item__dfx">
                <div className="item__img"></div>
                <div className="item__desk">
                  <p>
                    Biz bilan vaqtingizni <br /> yanada maroqli otkazing!
                  </p>
                  <div className="item__btn">
                    <button>Qani ketdik!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Header;
