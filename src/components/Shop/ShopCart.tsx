import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import Sdata from "./Sdata";

const ShopCart = () => {
  const [count, setCount] = useState(0);
  const { addToCart } = useContext(CartContext);
  const { shopItems } = Sdata;

  const increment = () => {
    setCount(count + 1);
  };

//  const wtf =  (e: any) => {
//   const iParent = e.target.parentNode;

//   const currentTarget = e.currentTarget;
//   const firstChild = iParent.firstChild;

//   // console.log(iParent.dataset.index);

//   currentTarget.classList.toggle("i-red");

//   if (currentTarget.classList.contains("i-red")) {
//     // const productLikedId = iParent.dataset.index;

//     firstChild.innerText = productItem.count + 1;
//   } else {
//     firstChild.innerText = productItem.count;
//   }
// }}

  return (
    <>
      {shopItems.map((shopItem) => {
        const { name, price, id, cover, discount, qty } = shopItem;

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
                  <h4>R${price}.00 </h4>

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
