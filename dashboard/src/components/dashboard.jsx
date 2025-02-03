import React from "react";
import "./dash.css";
import { useState } from "react";
import logo from "../assets/imgs/logo.png";
import d1 from "../assets/svgs/d1.svg";
import d2 from "../assets/svgs/d2.svg";
import d3 from "../assets/svgs/d3.svg";
import d4 from "../assets/svgs/d4.svg";
import d5 from "../assets/svgs/d5.svg";
import d6 from "../assets/svgs/d6.svg";
import d7 from "../assets/svgs/d7.svg";
import exit from "../assets/svgs/exit.svg";

const Dashboard = () => {
  const [categories, useCategories] = useState([
    {
      id: 1,
      img: d1,
      name: "Buyurtmalar",
    },
    {
      id: 2,
      img: d2,
      name: "Maxsulotlar",
    },
    {
      id: 3,
      img: d3,
      name: "Kategoriyalar",
    },
    {
      id: 4,
      img: d4,
      name: "Filiallar",
    },
    {
      id: 5,
      img: d5,
      name: "Mijozlar",
    },
    {
      id: 6,
      img: d6,
      name: "Xisobot",
    },
    {
      id: 7,
      img: d7,
      name: "Katalog",
    },
  ]);
  return (
    <>
      {/* section:dashboard started */}
      <section className="dashboard w-[300px] h-[100vh] bg-[#fff] flex flex-col gap-[45px]">
        {/* logo */}
        <div className="logo flex items-center gap-[15px] mt-[10px] p-[10px]">
          <img src={logo} alt="" />
          <div className="logo_name">
            <h5 className="font-[900] text-[16px] text-[#2d3a45]">Fast Food</h5>
            <p>Online maxsulot sotuvi</p>
          </div>
        </div>
        {/* logo */}

        {/* categories */}
        <div className="categories flex gap-[30px]">
          <div className="yellow_div"></div>
          <div className="all_items flex flex-col gap-[25px]">
            {categories.map((item1) => (
              <div
                key={item1.id}
                className="item1 flex items-center gap-[10px] w-[276px] h-[48px] rounded-[6px] hover:bg-[#fcb600] hover:text-[#fff] p-[15px]"
              >
                <div className="item_img w-[36px] h-[36px] rounded-[6px] bg-[#f6f6f6] flex items-center justify-center ">
                  <img src={item1.img} alt="" />
                </div>
                <p>
                  <a
                    className="font-[400] text-[15px] text-[#2d3a45s]"
                    href="#"
                  >
                    {item1.name}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* categories */}

        <div className="exit flex items-center gap-[15px] p-[15px]">
          <div className="item_img w-[36px] h-[36px] rounded-[6px] bg-[#f6f6f6] flex items-center justify-center ">
            <img src={exit} alt="" />
          </div>
          <p>
            <a className="font-[400] text-[16px] text-[#2d3a45]" href="#">
              Chiqish
            </a>
          </p>
        </div>
      </section>
      {/* section:dashboard ended */}
    </>
  );
};
export default Dashboard;
