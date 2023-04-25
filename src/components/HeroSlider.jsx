import React from "react";
import Slider from "react-slick";
import heroSliderData from "../assets/fake-data/hero-slider"

const HeroSlider = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {heroSliderData.map((slide, index) => (
          <div key={index} className="slider__item">
            <div className="slider__item__image">
              <img src={slide.img} alt="" width="100%" height="500px"/>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
