import React from "react";

const Filter = ({ restaurants, setRestaurants }) => {
  const filterByCity = (e) => {
    const searchTerm = e.target.value;

    if (searchTerm !== "") {
      const filteredRestaurants = restaurants.filter(
        (x) =>
          x?.address?.city?.name
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase()) > -1
      );
      setRestaurants(filteredRestaurants);
    }

    if (searchTerm === "") {
      setRestaurants(restaurants);
    }
  };

  const filterByName = (e) => {
    const searchTerm = e.target.value;

    if (searchTerm !== "") {
      const filteredRestaurants = restaurants.filter(
        (x) => x?.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      );
      setRestaurants(filteredRestaurants);
    }

    if (searchTerm === "") {
      setRestaurants(restaurants);
    }
  };

  const filterByEmail = (e) => {
    const searchTerm = e.target.value;

    if (searchTerm !== "") {
      const filteredRestaurants = restaurants.filter(
        (x) => x?.email.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      );
      setRestaurants(filteredRestaurants);
    }

    if (searchTerm === "") {
      setRestaurants(restaurants);
    }
  };

  const filterByPIB = (e) => {
    const searchTerm = e.target.value;

    if (searchTerm !== "") {
      const filteredRestaurants = restaurants.filter(
        (x) => x?.pib.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      );
      setRestaurants(filteredRestaurants);
    }

    if (searchTerm === "") {
      setRestaurants(restaurants);
    }
  };

  return (
    <>
      <span>Filter by: </span>
      <input
        placeholder="City"
        type="text"
        onChange={(e) => filterByCity(e)}
        className='shadow appearance-none border rounded w-1/6 px-3 h-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
      />
      <input
        placeholder="Name"
        type="text"
        onChange={(e) => filterByName(e)}
        className='shadow appearance-none border rounded w-1/6 px-3 h-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
      />
      <input
        placeholder="Email"
        type="text"
        onChange={(e) => filterByEmail(e)}
        className='shadow appearance-none border rounded w-1/6 px-3 h-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
      />
      <input
        placeholder="PIB"
        type="text"
        onChange={(e) => filterByPIB(e)}
        className='shadow appearance-none border rounded w-1/6 px-3 h-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
      />
      {/* <button className="w-1/6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:shadow-md px-4 border border-blue-500 hover:border-transparent rounded">
              Filter
            </button> */}
    </>
  );
};

export default Filter;
