import React from "react";
import Card from "../ui/cards/Card";
import { dummyData } from "../../const/const";
import OfferService from "../../services/offer.service";
import UserService from "../../services/user.service";

const PersonProfile = () => {
  const [offerItems, setOfferItems] = React.useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  React.useEffect(() => {
    OfferService.getOffers().then(
      (resp) => {
        setOfferItems(resp.data);
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);

  return (
    <>
      <div className="flex flex-row gap-5 justify-center">
        <Card title="My orders" />
        <SubscribedRestaurants />
        <Card title="Profile informations" data={user} isEditable={true} />
      </div>
    </>
  );
};

const SubscribedRestaurants = () => {
  const [restaurants, setRestaurants] = React.useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  React.useEffect(() => {
    UserService.getSubscribedRestaurants(user.id).then((resp) => {
      setRestaurants(resp.data);
    });
  }, []);

  return (
    <div className="flex flex-col w-1/4 h-64 border-gray-300 border-2 rounded-md shadow-lg px-2 overflow-y-scroll">
      <span className="text-2xl text-center">Subscribed restaurants</span>
      <hr />

      <div className="flex flex-col justify-start p-1 overflow-auto">
        {restaurants.map((r) => (
          <div
            key={r.id}
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
  );
};

export default PersonProfile;
