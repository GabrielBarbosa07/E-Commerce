import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Tdata from "./Tdata";

const TopCart = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        {Tdata.map(({ name, desc, cover }, index) => {
          return (
            <>
              <div className="box product" key={index}>
                <div className="nametop d_flex">
                  <span className="tleft">{name}</span>
                  <span className="tright">{desc}</span>
                </div>
                <div className="img">
                  <img src={cover} alt="" />
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default TopCart;
