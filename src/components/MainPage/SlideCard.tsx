import { Sdata } from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots: any) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };

  return (
    <>
      <Slider {...settings}>
        {Sdata.map(({ title, description, cover }, idx) => {
          return (
            <div className="box d_flex top" key={idx}>
              <div className="left">
                <h1>{title}</h1>
                <p>{description}</p>
                <button className="btn-primary">Visitar coleção</button>
              </div>

              <div className="right">
                <img src={cover} alt="" />
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default SlideCard;
