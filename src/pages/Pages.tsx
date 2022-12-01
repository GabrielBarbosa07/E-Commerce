import FlashDeals from "../components/FlashDeals/FlashDeals";
import Home from "../components/MainPage/Home";
import TopCate from "../components/Top/TopCate";

const Pages = ({ productItems }: any) => {
  return (
    <>
      <Home />
      <FlashDeals productItems={productItems}  />
      <TopCate/>
    </>
  );
};

export default Pages;
