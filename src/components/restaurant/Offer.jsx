import React from "react";
import Button from "../ui/button/Button";
import OfferService from "../../services/offer.service";

const Offer = ({ offer }) => {
  function handleDeleteOffer(offerId) {
    OfferService.deleteOffer(offerId).then(
      (resp) => {
        console.log(resp);
      },
      (err) => console.error(err)
    );
  }

  return (
    <div className="flex flex-col m-2 p-2 rounded-md border-2">
      <span>Date: {offer.date}</span>
      <span>Expired: {offer.expired ? "Yes" : "No"}</span>
      <div className="mb-2">
        Items:
        <br />
        <ul>
          {offer.offerItems.length > 0 &&
            offer?.offerItems.map((item) => (
              <li key={item.id}>
                {item.food.name} - price: {item.food.price}rsd - quantity:{" "}
                {item.quantity}
              </li>
            ))}
        </ul>
      </div>

      <Button
        textColor={"ee3030"}
        text="Remove this offer"
        onClick={() => handleDeleteOffer(offer.id)}
      />
    </div>
  );
};

export default Offer;
