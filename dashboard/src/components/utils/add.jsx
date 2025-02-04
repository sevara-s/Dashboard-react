import React from "react";

const AddProducts = ({
  name,
  setName,
  image,
  setImage,
  category,
  setCategory,
  price,
  setPrice,
  info,
  setInfo,
  handleAddProduct,
}) => {
  return (
    <div className="add-product-form p-4">
      <h2 className="text-lg font-bold">Add New Product</h2>
      <input
        type="text"
        className="border border-gray-300 rounded-md p-2 mt-2 w-full"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="border border-gray-300 rounded-md p-2 mt-2 w-full"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        className="border border-gray-300 rounded-md p-2 mt-2 w-full"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        className="border border-gray-300 rounded-md p-2 mt-2 w-full"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <textarea
        className="border border-gray-300 rounded-md p-2 mt-2 w-full"
        placeholder="Product Info"
        value={info}
        onChange={(e) => setInfo(e.target.value)}
      />
      <button
        onClick={handleAddProduct}
        className="bg-blue-500 text-white p-2 mt-4 rounded-md"
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProducts;
