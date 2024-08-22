import React from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router";
import { logo } from "../utils/constants";
const Header = () => {
  const navigate = useNavigate();
  const products = useSelector((data) => data.cart.items);
  const productCount = products.length;

  const handleCart = () => {
    navigate("/shoppingCart");
  };

  return (
    <div className="flex border items-center justify-between h-25">
      <img src={logo} alt="header" className="w-32 mt-3"></img>
      <div className="flex items-center mx-20">
        <p className="font-serif text-lg">Cart</p>
        <FaShoppingCart className="text-black mr-4" />
        <p className="cursor-pointer" onClick={handleCart}>
          ({productCount})
        </p>
      </div>
    </div>
  );
};

export default Header;
