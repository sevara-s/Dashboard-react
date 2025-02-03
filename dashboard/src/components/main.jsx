import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./main.css";
import plus from "../assets/svgs/plus.svg";
import search from "../assets/svgs/search.svg";
import ran from "../assets/svgs/ran.svg";
import example from "../assets/svgs/example.svg";
import edit from "../assets/svgs/edit.svg";
import del from "../assets/imgs/del.png";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category, detCategory] = useState("");
  const [price, setPrice] = useState("");
  const [info, setInfo] = useState("");
  const [editI, setEdit] = useState(null);
  const Api = "https://676e39ccdf5d7dac1cca000c.mockapi.io/dashboard";

  useEffect(() => {
    axios
      .get(Api)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // delete funciton:

  const delProduct = (id) => {
    axios
      .delete("https://676e39ccdf5d7dac1cca000c.mockapi.io/dashboard/${product.id}"
      )
      .then(() => {
        setProducts(products.filter((product) => product.id != id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // edit function
  const EditProducts = () => {
    if (editI) {
      axios
        .put(Api, {
          name,
          img: image,
          category,
          price,
          info,
        })
        .then((response) => {
          setProducts(
            products.map((products) =>
              product.id === response.data.id ? response.data : product
            )
          );
          setEdit(null);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <>
      {/* section:main started */}
      <section className="main bg-[#edeff3] w-[100%]">
        {/* top part started */}
        <div className="main_top p-[20px] pt-0 flex items-center bg-[#fff]">
          {/* btn add */}
          <div className="btn_add flex items-center gap-[10px]   p-[25px] ">
            <div className="adding_new w-[50px] h-[50px] flex items-center justify-center rounded-[50%] bg-[#20d472]">
              <button>
                <img src={plus} alt="" />
              </button>
            </div>
            <p className="font-[600] text-[12px] text-[#2d3a45]">
              Yangi maxsulot qo’shish
            </p>
          </div>
          {/* btn add */}

          {/* search and filter */}
          <div className="search_filter p-[25px] flex items-center gap-[60px]">
            {/* search */}
            <div className="search flex items-center bg-[#edeff3] p-[15px] rounded-[24px] w-[300px] h-[48px] ">
              <input
                className="outline-none"
                type="search"
                placeholder="Qidirish"
              />
              <img src={search} alt="" />
            </div>
            {/* search */}

            {/* filter */}
            <div className="filter flex items-center justify-center bg-[#edeff3] w-[48px] h-[48px] rounded-[24px]">
              <div className="filter1 flex items-center justify-center bg-[#fff] w-[36px] h-[36px] rounded-[18px]">
                <img src={ran} alt="" />
              </div>
            </div>
          </div>
          {/* top part ended */}

          {/*section:category started  */}
        </div>
        <section className="category_sec mt-[30px] flex items-center justify-between p-[20px] bg-[#fff]">
          <p className="font-[700] text-[11px] text-[#2d3a45]">Maxsulot</p>
          <p className="font-[700] text-[11px] text-[#2d3a45]">Kategoriya</p>
          <p className="font-[700] text-[11px] text-[#2d3a45]">Narxi</p>
          <p className="font-[700] text-[11px] text-[#2d3a45]">Qo’shimcha</p>
          <p className="font-[700] text-[11px] text-[#2d3a45]">ACTION</p>
        </section>
        {/* section:category ended */}

        {/* section:products */}
        <div className="products mt-[30px] p-[20px] flex flex-col gap-[15px]">
          {/* product1 */}
          {products.map((product1) => (
            <div
              key={product1.id}
              className="product1 flex items-center justify-between "
            >
              <div className="product_name flex items-center gap-[15px]">
                <img src={example} alt="" />
                <p className="font-[400] text-[13px] text-[#2d3a45]">
                  {product1.name}
                </p>
              </div>
              <p className="font-[400] text-[13px] text-[#2d3a45]">
                {product1.category}
              </p>
              <p className="font-[400] text-[13px] text-[#2d3a45]">
                {product1.price} UZS
              </p>
              <p className="font-[400] text-[13px] text-[#2d3a45]">
                {product1.info}
              </p>
              <div className="action flex items-center gap-[10px]">
                {/* edit */}
                <div className="filter flex items-center justify-center bg-[#edeff3] w-[40px] h-[40px] rounded-[24px]">
                  <div className="filter1 flex items-center justify-center bg-[#fff] w-[32px] h-[32px] rounded-[18px]">
                    <img src={edit} alt="" />
                  </div>
                </div>
                {/* delete */}
                <div
                  onClick={() => delProduct(product1.id)}
                  className="filter flex items-center justify-center bg-[#edeff3] w-[40px] h-[40px] rounded-[24px]"
                >
                  <div className="filter1 flex items-center justify-center bg-[#fff] w-[32px] h-[32px] rounded-[18px]">
                    <img src={del} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Main;
