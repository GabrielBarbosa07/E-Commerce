import React from "react";

const TopCate = () => {
  return (
    <>
      <section className="topCat background">
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
        </div>
      </section>
    </>
  );
};

export default TopCate;
