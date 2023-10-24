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
            <h3>Mening ismim Anvar Rahimov</h3>
            <p>
              There were a lot of incredible memories made on that trip, but the
              moment that stands out the most, funny enough, happened when we
              were riding the shuttle back to our Disney resort after a full day
              at the parks.I watched as my 14-year-old stepson leaned his head
              against the pole{" "}
              <span>
                {" "}
                and closed his eyes—he was completely tuckered out (do you know
                how hard it is to tucker out a 14-year-old?!). Mission
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
