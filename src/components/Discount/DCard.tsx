import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ddata from "./Ddata";
import "../NewArrivals/NewArrivals.css";

const Dcard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      {Ddata.map(({ cover, name, price }) => {
        return (
          <div className="product" key={cover}>
            <div className="box">
              <div className="img">
                <img src={cover} alt="" width="100%" />
              </div>
              <h4>{name}</h4>
              <span>{price}</span>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default Dcard;
