import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Card from "../ui/cards/Card";
import OfferService from "../../services/offer.service";
import UserService from "../../services/user.service";

const PersonProfile = () => {
  const [offerItems, setOfferItems] = React.useState([]);
  const [myOrders, setMyOrders] = React.useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  React.useEffect(() => {
    OfferService.getOffers().then(
      (resp) => {
        setOfferItems(resp.data);
      },
      (err) => {
        console.error(err);
      }
    );

    UserService.getOrders(user.id).then(
      (resp) => {
        setMyOrders(resp.data);
      },
      (err) => {
        toast.error(err, {
          position: "top-left",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    );
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="flex flex-row gap-5 justify-center">
        <div className="flex flex-col w-1/4 h-64 border-gray-300 border-2 rounded-md shadow-lg px-2 overflow-y-scroll">
          <span className="text-2xl text-center">My Orders</span>
          <hr />

          <div className="flex flex-col justify-start p-1 overflow-auto">
            {myOrders.map((order, index) => (
              <div
                key={index}
                className="flex flex-col rounded-md border-2 mb-2 p-2 bg-slate-200"
              >
                <span>Date: {order.orderDateTime.split("T")[0]}</span>
                <span
                  className={`${
                    order.orderStatus === "ORDERED"
                      ? "bg-green-400 rounded"
                      : "bg-red-400 rounded"
                  }`}
                >
                  Order status: {order.orderStatus}
                </span>
                <span>Number of items: {order.orderItems.length}</span>
                <span>TOTAL: {order.totalPrice}</span>
              </div>
            ))}
          </div>
        </div>
        <SubscribedRestaurants />
        <Card title="Profile informations" data={user} isEditable={true} />
      </div>
    </>
  );
};

const SubscribedRestaurants = () => {
  const [restaurants, setRestaurants] = React.useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  React.useEffect(() => {
    UserService.getSubscribedRestaurants(user.id).then((resp) => {
      setRestaurants(resp.data);
    });
  }, []);

  return (
    <div className="flex flex-col w-1/4 h-64 border-gray-300 border-2 rounded-md shadow-lg px-2 overflow-y-scroll">
      <span className="text-2xl text-center">Subscribed restaurants</span>
      <hr />

      <div className="flex flex-col justify-start p-1 overflow-auto">
        {restaurants.map((r, index) => (
          <div
            key={index}
            className="flex flex-col rounded-md border-2 mb-2 p-2 bg-slate-200"
          >
            <span>Email: {r.email}</span>
            <span>Name: {r.name}</span>
            <span>
              Address: {r?.address?.city?.name}, {r?.address?.street}{" "}
              {r?.address?.addressNumber}
            </span>
            <span>PIB: {r.pib}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonProfile;
