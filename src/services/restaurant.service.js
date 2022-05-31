import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/fooddistribution/restauraunt/";

const getAllRestaurants = () => {
    return axios.get(API_URL);
}



const RestaurantService = {
    getAllRestaurants
}

export default RestaurantService;