import Discount from "../components/Discount/Discount";
import FlashDeals from "../components/FlashDeals/FlashDeals";
import Home from "../components/MainPage/Home";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import Shop from "../components/Shop/Shop";
import TopCate from "../components/Top/TopCate";

const Pages = ({ productItems }: any) => {
  return (
    <>
      <Home />
      <FlashDeals productItems={productItems} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop/>
    </>
  );
};

export default Pages;
