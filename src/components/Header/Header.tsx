import "./Header.css"
import Head from "./Head";
import NavBar from "./NavBar";
import Search from "./Search";
//Melhorar a tipagem depois
const Header = ({cartItem}:any) => {
  return (
    <>
      <Head />
      <Search cartItem={cartItem} />
      <NavBar />
    </>
  );
};

export default Header;
