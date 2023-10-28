import React, { useRef, useState } from "react";
import "./Header.css";
import Logo from "../../assets/Logo.jpg";
import { Button, Modal } from "antd";
import InputMask from "react-input-mask";
import emailjs from "@emailjs/browser";
function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r10cnja",
        "template_38potmi",
        form.current,
        "ZRefxqmeC7asfjbKZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

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
              <a href="/">
                <img className="img" src={Logo} alt="" />
              </a>

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
                    <form ref={form} onSubmit={sendEmail}>
                      <Button type="primary" onClick={showModal}>
                        Qani Ketik!
                      </Button>
                      <Modal open={isModalOpen} onCancel={handleCancel}>
                        <div className="form__card">
                          <form ref={form} onSubmit={sendEmail}>
                            <h2>Boglanish</h2>
                            <input
                              name="user_email"
                              className="int1"
                              type="text"
                              placeholder="Ismingiz"
                            />
                            <div className="form__item ">
                              <h6>+998</h6>
                              <InputMask
                                name="user_name"
                                placeholder="00 000-00-00"
                                mask="99 999-99-99"
                                maskChar={null}
                              />
                            </div>
                            <input
                              className="int2"
                              type="submit"
                              value="Jo’natish"
                            />
                          </form>
                        </div>
                      </Modal>
                    </form>
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
