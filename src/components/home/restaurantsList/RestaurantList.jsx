import React from "react";

const RestaurantList = ({
  restaurants,
  subscribe,
  isLoggedIn,
  seeRestaurant,
}) => {
  return (
    <>
      {restaurants.map((r) => (
        <div
          className="md:w-1/4 border-gray-300 border-2 rounded-md shadow-lg px-2 flex flex-col justify-between"
          key={r.id}
        >
          <span className="py-1">Name: {r.name}</span>
          <span className="py-1">pib: {r.pib}</span>
          <span className="py-1">email: {r.email}</span>
          <span className="py-1">
            Address: {r?.address?.city.name}, Street: {r?.address?.street}{" "}
            {r?.address?.city?.zipCode}
          </span>

          {!isLoggedIn ? (
            <button className="w-full animate-bounce mt-2 bg-gray text-grey font-semibold hover:shadow-md px-4 hover:border-transparent rounded opacity-75">
              Log in to subscribe
            </button>
          ) : (
            <button
              className="w-full animate-bounce mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:shadow-md px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => subscribe(r)}
            >
              Subscribe
            </button>
          )}

          <button
            className="w-full mt-2 mb-1 bg-transparent hover:bg-slate-500
                 text-slate-700 font-semibold hover:shadow-md px-4 border border-blue-500
                  hover:border-transparent rounded"
            onClick={() => seeRestaurant(r)}
          >
            See More
          </button>
        </div>
      ))}
    </>
  );
};

export default RestaurantList;
