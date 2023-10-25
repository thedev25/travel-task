import React from "react";
import "./With.css";

function With() {
  return (
    <div className="container" id="with">
      <div className="main__with">
        <div className="main__bg">
          <div className="bg__decs">
            <h3>Beknazar Kamoldinov!</h3>
            <button>Qani ketdik!</button>
          </div>
        </div>
        <div className="main__section">
          <div className="section__left">
            <h2>
              Eng maroqli otkazgan <br /> onlarim!
            </h2>

            <p>
              Дуне буйлаб арзон ва бепул сайохат килишни хохласезми. Ман шу
              сайохат кампанияга 2020 йилда 13 сентябрь ойи азо сайохатчи болиб
              кушилдим. Сизларни хам шу сайохат кампанияга таклиф киламан сизлар
              хам тез орада дуне буйлаб арзон ва бепул сайохат килишиз мумкин.
              БУ мани бринчи сайохатим Араб амирлиги буйлаб 7 кечаю 8 кун
              сайохат бизани сайохатлар денгиз оркали болади. Бир борганда 4-5
              давлат бир нечта шахарларини куриб келишиз мумкин. БУ одий
              сайохатан фарки сиз чемодан кутариб юрмесиз, шахардан шахарга
              юрмесиз, еб ичиш, етиб туриш, хар хил уйингохлар, аква парк,
              басейнлар, хамаси бепул узиз йигиб борган маблагиз ичида. Бундай
              имконият хеч кайси фирма еки кампанияда йок. Бундай имкониятан
              фойдаланиб колинг.
            </p>
          </div>
          <div className="section__right">
            <img src={require("../../assets/WithImg.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default With;
