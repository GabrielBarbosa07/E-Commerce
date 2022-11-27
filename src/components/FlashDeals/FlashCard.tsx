import Slider from "react-slick";

interface ProductItemsProps {
  id: number;
  discount: number;
  cover: string;
  name: string;
  price: number;
  count: number;
}

const NextArrow = ({ onClick }: any) => {
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};

const PrevArrow = ({ onClick }: any) => {
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};

const FlashCard = ({ productItems }: any) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItem: ProductItemsProps, addToCart: any) => {
          return (
            <div className="box" key={productItem.id}>
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{productItem.discount} % Off</span>
                  <img src={productItem.cover} alt="" />

                  <div className="product-like" data-index={productItem.id}>
                    <label>{productItem.count}</label> <br />
                    <i
                      className="fa-regular fa-heart"
                      onClick={(e: any) => {
                        const iParent = e.target.parentNode;

                        const currentTarget = e.currentTarget;
                        const firstChild = iParent.firstChild;

                        currentTarget.classList.toggle("i-red");

                        if (currentTarget.classList.contains("i-red")) {
                          firstChild.textContent = productItem.count + 1;
                        } else {
                          firstChild.textContent = productItem.count;
                        }
                      }}
                    ></i>
                  </div>
                </div>

                <div className="product-details">
                  <h3>{productItem.name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>

                  <div className="price">
                    <h4>{productItem.price}.00</h4>
                    <button onClick={() => addToCart(productItem)}>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default FlashCard;
