import React from "react";

const Checkout = () => {
  const selectedOffers = JSON.parse(localStorage["selectedOffers"]);

  return (
    <div>
      {selectedOffers.map((offer) => (
        <span key={offer.id}>{offer.id}</span>
      ))}
    </div>
  );
};

export default Checkout;
