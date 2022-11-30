import "./Header.css"
import Head from "./Head";
import NavBar from "./NavBar";
import Search from "./Search";
//Melhorar a tipagem depois
const Header = () => {
 
  return (
    <>
      <Head />
      <Search />
      <NavBar />
    </>
  );
};

export default Header;
