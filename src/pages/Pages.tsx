import FlashDeals from "../components/FlashDeals/FlashDeals";
import Home from "../components/MainPage/Home";

const Pages = ({ productItems }: any) => {
  return (
    <>
      <Home />
      <FlashDeals productItems={productItems} />
    </>
  );
};

export default Pages;
