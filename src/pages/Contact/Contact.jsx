import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <div className="contact">
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
            <div className="section__form">
              <input type="text " placeholder="Ismingiz" />
              <input type="tel" placeholder="No’meringiz" />
              <input type="submit" disabled="disabled" value="Jo’natish" />
            </div>
          </div>
          <div className="section__left">
            <img src={require("../../assets/CarouselImgThree.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
