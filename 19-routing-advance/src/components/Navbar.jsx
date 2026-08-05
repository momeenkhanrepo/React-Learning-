import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center  py-3.5 px-7 justify-between bg-fuchsia-700">
      <h2 className="text-xl font-bold">Shreyiansh</h2>
      <div className="flex gap-10">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
