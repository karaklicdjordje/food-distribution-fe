import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useCurrentUser from "../../hooks/useCurrentUser";
import OfferService from "../../services/offer.service";
import UserService from "../../services/user.service";
import OrdersList from "../order/OrdersList";

const CompanyProfile = () => {
  const [offerItems, setOfferItems] = React.useState([]);
  const [myOrders, setMyOrders] = React.useState([]);
  const [subscribedRestaurants, setSubscribedRestaurants] = React.useState([]);

  const user = useCurrentUser();

  React.useEffect(() => {
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

    UserService.getSubscribedRestaurants(user.id).then((resp) => {
      setSubscribedRestaurants(resp.data);
    });
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="flex flex-row gap-5 justify-center">
        <div className="flex flex-col w-1/4 h-64 border-gray-300 border-2 rounded-md shadow-lg px-2 overflow-y-scroll">
          <span className="text-2xl text-center">Orders</span>
          <hr />
          <div className="flex flex-col justify-start p-1 overflow-auto">
            {myOrders.length > 0 ? (
              <OrdersList orders={myOrders} />
            ) : (
              <span>No orders</span>
            )}
          </div>
        </div>

        {/* Subscribed restaurants */}

        <div className="flex flex-col w-1/4 h-64 border-gray-300 border-2 rounded-md shadow-lg px-2 overflow-y-scroll">
          <span className="text-2xl text-center">Subscribed restaurants</span>
          <hr />

          <div className="flex flex-col justify-start p-1 overflow-auto">
            {subscribedRestaurants.map((r, index) => (
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
      </div>
    </>
  );
};


export default CompanyProfile;
