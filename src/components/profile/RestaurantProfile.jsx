import React from "react";
import Card from "../ui/cards/Card";
import ListOfSubscribers from "../restaurant/ListOfSubscribers";
import OffersList from "../restaurant/OffersList";

const RestaurantProfile = () => {
  return (
    <>
      <div className="flex flex-row gap-2 flex-wrap px-2">
        <OffersList /> {/* kolicina viska hrane i mesta gde se mogu pokupiti */}
        <ListOfSubscribers />
        <Card title="History" data={null} isEditable={false} />
      </div>
    </>
  );
};

export default RestaurantProfile;
