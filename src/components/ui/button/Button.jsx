import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full mb-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:shadow-md px-4 border border-blue-500 hover:border-transparent rounded"
    >
      {text}
    </button>
  );
};

export default Button;
