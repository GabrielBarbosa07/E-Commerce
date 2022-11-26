import React from "react";
import logo from "../../assets/images/logo.svg";
//Melhorar a tipagem depois
const Search = ({ cartItem }:any) => {
  window.addEventListener("scroll", () => {
    const search = document.querySelector(".search");
    search?.classList.toggle("active", window.scrollY > 100);
  });

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <img src={logo} alt="" />
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Busque por algum produto..." />
            <span>Categorias</span>
          </div>

          <div className="icon flex-end width">
            <i className="fa fa-user icon-circle"></i>
            <div className="cart">
              <a href="/carrinho">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{cartItem.length === 0 ? 0 : cartItem.length}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
