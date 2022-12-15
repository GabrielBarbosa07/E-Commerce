import Ndata from "./Ndata";

const Cart = () => {
  return (
    <div className="content grid product">
      {Ndata.map(({ cover, name, price }, index) => {
        return (
          <div className="box" key={index}>
            <div className="img">
              <img src={cover} alt="" />
            </div>
            <h4>{name}</h4>
            <span>R$ {price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
