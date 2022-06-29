import React from "react";

const DisabledButton = ({ text }) => {
  return (
    <button className="w-full mb-2 hover:cursor-not-allowed bg-transparent hover:bg-gray-500 text-black font-semibold hover:shadow-md px-4 border border-gray-500 hover:border-transparent rounded">
      {text}
    </button>
  );
};

export default DisabledButton;
