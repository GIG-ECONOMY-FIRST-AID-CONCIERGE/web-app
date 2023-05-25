import api from "../helpers/api";

const getPartner = (id: string) => {
  return api.get("Partner/" + id);
};

const assistanceService = {
  getPartner,
};

export default assistanceService;
