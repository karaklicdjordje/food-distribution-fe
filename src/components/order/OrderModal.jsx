import React from "react";
import { ReactComponent as XIcon } from "../../assets/XIcon.svg";

import { createOrder } from "../../services/restaurant.service";

const OrderModal = ({ setOrderModal }) => {
  const parsedOrder = JSON.parse(localStorage.getItem("selectedOffers"));

  const handleOrder = () => {
      //TODO:
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
                    <span>Food type: {item.typeOfFood}</span>
                    <span>Name: {item.name}</span>
                    <span>price: {item.price}</span>
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
