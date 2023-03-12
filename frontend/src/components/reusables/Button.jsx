import React from "react";

const Button = (props) => {
  return (
    <button className="bg-pink-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-pink-800 transition ease-in duration-300">
      {props.children}
    </button>
  );
};

export default Button;
