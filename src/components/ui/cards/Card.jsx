import React from "react";

const Card = ({ title, data }) => {
  return (
    <div className="flex flex-col w-1/4 h-full border-gray-300 border-2 rounded-md shadow-lg px-2">
      <span className="text-2xl text-center">{title}</span>
      <hr />
      <ul className="p-2">
        {data.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
