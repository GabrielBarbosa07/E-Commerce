import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from "./pages/Pages";
import { Data } from "./components/FlashDeals/Data";
import { useState } from "react";

function App() {
  const { productItems } = Data;

  const [cartItem, setCartItem] = useState([]);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Pages productItems={productItems} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
