import React from "react";

const Button = ({ text, onClick, textColor }) => {
  return (
    <>
      {textColor === null ? (
        <button
          onClick={onClick}
          className="w-full mb-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:shadow-md px-4 border border-blue-500 hover:border-transparent rounded"
        >
          {text}
        </button>
      ) : (
        <button
          onClick={onClick}
          className="w-full mb-2 bg-transparent hover:bg-blue-500 font-semibold hover:shadow-md px-4 border hover:border-transparent rounded"
          style={{ color: `#${textColor}` }}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
