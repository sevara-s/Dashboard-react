import React, { useState, useEffect } from "react";
import axios from "axios";
import "./main.css";
import plus from "../assets/svgs/plus.svg";
import example from "../assets/svgs/example.svg";
import edit from "../assets/svgs/edit.svg";
import del from "../assets/imgs/del.png";
import AddProducts from "./utils/add";  

const Main = () => {
  const [products, setProducts] = useState([]);
  const [isAddProductVisible, setIsAddProductVisible] = useState(false);   
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [info, setInfo] = useState("");
  const [EditProductsId, setEditProductId] = useState(null);
  const Api = "https://676e39ccdf5d7dac1cca000c.mockapi.io/dashboard";

  useEffect(() => {
    axios
      .get(Api)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const delProduct = (id) => {
    axios
      .delete(`${Api}/${id}`)
      .then(() => {
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((error) => console.log(error));
  };

  const EditProducts = (id) => {
    axios
      .put(`${Api}/${id}`, {
        name,
        img: image,
        category,
        price,
        info,
      })
      .then((response) => {
        setProducts(
          products.map((product) =>
            product.id === id ? response.data : product
          )
        );
        setEditProductId(null);  
      })
      .catch((error) => console.error(error));
  };

  const handleEdit = (product) => {
    setEditProductId(product.id);
    setName(product.name);
    setCategory(product.category);
    setPrice(product.price);
    setInfo(product.info);
  };

  const saveEdit = (id) => {
    EditProducts(id);
  };

  const toggleAddProduct = () => {
    setIsAddProductVisible(!isAddProductVisible);  
  };

  
  const handleAddProduct = () => {
    const newProduct = {
      name,
      img: image,
      category,
      price,
      info,
    };

    axios
      .post(Api, newProduct)  
      .then((response) => {
        setProducts([...products, response.data]);  
        setIsAddProductVisible(false);  
        setName("");   
        setImage("");
        setCategory("");
        setPrice("");
        setInfo("");
      })
      .catch((error) => console.error("Error adding product:", error));
  };

  return (
    <section className="main bg-[#edeff3] w-full">
      <div className="main_top p-5 pt-0 flex items-center bg-white">
        <div className="btn_add flex items-center gap-2.5 p-6">
          <div
            className="adding_new w-12 h-12 flex items-center justify-center rounded-full bg-green-500"
            onClick={toggleAddProduct}  
          >
            <button>
              <img src={plus} alt="Add" />
            </button>
          </div>
          <p className="font-semibold text-xs text-gray-800">
            Yangi maxsulot qo’shish
          </p>
        </div>
      </div>

     
      <div
        className={`add-product-form-container ${
          isAddProductVisible ? "open" : ""
        }`}
      >
        <AddProducts
          name={name}
          setName={setName}
          image={image}
          setImage={setImage}
          category={category}
          setCategory={setCategory}
          price={price}
          setPrice={setPrice}
          info={info}
          setInfo={setInfo}
          handleAddProduct={handleAddProduct}  
        />
      </div>

      <section className="category_sec mt-7 flex items-center justify-between p-5 bg-white">
        <p className="font-bold text-xs text-gray-800">Maxsulot</p>
        <p className="font-bold text-xs text-gray-800">Kategoriya</p>
        <p className="font-bold text-xs text-gray-800">Narxi</p>
        <p className="font-bold text-xs text-gray-800">Qo’shimcha</p>
        <p className="font-bold text-xs text-gray-800">ACTION</p>
      </section>

      <div className="products mt-7 p-5 flex flex-col gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="product1 flex items-center justify-between bg-white p-4 rounded-md shadow-md mb-4"
          >
            {EditProductsId === product.id ? (
              <div className="edit-product-form w-full space-y-4">
                <input
                  className="border border-gray-300 rounded-md p-2 text-sm text-gray-800 w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Product Name"
                />
                <input
                  className="border border-gray-300 rounded-md p-2 text-sm text-gray-800 w-full"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Category"
                />
                <input
                  className="border border-gray-300 rounded-md p-2 text-sm text-gray-800 w-full"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Price"
                />
                <textarea
                  className="border border-gray-300 rounded-md p-2 text-sm text-gray-800 w-full"
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                  placeholder="Additional Info"
                />
                <div className="flex justify-between">
                  <button
                    className="bg-blue-500 text-white p-2 rounded-md"
                    onClick={() => saveEdit(product.id)}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-500 text-white p-2 rounded-md"
                    onClick={() => setEditProductId(null)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="product-info flex items-center justify-between w-full">
                <div className="product_name flex items-center gap-4">
                  <img src={example} alt="Product" />
                  <p className="text-sm text-gray-800">{product.name}</p>
                </div>
                <p className="text-sm text-gray-800">{product.category}</p>
                <p className="text-sm text-gray-800">{product.price} UZS</p>
                <p className="text-sm text-gray-800">{product.info}</p>
                <div className="action flex items-center gap-2.5">
                  <div className="filter flex items-center justify-center bg-gray-200 w-10 h-10 rounded-3xl">
                    <div className="filter1 flex items-center justify-center bg-white w-8 h-8 rounded-full">
                      <img
                        src={edit}
                        alt="Edit"
                        onClick={() => handleEdit(product)}  
                      />
                    </div>
                  </div>
                  <div
                    onClick={() => delProduct(product.id)}
                    className="filter flex items-center justify-center bg-gray-200 w-10 h-10 rounded-3xl"
                  >
                    <div className="filter1 flex items-center justify-center bg-white w-8 h-8 rounded-full">
                      <img src={del} alt="Delete" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;
