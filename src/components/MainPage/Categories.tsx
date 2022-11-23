const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Fashion",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Eletrônico",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Carros",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Casa & Jardim",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Presente",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Música",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Saúde & Beleza",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Pets",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Brinquedos para bebê",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Mantimentos",
    },
    {
      cateImg: "./images/category/cat11.png",
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
