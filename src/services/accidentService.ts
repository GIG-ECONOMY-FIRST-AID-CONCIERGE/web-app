import api from "../helpers/api";

const getAccident = (status: string) => {
  return api.get("Accident/" + status);
};

const putAccident = (status: string, id: string, values: any) => {
  return api.put("Accident/" + status + "/" + id, values);
};

const accidentService = {
  getAccident,
  putAccident,
};

export default accidentService;
