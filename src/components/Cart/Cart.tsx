//Melhorar a tipagem depois
const Cart = ({ cartItems }:any) => {
  return (
    <section className="cart-items">
      <div className="container d_flex">
        <div className="cart_details">
          {cartItems.length === 0 && (
            <h1 className="no-items product">
              Nenhum item foi adicionado ao carrinho
            </h1>
          )}

          {cartItems.map((item:any) => {
            // const productQty = item.price * item.productQty;

            return (
              <div className="cart-list product d_flex">
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cart;
