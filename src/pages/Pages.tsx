import FlashDeals from "../components/FlashDeals/FlashDeals";
import Home from "../components/MainPage/Home";

const Pages = ({ productItems, addToCart }: any) => {
  return (
    <>
      <Home  />
      <FlashDeals productItems={productItems} addToCart={addToCart}/>
    </>
  );
};

export default Pages;
