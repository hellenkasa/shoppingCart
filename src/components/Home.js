import React, { useEffect, useState } from "react";
import Header from "./Header";
import Products from "./Products";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      const products = data.products;
      setProducts(products);
    } catch (error) {
      console.log("Error Occured");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header></Header>
      <div className=" flex flex-wrap bg-gray-100">
        {products.map((p) => (
          <Products key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
