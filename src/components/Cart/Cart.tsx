import { useContext } from "react";
import {
  CartContext,
  CartItemProps,
} from "../../contexts/CartContext/CartContext";
import "./Cart.css";

const Cart = () => {
  const { addToCart, decreaseQty, cartItems, removeFromCart } =
    useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.qty * Number(item.price),
    0
  );

  return (
    <section className="cart-items">
      <div className="container d_flex">
        <div className="cart-details">
          {cartItems.length === 0 && (
            <h1 className="no-items product">Nenhum produto foi adicionado!</h1>
          )}

          {cartItems.map((item: CartItemProps) => {
            const productQty = item.qty * Number(item.price);

            return (
              <div className="cart-list product d_flex" key={item.id}>
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <h4>
                    R${item.price}.00 x {item.qty} =
                    <span> R${productQty}.00</span>
                  </h4>
                </div>
                <div className="cart-items-function">
                  <div className="removeCart">
                    <button onClick={() => removeFromCart(item)}>
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>

                  <div className="cartControl d_flex">
                    <button className="incCart" onClick={() => addToCart(item)}>
                      <i className="fa-solid fa-plus"></i>
                    </button>

                    <button
                      className="desCart"
                      onClick={() => decreaseQty(item)}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>
                  </div>
                </div>

                <div className="cart-item-price"></div>
              </div>
            );
          })}
        </div>

        <div className="cart-total product">
          <h2>Resumo do Carrinho</h2>
          <div className=" d_flex">
            <h4>Valor Total:</h4>
            <h3>R${totalPrice}.00</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
