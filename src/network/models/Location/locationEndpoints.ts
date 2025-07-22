import { Endpoints } from "../common";

export const locationEndpoint: Endpoints = {
  GET_LOCATION_NAME: {
    url: "/reverse",
    method: "get",
  },
  GET_SEARCHED_CITY: {
    url: "/search",
    method: "get"
  }
};
