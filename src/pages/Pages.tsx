import { useContext } from "react";
import FlashDeals from "../components/FlashDeals/FlashDeals";
import Home from "../components/MainPage/Home";
import { CartContext } from "../contexts/CartContext/CartContext";

const Pages = ({ productItems, addToCart }: any) => {
  return (
    <>
      <Home />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
    </>
  );
};

export default Pages;
