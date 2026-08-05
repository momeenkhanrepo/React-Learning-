import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  let navigate = useNavigate();

  return (
    <div className="bg-fuchsia-500 flex justify-center">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-blue-500 px-5 py-2 rounded-xl m-3 cursor-pointer active:scale-95 text-lg font-semibold"
      >
        Return to Homepage
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-blue-500 px-5 py-2 rounded-xl m-3 cursor-pointer active:scale-95 text-lg font-semibold"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-blue-500 px-5 py-2 rounded-xl m-3 cursor-pointer active:scale-95 text-lg font-semibold"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
