import React from "react";
import { useLocation } from "react-router-dom";

import OfferService from "../services/offer.service";
import Offer from "../components/restaurant/Offer";
import Slider from "../components/ui/slider/Slider";
import OrderModal from "../components/order/OrderModal";
import useCurrentUser from "../hooks/useCurrentUser";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { ROLES } from "../const/const";

const Restaurant = () => {
  const [offers, setOffers] = React.useState([]);
  const [orderModal, setOrderModal] = React.useState(false);

  const location = useLocation();
  const restaurant = location.state;
  const currentUser = useCurrentUser();

  React.useEffect(() => {
    // get offers of this restaurant
    OfferService.getOffersOfRestaurant(restaurant.id).then(
      (resp) => {
        setOffers(resp.data);
      },
      (err) =>
        toast.error(err, {
          position: "top-left",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
    );
  }, []);

  const handleOrderModal = () => {
    if (JSON.parse(localStorage.getItem("selectedOffers")) === null) {
      toast.error("There is no selected offers!", {
        position: "top-left",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setOrderModal(true);
    }
  };

  return (
    <div>
      <ToastContainer />

      {orderModal && <OrderModal setOrderModal={setOrderModal} />}
      <div className="flex flex-column justify-center text-center">
        <h3 className="text-5xl font-normal leading-normal mt-0 mb-2">
          {restaurant.name}
        </h3>
      </div>
      <div className="flex flex-column mx-10">
        <div className="flex sm:flex-wrap flex-row  justify-between">
          <div className="flex sm:flex-row flex-column w-1/3 h-80 overflow-auto p-2 border-gray-300 border-2 rounded-md shadow-lg">
            <span className="text-xl">Offers</span>
            <hr />
            {offers.length > 0 ? (
              offers.map((offer) => {
                if (offer.offerItems[0].quantity !== 0) {
                  return (
                    <Offer key={offer.id} offer={offer} removeEnabled={false} />
                  );
                }
              })
            ) : (
              <span>No offers yet!</span>
            )}
          </div>
          <div className="flex sm:flex-row flex-column w-1/3 h-auto p-2 border-gray-300 border-2 rounded-md shadow-lg">
            <span className="text-xl">Restaurant Info</span>
            <hr />
            <span>Email: {restaurant.email}</span>
            <span>City: {restaurant.address.city.name}</span>
            <span>ZipCode: {restaurant.address.city.zipCode}</span>
            <span>
              Street: {restaurant.address.street}{" "}
              {restaurant.address.addressNumber}
            </span>
            <span>PIB: {restaurant.pib}</span>
          </div>
        </div>

        {currentUser.role !== ROLES.ROLE_RESTAURANT && (
          <div className="w-full p-5">
            <button
              className="w-full cursor-pointer bg-slate-700 text-center text-lg text-white shadow-md rounded-md h-10"
              onClick={() => handleOrderModal()}
            >
              Submit order
            </button>
          </div>
        )}

        <Slider />
      </div>
    </div>
  );
};

export default Restaurant;
