import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { CartContext } from "../../contexts/CartContext/CartContext";
//Melhorar a tipagem depois
const Search = () => {
  const { cartItems } = useContext(CartContext);

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
              <Link to="/carrinho">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{cartItems.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
