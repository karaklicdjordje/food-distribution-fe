import React from "react";
import AddressForm from "./AddressForm";

const CharityForm = () => {
  const [charity, setCharity] = React.useState({
    email: "",
    name: "",
    username: "",
    password: "",
  });
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [addressNum, setAddressNum] = React.useState("");
  const [zipCode, setZipCode] = React.useState("");

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setCharity({ ...charity, [name]: value });
  };

  const handleSubmit = () => {};
  return (
    <>
      <div className="mb-6">
        <input
          type="text"
          className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Email address"
          value={charity.email}
          name="email"
          onChange={(e) => onInputChange(e)}
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Name"
          value={charity.name}
          name="name"
          onChange={(e) => onInputChange(e)}
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Username"
          value={charity.username}
          name="username"
          onChange={(e) => onInputChange(e)}
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Password"
          value={charity.password}
          name="password"
          onChange={(e) => onInputChange(e)}
        />
      </div>

      <AddressForm
        city={city}
        setCity={setCity}
        address={address}
        setAddress={setAddress}
        addressNum={addressNum}
        setAddressNum={setAddressNum}
        zipCode={zipCode}
        setZipCode={setZipCode}
      />

      <div className="text-center lg:text-left">
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Register
        </button>
      </div>
    </>
  );
};

export default CharityForm;
