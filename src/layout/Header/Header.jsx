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
                <a href="">Asosiy</a>
              </li>
              <li>
                <a href="">Men haqimda</a>
              </li>
            </ol>
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <ol>
              <li>
                <a href="">Sayohatlarim</a>
              </li>
              <li>
                <a href="">Bog’lanish</a>
              </li>
            </ol>
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
        <div>Salom</div>
      </header>
    </div>
  );
}

export default Header;
