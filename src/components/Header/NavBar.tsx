import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="categories d_flex">
            <span className="fa-solid fa-border-all"></span>
            <h4>
              Categorias <i className="fa fa-chevron-down"></i>
            </h4>
          </div>

          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link c_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pages">Paginas</Link>
              </li>
              <li>
                <Link to="/user">Conta do usuário</Link>
              </li>
              <li>
                <Link to="/vendor">Conta do fornecedor</Link>
              </li>
              <li>
                <Link to="/track">Acompanhar meu pedido</Link>
              </li>
              <li>
                <Link to="/contact">Contato</Link>
              </li>
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fa-solid fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
