import React from 'react'
import Card from "../ui/cards/Card";
import { dummyData } from "../../const/const";

const RestaurantProfile = () => {
  return (
    <>
      <div className="flex flex-row gap-2 flex-wrap px-2">
        <Card title="Users that are waiting" data={dummyData} isEditable={false} /> {/* spisak jmbg i pib brojeva korisnika */}
        <Card title="Offers" data={dummyData} isEditable={false} /> {/* kolicina viska hrane i mesta gde se mogu pokupiti */}
        <Card title="All customers" data={dummyData} isEditable={false} /> {/* Kao neka rang lista? */}
        <Card title="History" data={dummyData} isEditable={false} />
      </div>
    </>
  )
}

export default RestaurantProfile