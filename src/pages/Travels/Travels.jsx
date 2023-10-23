import React from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./Travels.css";

function Travels() {
  return (
    <div className="travels">
      <div className="travels__bg">
        <div className="bg__text">
          <h2>Sayohatlarim</h2>
        </div>
      </div>
      <div className="carosusel">
        <Carousel
          plugins={[
            "centered",
            "infinite",
            "arrows",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
        >
          <div className="item">
            <img src={require("../../assets/CarouselImgOne.png")} />
            <h3>Hindiston</h3>
            <p>Bangladesh</p>
          </div>
          <div className="item">
            <img src={require("../../assets/CarouselImgTwo.png")} />
            <h3>Rassiya</h3>
            <p>Abrikosov</p>
          </div>
          <div className="item">
            <img src={require("../../assets/CarouselImgThree.png")} />
            <h3>Dubay</h3>
            <p>Amirlik</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Travels;
