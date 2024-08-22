import React from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import { logo } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const products = useSelector((data) => data.cart.items);
  const productCount = products.length;

  const handleCart = () => {
    navigate("/shoppingCart");
  };

  const showCartDetails = location.pathname === "/";

  return (
    <div className="flex border items-center justify-between h-25">
      <img src={logo} alt="header" className="w-32 mt-3"></img>
      {showCartDetails && (
        <div className="flex items-center mx-20">
          <p className="font-serif text-lg">Cart</p>
          <FaShoppingCart className="text-black mr-4" />
          <p className="cursor-pointer" onClick={handleCart}>
            ({productCount})
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
