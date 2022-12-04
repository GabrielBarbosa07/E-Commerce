import TopCart from "./TopCart";
import "./styles.css";

const TopCate = () => {
  return (
    <>
      <section className="topCate background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
              <i className="fa-solid fa-border-all"></i>
              <h2>Top Categorias</h2>
            </div>

            <div className="heading-right row">
              <span>Ver Todas</span>
              <i className="fa fa-caret-right"></i>
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  );
};

export default TopCate;
