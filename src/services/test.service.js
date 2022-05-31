import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/fooddistribution/test";

const getTestContext = () => {
    return axios.get(API_URL);
}

const TestService = {
    getTestContext
}

export default TestService;