import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import RestaurantService from "../services/restaurant.service";

const RESTAURANTS = [
  {
    id: 1,
    pib: "11111111",
    name: "picerija",
    email: "karaklicdjordje@gmail.com",
    users: [],
    address: {
      id: 1,
      city: {
        id: 1,
        name: "Beograd",
        zipCode: "21000",
      },
      street: "Balzakova",
      addressNumber: "4",
    },
  },
  {
    id: 20,
    pib: "11111111",
    name: "picerija",
    email: "karaklicdjordje@gmail.com",
    users: [],
    address: {
      id: 1,
      city: {
        id: 1,
        name: "Novi Sad",
        zipCode: "21000",
      },
      street: "Balzakova",
      addressNumber: "4",
    },
  },
  {
    id: 15,
    pib: "11111111",
    name: "Mali Princ",
    email: "karaklicdjordje@gmail.com",
    users: [],
    address: {
      id: 1,
      city: {
        id: 1,
        name: "Novi Sad",
        zipCode: "21000",
      },
      street: "Balzakova",
      addressNumber: "4",
    },
  },
  {
    id: 20,
    pib: "11111111",
    name: "picerija",
    email: "karaklicdjordje@gmail.com",
    users: [],
    address: {
      id: 1,
      city: {
        id: 1,
        name: "Novi Sad",
        zipCode: "21000",
      },
      street: "Balzakova",
      addressNumber: "4",
    },
  },
  {
    id: 5,
    pib: "11111111",
    name: "Mali Dukat",
    email: "sale@gmail.com",
    users: [],
    address: {
      id: 1,
      city: {
        id: 1,
        name: "Subotica",
        zipCode: "21000",
      },
      street: "Balzakova",
      addressNumber: "4",
    },
  },
];

const Homepage = () => {
  let navigate = useNavigate();
  const [restaurants, setRestaurants] = React.useState([]);

  // useEffect(() => {
  //   RestaurantService.getAllRestaurants().then((resp) => {
  //     setRestaurants(resp.data);
  //   });
  // }, []);

  useEffect(() => {
    setRestaurants(RESTAURANTS);
  }, []);

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
      setRestaurants(RESTAURANTS);
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
      setRestaurants(RESTAURANTS);
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
      setRestaurants(RESTAURANTS);
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
      setRestaurants(RESTAURANTS);
    }
  };

  const seeRestaurant = () => {
    navigate("/restaurant");
  }

  return (
    <section>
      <div className="w-full">
        <div className="container">
          <div className="flex flex-row mt-5 flex-wrap px-4 gap-4">
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
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="container">
          <div className="flex flex-row mt-5 gap-3 px-4 flex-wrap w-full">
          
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

                <button className="w-full animate-bounce mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:shadow-md px-4 border border-blue-500 hover:border-transparent rounded">
                  Subscribe
                </button>
                <button className="w-full mt-2 mb-1 bg-transparent hover:bg-slate-500
                 text-slate-700 font-semibold hover:shadow-md px-4 border border-blue-500
                  hover:border-transparent rounded"
                  onClick={seeRestaurant}>
                  See More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
