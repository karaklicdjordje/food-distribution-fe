import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import authHeader from "../../services/auth.header";

import OfferService from "../../services/offer.service";

const AddOfferModal = ({ setAddOfferModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const user = JSON.parse(localStorage.getItem("user"));

  const onSubmit = async (data) => {
    const fields = { fields: data };
    const food = { ...fields.fields };

    //TODO
    // first create food then put that food in offerItem
    const foodReq = {
      name: food.foodName,
      price: food.price,
      typeOfFood: food.foodType,
    };
    axios
      .post("http://localhost:8080/api/v1/fooddistribution/food/", foodReq, {
        headers: authHeader(),
      })
      .then(
        (foodResponse) => {
          const newOffer = {
            restaurantId: user.id,
            offerItems: [
              {
                food: foodResponse.data
              },
            ],
            date: new Date().toISOString().split("T")[0],
            expired: false,
          };
          OfferService.createNewOffer(newOffer).then(
            (resp) => {
              console.log(resp);
            },
            (err) => console.error(err)
          );
        },
        (err) => console.error(err)
      );

    // console.log(newOffer);
  };

  return (
    <div
      className="flex min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div
        className="absolute bg-black opacity-80 inset-0 z-0"
        onClick={() => setAddOfferModal(false)}
      />
      <div className="w-full max-w-xl p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white ">
        <h2 className="text-3xl text-green-500 text-center">
          Create new Offer
        </h2>
        {/*content*/}
        <div>
          {/*body*/}
          <div className="text-center p-5 flex-auto justify-center">
            <form
              className="max-w-xl m-auto py-10 mt-10 px-12 border"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="text-gray-600 font-medium">Food name</label>
              <input
                className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
                name="foodName"
                placeholder="Name of food"
                autoFocus
                {...register("foodName", {
                  required: "Please enter food name",
                })}
              />
              {errors.title && (
                <div className="mb-3 text-normal text-red-500">
                  {errors.title.message}
                </div>
              )}

              <label className="text-gray-600 font-medium block mt-4">
                Price
              </label>
              <input
                className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
                name="price"
                type="text"
                placeholder="Price"
                {...register("price", {
                  required: "Please enter price",
                })}
              />
              {errors.location && (
                <div className="mb-3 text-normal text-red-500 ">
                  {errors.location.message}
                </div>
              )}

              <label className="text-gray-600 font-medium block mt-4">
                Type of food
              </label>
              <select
                {...register("foodType", { required: "Required" })}
                name="foodType"
              >
                <option value="HOMEMADE">HOMEMADE</option>
                <option value="FASTFOOD">FASTFOOD</option>
                <option value="BAKERY">BAKERY</option>
                <option value="ITALIAN">ITALIAN</option>
                <option value="ASIAN">ASIAN</option>
              </select>
              {errors.location && (
                <div className="mb-3 text-normal text-red-500 ">
                  {errors.location.message}
                </div>
              )}

              <button
                className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border py-3 px-6 font-semibold text-md rounded"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOfferModal;
