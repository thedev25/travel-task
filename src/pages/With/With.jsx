import React from "react";
import "./With.css";

function With() {
  return (
    <div className="container">
      <div className="main__with">
        <div className="main__bg">
          <div className="bg__decs">
            <h3>Anvar Rahimov bilan!</h3>
            <button>Qani ketdik!</button>
          </div>
        </div>
        <div className="main__section">
          <div className="section__left">
            <h2>
              Eng maroqli otkazgan <br /> onlarim!
            </h2>

            <p>
              Discover the Blue OceanTravel Design difference: EXPLORE PLANNING
              SERVICES <br /> When every morning feels like a mad dash to get
              the kids out the door <br /> …When every afternoon ends with you
              playing family chauffeur, chef, and <br /> homework enforcer …When
              you can’t remember the last moment your family <br /> had
              unstructured, unscheduled, unhurried together{" "}
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
