import { useState } from "react";

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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/pages">Paginas</a>
              </li>
              <li>
                <a href="/user">Conta do usuário</a>
              </li>
              <li>
                <a href="/vendor">Conta do fornecedor</a>
              </li>
              <li>
                <a href="/track">Acompanhar meu pedido</a>
              </li>
              <li>
                <a href="/contact">Contato</a>
              </li>
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
