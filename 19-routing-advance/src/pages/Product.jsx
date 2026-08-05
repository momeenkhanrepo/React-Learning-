import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="flex items-center gap-7 justify-center py-2.5 text-xl">
        <Link to="/product/men">Men</Link>
        <Link to="/product/women">Women</Link>
        <Link to="/product/kids">Kids</Link>
      </div>
      <h1>Product Page</h1>
    </div>
  );
};

export default Product;
