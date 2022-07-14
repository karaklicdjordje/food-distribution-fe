import axios from "axios";
import authHeader from "./auth.header";

const OFFER_API_URL = "http://localhost:8080/api/v1/fooddistribution/offer/"
const OFFER_ITEMS_API_URL = "http://localhost:8080/api/v1/fooddistribution/offerItems/";

const getOfferItems = () => {
  return axios.get(OFFER_ITEMS_API_URL, { headers: authHeader() });
};

const getOffers = () => {
  return axios.get(OFFER_API_URL, {headers: authHeader()});
}

const deleteOffer = (id) => {
  return axios.delete(OFFER_API_URL + `${id}`, {headers: authHeader()});
}

const createNewOffer = (data) => {
  return axios.post(OFFER_API_URL, data, {headers: authHeader()});
}

const OfferService = {
  getOfferItems,
  getOffers,
  deleteOffer,
  createNewOffer
};

export default OfferService;
