const Catg = () => {
  const data = [
    {
      cateImg: "",
      cateName: "Apple",
    },
    {
      cateImg: "",
      cateName: "Samsung",
    },
    {
      cateImg: "",
      cateName: "Oppo",
    },
    {
      cateImg: "",
      cateName: "Vivo",
    },
    {
      cateImg: "",
      cateName: "Redmi",
    },
    {
      cateImg: "",
      cateName: "Sony",
    },
  ];
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map(({ cateImg, cateName }, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={cateImg} alt="" />
              <span>{cateName}</span>
            </div>
          );
        })}
        <div className="box box2">
          <button>Ver todas as marcas</button>
        </div>
      </div>
    </>
  );
};

export default Catg;
