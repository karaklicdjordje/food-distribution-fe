import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Offer from "./Offer";
import OfferService from "../../services/offer.service";
import Plus from "../ui/icons/Plus";
import AddOfferModal from "./AddOfferModal";

const OffersList = () => {
  const [offers, setOffers] = useState([]);
  const [addOfferModal, setAddOfferModal] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    OfferService.getOffersOfRestaurant(user.id).then(
      (resp) => {
        setOffers(resp.data);
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
    <div className="flex flex-col w-1/4 h-1/2 border-gray-300 border-2 rounded-md shadow-lg px-2 overflow-y-scroll">
      <ToastContainer />

      <span className="text-2xl text-center">Offers</span>

      <hr />
      <div className="flex flex-row justify-end mb-2">
        <div
          className="cursor-pointer w-12 h-4 flex flex-row"
          onClick={() => setAddOfferModal(true)}
        >
          <Plus />
          <span className="mt-1 w-full">Add</span>
        </div>
      </div>

      <div className="flex flex-col h-80 justify-start p-1 overflow-y-scroll">
        {offers.length > 0 &&
          offers.map((offer) => (
            <Offer key={offer.id} offer={offer} removeEnabled={true} />
          ))}
      </div>
      {addOfferModal && <AddOfferModal setAddOfferModal={setAddOfferModal} />}
    </div>
  );
};

export default OffersList;
