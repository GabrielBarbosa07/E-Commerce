import AppleLogo from "/assets/images/shopImages/CatgLogos/appleLogo.svg"
import SamsungLogo from "/assets/images/shopImages/CatgLogos/samsungLogo.svg"
import HuaweiLogo from "/assets/images/shopImages/CatgLogos/huaweiLogo.png"
import AsusLogo from "/assets/images/shopImages/CatgLogos/asusLogo.svg"
import XiaomiLogo from "/assets/images/shopImages/CatgLogos/xiaomiLogo.svg"
import SonyLogo from "/assets/images/shopImages/CatgLogos/sonyLogo.svg"
import GoogleLogo from "/assets/images/shopImages/CatgLogos/googleLogo.svg"

const Catg = () => {
  const data = [
    {
      cateImg: AppleLogo,
      cateName: "Apple",
    },
    {
      cateImg: SamsungLogo,
      cateName: "Samsung",
    },
    {
      cateImg: HuaweiLogo,
      cateName: "Huawei",
    },
    {
      cateImg: AsusLogo,
      cateName: "Asus",
    },
    {
      cateImg: XiaomiLogo,
      cateName: "Xiaomi",
    },
    {
      cateImg: GoogleLogo,
      cateName: "Google",
    },
  ];
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Marcas</h1>
          <h1>Lojas</h1>
        </div>
        {data.map(({ cateImg, cateName }, index) => {
          return (
            <div className="box center" key={index}>
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
