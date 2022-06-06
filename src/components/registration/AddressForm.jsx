import React from "react";

const AddressForm = ({ city, setCity, address, setAddress, addressNum, setAddressNum, zipCode, setZipCode }) => {
  

  return (
    <>
      <div className="mb-6 flex flex-row gap-2">
        <input
          type="text"
          className="form-control block w-1/3 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="City"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <input
          type="text"
          className="form-control block w-1/3 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Street"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </div>
      <div className="mb-4 flex flex-row gap-2">
        <input
          type="text"
          className="form-control block w-1/3 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Address number"
          value={addressNum}
          onChange={e => setAddressNum(e.target.value)}
        />
        <input
          type="text"
          className="form-control block w-1/6 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Zip"
          value={zipCode}
          onChange={e => setZipCode(e.target.value)}
        />
      </div>
    </>
  );
};

export default AddressForm;
