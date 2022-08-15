import React, { useState, useEffect } from "react";
import RestaurantService from "../../services/restaurant.service";

const ListOfSubscribers = () => {
  const [users, setUsers] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    RestaurantService.getSubscribers(user.id).then(
      (resp) => {
        const filteredData = resp.data.filter(
          (value, index, self) =>
            self.findIndex((v) => v.id === value.id) === index
        );

        if (filteredData.length > 0) {
          setUsers(filteredData);
        }
      },
      (err) => console.error(err)
    );
  }, []);

  return (
    <div className="flex flex-col w-1/4 h-64 border-gray-300 border-2 rounded-md shadow-lg px-2 overflow-y-scroll">
      <span className="text-2xl text-center">List of subscribers</span>

      <hr />
      <div className="flex flex-col justify-start p-1 overflow-auto">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex flex-col rounded-md border-2 bg-slate-200"
          >
            <span>Email: {user.email}</span>
            <span>Username: {user.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOfSubscribers;
