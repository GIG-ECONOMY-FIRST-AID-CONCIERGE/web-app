import axios from "axios";

const API_URL =
  process.env.REACT_APP_API_URL ||
  "https://metlife-gig-concierge-api.azurewebsites.net/api/";

const api = axios.create({
  baseURL: API_URL,
});

export default api;
