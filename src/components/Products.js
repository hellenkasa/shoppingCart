import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../utils/cartSlice";

const Products = ({ product }) => {
  const dispatch = useDispatch();
  const { title, images, price, rating } = product;

  const handleAddCart = () => {
    dispatch(addCart({ ...product, quantity: 1 }));
  };
  return (
    <div className="flex border border-solid border-gray-300 w-full max-w-md p-4 m-2 bg-slate-100 rounded-lg shadow-lg">
      <img
        src={images}
        alt="Product"
        className="w-32 h-32 object-cover rounded-lg"
      />
      <div className="ml-4 flex flex-col justify-between">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-gray-700">Price: ${price}</p>
        <p className="text-gray-500">Rating: {rating}</p>
        <button
          className="border border-gray-600 rounded-lg p-2 mt-2"
          onClick={handleAddCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
