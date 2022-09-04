import React from "react";
import { ToastContainer, toast } from "react-toastify";

import Button from "../ui/button/Button";
import OfferService from "../../services/offer.service";
import useCurrentUser from "../../hooks/useCurrentUser";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-cart.svg";
import "react-toastify/dist/ReactToastify.css";
import { ROLES } from "../../const/const";

const Offer = ({ offer, removeEnabled }) => {
  const [quantity, setQuantity] = React.useState(0);
  const currentUser = useCurrentUser();

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
  }

  const AddToOrder = () => {
    if (quantity === 0) {
      toast.warn("Quantity needs to be bigger than 0!", {
        position: "top-left",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    }

    // handle quantity
    // better way would be to make copy of object and than change quantity
    offer.offerItems[0].quantity = quantity;

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

    toast("Added to order!", {
      position: "top-left",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const decreaseQnt = () => {
    if (quantity === 0) {
      return;
    }

    setQuantity((prevCount) => {
      return --prevCount;
    });
  };

  const increaseQnt = () => {
    if (quantity === offer.offerItems[0].quantity) {
      toast.warn("Quantity cannot be higher!", {
        position: "top-left",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    setQuantity((prevCount) => {
      return ++prevCount;
    });
  };

  return (
    <div className="flex flex-col m-2 p-2 rounded-md border-2">
      <ToastContainer />
      {currentUser.role !== ROLES.ROLE_RESTAURANT && (
        <div className="flex flex-row justify-between">
          <span>Date: {offer.date}</span>
          <div className="flex flex-row w-1/3 justify-between">
            <button
              className="w-10 border-2 bg-slate-500 font-bold rounded-md"
              onClick={decreaseQnt}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="w-10 border-2 bg-slate-500 font-bold rounded-md"
              onClick={increaseQnt}
            >
              +
            </button>
          </div>
          <ShoppingIcon className="cursor-pointer" onClick={AddToOrder} />
        </div>
      )}

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
