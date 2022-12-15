import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import Sdata from "./Sdata";

const ShopCart = () => {
  const { addToCart } = useContext(CartContext);
  const { shopItems } = Sdata;

  return (
    <>
      {shopItems.map((shopItem) => {
        const { name, price, id, cover, discount, count } = shopItem;

        return (
          <div className="box" key={id}>
            <div className="product mtop">
              <div className="img">
                <span className="discount">{discount}% Off</span>
                <img src={cover} alt="" />
                <div className="product-like"> 
                  <label>{count}</label> <br />
                  <i className="fa-regular fa-heart" onClick={(e:any) => {
                    const iParent = e.target.parentNode;

                    const currentTarget = e.currentTarget;
                    const firstChild = iParent.firstChild;
              
                    currentTarget.classList.toggle("i-red");
              
                    if (currentTarget.classList.contains("i-red")) {
                      // const productLikedId = iParent.dataset.index;
                      firstChild.innerText = shopItem.count + 1;
                    } else {
                      firstChild.innerText = shopItem.count;
                    }
                  }}></i>
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
                  <h4>R$ {price}.00 </h4>

                  <button onClick={() => addToCart({...shopItem, qty: 0 })}>
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
