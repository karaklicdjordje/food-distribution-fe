import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import RestaurantService from "../services/restaurant.service";

import Subscription from "../components/ui/modals/Subscription";
import Filter from "../components/home/filter/Filter";
import RestaurantList from "../components/home/restaurantsList/RestaurantList";
import useCurrentUser from "../hooks/useCurrentUser";

const Homepage = () => {
  let navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");
  const [restaurants, setRestaurants] = React.useState([]);
  const [subscriptionModal, setSubscriptionModal] = React.useState(false);
  const currentUser = useCurrentUser();

  useEffect(() => {
    RestaurantService.getAllRestaurants().then((resp) => {
      setRestaurants(resp.data);
    });
  }, []);

  const seeRestaurant = (restaurant) => {
    navigate("/restaurant", { state: restaurant });
  };

  const subscribe = (restaurant) => {
    RestaurantService.subscribeToRestaurant(restaurant.id, currentUser.id).then(
      (resp) => {
        setSubscriptionModal(true);

        setTimeout(() => {
          setSubscriptionModal(false);
        }, 2000);
      },
      (err) => {
        toast.error(err, {
          position: "top-left",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    );
  };

  return (
    <section>
      <ToastContainer />

      <div className="w-full">
        <div className="container">
          <div className="flex flex-row mt-5 flex-wrap px-4 gap-4">
            <Filter restaurants={restaurants} setRestaurants={setRestaurants} />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="container">
          <div className="flex flex-row mt-5 gap-3 px-4 flex-wrap w-full">
            <RestaurantList
              restaurants={restaurants}
              subscribe={subscribe}
              isLoggedIn={isLoggedIn}
              seeRestaurant={seeRestaurant}
            />
          </div>
        </div>
      </div>
      {subscriptionModal && <Subscription />}
    </section>
  );
};

export default Homepage;
