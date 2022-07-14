import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "http://localhost:8080/api/v1/fooddistribution/restauraunt/";

const getAllRestaurants = () => {
    return axios.get(API_URL, {headers: authHeader() });
}

const subscribeToRestaurant = (restaurantId, userId) => {
    return axios.put(API_URL + `${restaurantId}/users/${userId}`, {}, {headers: authHeader()});
}

const getSubscribers = (restaurantId) => {
    return axios.get(API_URL + `${restaurantId}/subscribers`, {headers: authHeader()});
}

const RestaurantService = {
    getAllRestaurants,
    getSubscribers,
    subscribeToRestaurant
}

export default RestaurantService;