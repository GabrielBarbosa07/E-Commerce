import Catg from "./Catg";
import ShopCart from "./ShopCart";
import "./Shop.css";

const Shop = () => {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <Catg />

          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row f_flex">
                <h2>Smartphones</h2>
              </div>
              <div className="heading-right row ">
                <span>Ver Todos</span>
                <i className="fa-solid fa-caret-right"></i>
              </div>
            </div>
            <div className="product-content grid1">
              <ShopCart />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
