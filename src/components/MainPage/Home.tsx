import Categories from "./Categories";
import Slider from "./Slider";
import "./Home.css";

const Home = ({cartItem}:any) => {
  return (
    <>
      <section className="home" {...cartItem}>
        <div className="container d_flex mtop">
          <Categories />
          <Slider />
        </div>
      </section>
    </>
  );
};

export default Home;
