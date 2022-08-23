import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "http://localhost:8080/api/v1/fooddistribution/auth/";
const USER_URL = "http://localhost:8080/api/v1/fooddistribution/users/";
const ORDER_API_URL = "http://localhost:8080/api/v1/fooddistribution/orders/";

const registerUser = (data) => {
    return axios.post(API_URL + "signup", data);
}

const login = async (email, password) => {
    const response = await axios 
    .post(API_URL + "login", {
        email,
        password
    });
    // const formated = JSON.stringify(response);
    if(response.data.accessToken){
        localStorage.setItem("token", JSON.stringify(response.data.accessToken));
        localStorage.setItem("user", JSON.stringify(response.data.user));
    }
    return response.data;
}

const getSubscribedRestaurants = (userId) => {
    return axios.get(USER_URL + `${userId}/subscribe`, {headers: authHeader()});
}

const getOrders = (userId) => {
    return axios.get(ORDER_API_URL + `users/${userId}`, {headers: authHeader()});
}

const UserService = {
    registerUser,
    login,
    getSubscribedRestaurants,
    getOrders
}

export default UserService;