import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <div className="about" id="about">
        <div className="about__bg">
          <div className="bg__dsf">
            <h2>Men haqimda</h2>
          </div>
        </div>
        <div className="about__section">
          <div className="section__left">
            <img src={require("../../assets/AboutImg.png")} alt="" />
          </div>
          <div className="section__right">
            <h3>Mening ismim Beknazar Kamoldinov </h3>
            <p>
              Ман Камалдинов Бекназар 1970 йил 2 декабрьда тугулганман
              ойилалиман 2020 йилдан бери шу сайохат кампаниясида ишлаб келаман.
              Мани ниятим бутун дунени сайохат килиш дунени 7 мужизасини куриш.
              Ман азалдан сайохатни яхши кураман. БУ шундай кампания сизга бир
              борганда 4-5 давлат бир нечта шахарларини куриб келишиз
              имкониятини беради. Сиз арзон сайохат килишни хохласезми. Сиз
              бепул сайохат килишни хохласезми. Сиз сайохат килиб даромад ишлаб
              олишни хохлайсизми. Сиз канча тез бу сайохат клубига кушилсез сиз
              шунча тез сайохатга чикасиз ва даромад ишлаб олишиз мумкин. Бизани
              сайохат клубимизда сайохатлар денгиз оркали булади. СИЗ денгиз
              хавосида нафас олиб денгиз сувларида чумилиб анча касалардан форик
              буласиз ва ешариб келасиз. БУ кампанияни нияти факат бойлар эмас
              одий халк хам узи учун пул йигиб йигилган пулига 50% арзон еки
              кампания шартини бажариб бир умирли бепул сайохат сертификатини
              ютуб олишиз мумкин. Кани айтингчи кайси кампания еки кайси фирмада
              шундай сайохат бор. СИЗ бу сайохат кампаниясида нафакат сайохат
              сиз сайохат килиб даромад ишлаб олишиз мумкин.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
