import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import Sdata from "./Sdata";

const ShopCart = () => {
  const [count, setCount] = useState(0);
  const { addToCart } = useContext(CartContext);
  const { shopItems } = Sdata;

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      {shopItems.map(({ name, price, id, cover, discount }) => {
        return (
          <div className="box" key={id}>
            <div className="product mtop">
              <div className="img">
                <span className="discount">{discount}% Off</span>
                <img src={cover} alt="" />
                <div className="product-like">
                  <label>{count}</label> <br />
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
              </div>
              <div className="product-details">
                <h3>{name}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>${price}.00 </h4>

                  <button onClick={() => addToCart(shopItems)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShopCart;
