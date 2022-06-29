import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/fooddistribution/auth/";

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

const UserService = {
    registerUser,
    login
}

export default UserService;