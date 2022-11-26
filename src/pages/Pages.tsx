import FlashDeals from "../components/FlashDeals/FlashDeals";
import Home from "../components/MainPage/Home";

const Pages = ({ productItems, cartItem, addToCart }: any) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart}/>
    </>
  );
};

export default Pages;
