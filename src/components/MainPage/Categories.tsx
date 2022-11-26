import fashion from "../../assets/images/categoryIcons/fashion.png";
import eletronic from "../../assets/images/categoryIcons/eletronic.png";
import car from "../../assets/images/categoryIcons/car.png";
import HomeAndGarden from "../../assets/images/categoryIcons/home_garden.png";
import gift from "../../assets/images/categoryIcons/gift.png";
import music from "../../assets/images/categoryIcons/music.png";
import healthAndBeauty from "../../assets/images/categoryIcons/health_beauty.png";
import pets from "../../assets/images/categoryIcons/pets.png";
import babyToys from "../../assets/images/categoryIcons/baby_toys.png";
import groceries from "../../assets/images/categoryIcons/groceries.png";
import books from "../../assets/images/categoryIcons/books.png";
const Categories = () => {
  const data = [
    {
      cateImg: fashion,
      cateName: "Fashion",
    },
    {
      cateImg: eletronic,
      cateName: "Eletrônico",
    },
    {
      cateImg: car,
      cateName: "Carros",
    },
    {
      cateImg: HomeAndGarden,
      cateName: "Casa & Jardim",
    },
    {
      cateImg: gift,
      cateName: "Presente",
    },
    {
      cateImg: music,
      cateName: "Música",
    },
    {
      cateImg: healthAndBeauty,
      cateName: "Saúde & Beleza",
    },
    {
      cateImg: pets,
      cateName: "Pets",
    },
    {
      cateImg: babyToys,
      cateName: "Brinquedos para bebê",
    },
    {
      cateImg: groceries,
      cateName: "Mantimentos",
    },
    {
      cateImg: books,
      cateName: "Livros",
    },
  ];

  return (
    <div className="category">
      {data.map(({ cateImg, cateName }, idx) => {
        return (
          <div className="box f_flex" key={idx}>
            <img src={cateImg} alt="" />
            <span>{cateName}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
