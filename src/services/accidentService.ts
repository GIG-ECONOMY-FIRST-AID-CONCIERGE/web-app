import api from "../helpers/api";

const getAccident = (status: string) => {
  return api.get("Accident/" + status);
};

const putAccident = (status: string, id: string) => {
  return api.put("Accident/" + status + "/" + id);
};

const accidentService = {
  getAccident,
  putAccident,
};

export default accidentService;
