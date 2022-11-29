import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Pages from "./pages/Pages";
import { Data } from "./components/FlashDeals/Data";
import Cart from "./components/Cart/Cart";

export interface CartItemProps {
  id: number;
  discount: number;
  cover: string;
  name: string;
  price: number;
  qty: number;
}

export interface CartProps extends CartItemProps {
  product?: CartItemProps;
  cartItems?: CartItemProps[];
  decreaseQty?: any;
  addToCart?: any | void;
}

function App() {
  const { productItems } = Data;
  const [cartItems, setCartItem] = useState<CartProps[]>([]);

  const addToCart = (product: CartItemProps) => {
    const productExit = cartItems.find(
      (item: CartItemProps) => item.id === product.id
    );

    if (productExit) {
      setCartItem(
        cartItems.map((item: CartProps) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : { ...item, qty: item.qty }
        )
      );
    } else {
      setCartItem([...cartItems, { ...product, qty: 1 }]);
    }
  };

  return (
    <>
      <Router>
        <Header cartItems={cartItems} />
        <Switch>
          <Route exact path="/">
            <Pages productItems={productItems} addToCart={addToCart} />
          </Route>
          <Route exact path="/carrinho">
            <Cart
              cartItems={cartItems}
              addToCart={addToCart}
              id={0}
              discount={0}
              cover={""}
              name={""}
              price={0}
              qty={0}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
