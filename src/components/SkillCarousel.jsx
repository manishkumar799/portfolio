import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHtml5,FaCss3 ,FaReact ,FaNodeJs  } from "react-icons/fa";

const SkillCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of icons shown at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed of automatic sliding
  };

  return (
    <Slider {...settings}>
      <div>
        <FaHtml5 size={100} />
      </div>
      <div>
        <FaCss3 size={100} />
      </div>
      <div>
        <FaReact  size={100} />
      </div>
      <div>
        <FaNodeJs  size={100} />
      </div>
      <div>
        <FaHtml5 size={100} />
      </div>
      <div>
        <FaHtml5 size={100} />
      </div>
      <div>
        <FaHtml5 size={100} />
      </div>
      <div>
        <FaHtml5 size={100} />
      </div>
      {/* Add more skill icons and labels as needed */}
    </Slider>
  );
};

export default SkillCarousel;
