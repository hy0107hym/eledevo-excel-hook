import { REST_API_METHOD as METHOD, BASE_URL } from "../container";
const API_SCHEME = {

  ITEM: {
    GET_ITEM: {
      url: `${BASE_URL}/item/excel`,
      method: METHOD.GET,
    },
    ADD_ITEM: {
      url: `${BASE_URL}/item`,
      method: METHOD.POST,
    },
    IMPORT_EXCEL: {
      url: `${BASE_URL}/item/excel`,
      method: METHOD.POST,
    },
    DELETE_ITEM: {
      url: `${BASE_URL}/item/:id`,
      method: METHOD.DELETE,
    },
    UPDATE_ITEM: {
      url: `${BASE_URL}/item/:id`,
      method: METHOD.PUT,
    },
  },
};

export default API_SCHEME;
