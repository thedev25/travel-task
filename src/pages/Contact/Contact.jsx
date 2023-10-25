import React, { useState } from "react";
import "./Contact.css";
import InputMask from "react-input-mask";

function Contact() {
  return (
    <div>
      <div className="contact" id="contact">
        <div className="contact__bg">
          <div className="bg__text">
            <h2>Bog’lanish</h2>
          </div>
        </div>
        <div className="contact__section">
          <div className="section__right">
            <h3>
              Bizning xizmatlardan <br /> foydalanganingiz uchun <br />
              tashakkur!
            </h3>
            <p>
              Discover the ultimate escape at Hyatt Ziva Cap Cana. Dive into the
              clear waters of Juanillo Beach, lounge by a swim-up bar in one of
              our infinity pools, and dine in style at 12 restaurants and bars
              within the resort. Explore our gated enclave of Cap Cana to find
              golf courses and deep-sea fishing excursions close by.
            </p>
            <div className="section__form" id="aloqa">
              <input type="text" className="intone" placeholder="Ismingiz" />
              <div className="form__itemtwo">
                <h6>+998</h6>
                <InputMask
                  placeholder="00 000-00-00"
                  mask="99 999-99-99"
                  maskChar={null}
                />
              </div>
              <input
                className="inttwo"
                type="submit"
                disabled="disabled"
                value="Jo’natish"
              />
            </div>
          </div>
          <div className="section__left">
            <img src={require("../../assets/CarouselImgThree.png")} alt="" />
          </div>
        </div>
        <div className="contact__form">
          <div className="form__card">
            <h2>Bog’lanish</h2>
            <input
              className="int1"
              maxLength={10}
              type="text"
              placeholder="Ismingiz"
            />
            <div className="form__item">
              <span>+998</span>
              <InputMask
                placeholder="00 000-00-00"
                mask="99 999-99-99"
                maskChar={null}
              />
            </div>
            <input
              className="int2"
              type="submit"
              disabled="disabled"
              value="Jo’natish"
            />
          </div>

          <img src={require("../../assets/Plane.png")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
