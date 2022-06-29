import React from "react";
import Card from "../ui/cards/Card";
import { dummyData } from "../../const/const";
import OfferService from "../../services/offer.service";

const PersonProfile = () => {
  const [offerItems, setOfferItems] = React.useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  
  React.useEffect(() => {
    OfferService.getOfferItems().then(
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
        <Card title="Offers list" data={dummyData} isEditable={false} />
        <Card title="Subscribed restaurants" data={dummyData} isEditable={false} />
        <Card title="Profile informations" data={user} isEditable={true} />
      </div>
    </>
  );
};

export default PersonProfile;
