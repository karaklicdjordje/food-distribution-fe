import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { ReactComponent as XIcon } from "../../assets/XIcon.svg";
import Button from "../ui/button/Button";

import restaurantService from "../../services/restaurant.service";

import "react-toastify/dist/ReactToastify.css";

const OrderModal = ({ setOrderModal }) => {

  const parsedOrder = JSON.parse(localStorage.getItem("selectedOffers"));
  
  const handleOrder = () => {
    const orderItems = [];
    let orderDate;
    let restaurantId;
    parsedOrder.map((item) => {
      orderItems.push({
        offerItemId: item.offerItems[0].id,
        quantity: 1,
        price: item.offerItems[0].food.price,
      });

      // orderDate = new Date(item.date).toISOString().split("T")[0];
      // TODO
      orderDate = "2022-08-18T20:48:42.164Z";
      restaurantId = item.restaurantId;
    });

    const req = {
      userId: JSON.parse(localStorage.getItem("user")).id,
      orderItems: orderItems,
      orderDateTime: orderDate,
      orderStatus: "ORDERED",
      restaurantId: restaurantId,
    };

    restaurantService.createOrder(req).then((resp) => {
      if (resp.status === 201) {
        alert("Order created!");
        localStorage.removeItem('selectedOffers');
        window.location.reload();
      }
    });
  };


  return (
    <div
      className="flex min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-80 inset-0 z-0" />
      <div className="w-full max-w-xl p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white ">
        <h2 className="text-3xl mb-4 text-center">Order details</h2>
        <XIcon
          className="absolute cursor-pointer right-5 top-4"
          onClick={() => setOrderModal(false)}
        />
        {/*content*/}
        <div>
          {/*body*/}
          <div className="text-center bg-gray-300 flex-auto justify-center rounded-md h-auto overflow-y-visible">
            {parsedOrder.map((offer) => (
              <div key={offer.id} className="flex flex-col p-2">
                <span>Date: {offer.date}</span>
                <span>Items: </span>
                {offer.offerItems.map((item) => (
                  <div key={item.id + 50} className="flex flex-col">
                    <span>Food type: {item.food.typeOfFood}</span>
                    <span>Name: {item.food.name}</span>
                    <span>price: {item.food.price}</span>
                    <span>Total quantity: {item.quantity}</span>
                  </div>
                ))}

                <hr />
              </div>
            ))}
          </div>
          <button
            className="w-full shadow-md h-8 bg-slate-700 rounded-md mt-2 text-white cursor-pointer"
            onClick={handleOrder}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
