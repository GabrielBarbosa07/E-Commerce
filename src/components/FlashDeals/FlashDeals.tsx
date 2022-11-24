import FlashCard from "./FlashCard";

 interface ProductItemsProps {
  id: number;
  discount: number;
  cover: string;
  name: string;
  price: number;
}

interface FlashDealsProps{
  productItems: ProductItemsProps
}

const FlashDeals = ({ productItems }:FlashDealsProps) => {
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
