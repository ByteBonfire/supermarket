import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bannerdata from "./Bannerdata";
import "./banner.css";

const Banner = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {Bannerdata.map((dataa, index) => {
          return (
            <div>
              <div>
                <img className="image-slider" src={dataa.image} alt="" />
                <div class="slide-desc">
                  <p>{dataa.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      {/* <ul id="demo1">
        <li>
          <img src="assets/images/11.jpg" alt="" />

          <div class="slide-desc">
            <h3>Buy Rice Products Are Now On Line With Us</h3>
          </div>
        </li>
        <li>
          <img src="assets/images/22.jpg" alt="" />
          <div class="slide-desc">
            <h3>Whole Spices Products Are Now On Line With Us</h3>
          </div>
        </li>

        <li>
          <img src="assets/images/44.jpg" alt="" />
          <div class="slide-desc">
            <h3>Whole Spices Products Are Now On Line With Us</h3>
          </div>
        </li>
      </ul> */}
    </div>
  );
};

export default Banner;
