import { CartItemProps } from "../../contexts/CartContext/CartContext";
import FlashCard from "./FlashCard";


interface FlashDealsProps {
  productItems: CartItemProps;
}

const FlashDeals = ({ productItems }: FlashDealsProps) => {
  return (
    <>
      <section className="flash background">
        <div className="container">
          <div className="heading f_flex">
            <i className="fa fa-bolt"></i>
            <h1>Flash Deals</h1>
          </div>
          <FlashCard productItems={productItems} />
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
