import "./Header.css"
import Head from "./Head";
import NavBar from "./NavBar";
import Search from "./Search";
//Melhorar a tipagem depois
const Header = ({cartItems}:any) => {
  return (
    <>
      <Head />
      <Search cartItem={cartItems} />
      <NavBar />
    </>
  );
};

export default Header;
