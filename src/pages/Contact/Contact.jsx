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
              Араб амирлиги буйлаб 7 кечаю 8 кун сайохат килиб келдим. Бундан
              олдин ман хеч ерга бомаганман бу жуда ажойиб хар куни хар хил
              давлат ва шахарлар. СИЗ ухлаб турсез Яна бир бошка шахардасиз
              лайнерда хама нарсалар бепул 24 соат шведский стол сиз учун
              ишледи, Яна сизга кечки рестаран бриктрилган бу хам бепул. Хар хил
              тансих таомлар, хар хил шоулар, дунени малхур юлдузлари келиб
              бепул канцертлар беради, дискотека дейсизми, караоке дейсизми
              хамаси сиз учун бепул бу мужиза. Буни сиз качон англаб етасиз
              качонки сиз шу сайохат кампанияга кушилганизда. Ойлеманки сиз хам
              тез орада бир карорга келасиз деган умитдаман. Яна 5-10 йилардан
              кегин жойлар комеди. Биз унда яхшигина натижаларга чикиб олган
              буламиз. Хазир вокт бор, жойлар бор, ешсиз, кучиз бор харакат
              килиб колинг. Узиз учун вокт ажратинг еки вакт сиз учун ажратади.
              БУ кунлар утиб кетаверади хеч ортга кайтмеди.
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
