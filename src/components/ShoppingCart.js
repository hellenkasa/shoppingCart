import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { removeCart, updateQuantity } from "../utils/cartSlice";
import Header from "./Header";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const products = useSelector((data) => data.cart.items);
  const total = products.reduce((accum, item) => {
    accum = (Number(accum) + (item.price * item.quantity || 1)).toFixed(2);
    return accum;
  }, []);

  const handleRemove = (id) => {
    dispatch(removeCart(id));
  };

  const decrement = (id) => {
    const item = products.find((i) => i.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
    }
  };

  const increment = (id) => {
    const item = products.find((i) => i.id === id);
    if (item) {
      dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
    }
  };
  return (
    <div className="p-4">
      <Header />
      <h1 className="text-center text-2xl my-7 font-serif flex items-center justify-center ">
        Shopping Cart
        <FaShoppingCart className="ml-2" />
      </h1>
      <div className=" bg-gray-100 flex items-center justify-center absolute min-h-screen w-full pt-36 pb-8">
        <div className="border mb-96 -mt-32">
          {products.length > 0 ? (
            <>
              {products.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start bg-slate-50 p-4 w-30">
                  <img
                    src={item.images}
                    className="w-32 h-32 mr-4"
                    alt={item.title}
                  />
                  <div className="flex flex-col justify-between flex-grow mx-10">
                    <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                    <p className="text-sm mb-2">Price: ${item.price}</p>
                    <span>
                      <div>
                        <button
                          className="rounded-l bg-gray-300 hover:bg-gray-400 py-1 px-2"
                          onClick={() => decrement(item.id)}>
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          readOnly
                          value={item.quantity}
                          className="w-12 text-center px-2"></input>
                        <button
                          className="rounded-l bg-gray-300 hover:bg-gray-400 py-1 px-2"
                          onClick={() => increment(item.id)}>
                          +
                        </button>
                      </div>
                      <button
                        className="text-sm mb-2 m-3 border rounded-lg"
                        onClick={() => handleRemove(item.id)}>
                        Remove
                      </button>
                    </span>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <span className="text-center block p-4">Cart is Empty</span>
          )}
          {products.length > 0 ? (
            <h1 className="text-right p-2 mx-18 font-serif">
              Sub Total: ${total}
            </h1>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
