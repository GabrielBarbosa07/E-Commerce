import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from "./pages/Pages";
import { Data } from "./components/FlashDeals/Data";
import { useState } from "react";

function App() {
  const { productItems } = Data;

  const [cartItem, setCartItem] = useState<any>([]);

  const addToCart = (product:any) => {
   
    const productExit = cartItem.find((item:any) => item.id === product.id)

    if (productExit) {
      setCartItem(cartItem.map((item:any) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }
  }

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Pages productItems={productItems} addToCart={addToCart} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
