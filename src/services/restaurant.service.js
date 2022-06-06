import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "http://localhost:8080/api/v1/fooddistribution/restauraunt/";

const getAllRestaurants = () => {
    return axios.get(API_URL, {headers: authHeader() });
}



const RestaurantService = {
    getAllRestaurants
}

export default RestaurantService;