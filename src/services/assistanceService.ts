import api from "../helpers/api";

const getAssistance = (status: string) => {
  return api.get("Assistance/" + status);
};

const assistanceService = {
  getAssistance,
};

export default assistanceService;
