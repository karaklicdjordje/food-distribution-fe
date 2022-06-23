import React from "react";
import Card from '../ui/cards/Card';
import {dummyData} from '../../const/const';

const PersonProfile = () => {
  return (
    <>
      <div className="flex flex-row gap-5 justify-center">
        <Card title="Offers list" data={dummyData} />
        <Card title="Subscribed restaurants" data={dummyData} />
        <Card title="Profile informations" data={dummyData} />
      </div>
    </>
  );
};

export default PersonProfile;
