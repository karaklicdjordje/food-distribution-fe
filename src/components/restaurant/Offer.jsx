import React from "react";
import { ToastContainer, toast } from "react-toastify";

import Button from "../ui/button/Button";
import OfferService from "../../services/offer.service";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-cart.svg";
import "react-toastify/dist/ReactToastify.css";

const Offer = ({ offer, removeEnabled }) => {
  function handleDeleteOffer(offerId) {
    OfferService.deleteOffer(offerId).then(
      (resp) => {
        toast("Offer deleted", {
          position: "top-left",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      },
      (err) => toast.error(err, {
        position: "top-left",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    );
  }

  const AddToOrder = () => {
    toast("Added to order!", {
      position: "top-left",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    let offers = localStorage.getItem("selectedOffers");

    if (offers === null) {
      localStorage.setItem("selectedOffers", JSON.stringify([]));
    }

    if (offers === null) {
      offers = localStorage.getItem("selectedOffers");
      const parsedOffers = JSON.parse(offers);
      parsedOffers.push(offer);
      localStorage.setItem("selectedOffers", JSON.stringify(parsedOffers));
    } else {
      const parsedOffers = JSON.parse(offers);
      parsedOffers.push(offer);
      localStorage.setItem("selectedOffers", JSON.stringify(parsedOffers));
    }
  };

  return (
    <div className="flex flex-col m-2 p-2 rounded-md border-2">
      <ToastContainer />
      <div className="flex flex-row justify-between">
        <span>Date: {offer.date}</span>
        <ShoppingIcon className="cursor-pointer" onClick={AddToOrder} />
      </div>
      <span>Expired: {offer.expired ? "Yes" : "No"}</span>
      <div className="mb-2">
        Items:
        <br />
        <ul>
          {offer.offerItems.length > 0 &&
            offer?.offerItems.map((item, index) => (
              <li key={index}>
                {item.food.name} - price: {item.food.price}rsd - quantity:{" "}
                {item.quantity}
              </li>
            ))}
        </ul>
      </div>

      {removeEnabled && (
        <Button
          textColor={"ee3030"}
          text="Remove this offer"
          onClick={() => handleDeleteOffer(offer.id)}
        />
      )}
    </div>
  );
};

export default Offer;
