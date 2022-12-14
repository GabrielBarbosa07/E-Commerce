import Cart from "./Cart";
import "./NewArrivals.css";

const NewArrivals = () => {
  return (
    <>
      <section className="NewArrivals bg-none">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
              <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" />
              <h2>Novos Produtos </h2>
            </div>
            <div className="heading-right row">
              <span>Ver Todos</span>
              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>

           <Cart /> 
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
