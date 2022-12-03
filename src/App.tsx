import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Pages from "./pages/Pages";
import { Data } from "./components/FlashDeals/Data";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./contexts/CartContext/CartContext";

function App() {
  const { productItems } = Data;

  return (
    <>
      <CartProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Pages productItems={productItems} />
            </Route>
            <Route exact path="/carrinho">
              <Cart />
            </Route>
          </Switch>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
