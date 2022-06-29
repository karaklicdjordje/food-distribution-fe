import React from "react";
import DisabledButton from "../button/DisabledButton";
import Button from '../button/Button';

// isEditable is prop that tells card component can data inside it be editable or not

const Card = ({ title, data, isEditable }) => {
  function handleSave() {
    console.log("button clicked");
  }

  return (
    <div className="flex flex-col w-1/4 h-64 border-gray-300 border-2 rounded-md shadow-lg px-2 overflow-y-scroll">
      <span className="text-2xl text-center">{title}</span>
      <hr />
      {Array.isArray(data) && data.length > 0 && (
        <ul className="p-2">
          {data.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      )}

      {data?.role === "ROLE_PERSON" && (
        <ul className="p-2">
          <li className="flex flex-row gap-3">
            Username
            <input
              name="username"
              id="username"
              className="h-5"
              value={data.username}
            />
          </li>
          <li>Name: {data.name}</li>
          <li>Surrname: {data.surname}</li>
          <li>Email: {data.email}</li>
          <li>JMBG: {data.jmbg}</li>
          <li>Address: {data.address.city.name}</li>
          <li>
            Street: {data.address.street} {data.address.addressNumber}
          </li>
        </ul>
      )}

      {isEditable ? (
        <Button text="Save changes" onClick={handleSave} />
      ) : (
        <DisabledButton text="Save changes" />
      )}
    </div>
  );
};

export default Card;
