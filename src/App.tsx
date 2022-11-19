import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          {/* <Route exact path="/about" component={<About/>} /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
