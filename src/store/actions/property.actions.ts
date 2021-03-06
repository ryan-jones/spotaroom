import { AxiosResponse } from "axios";
import axios from "./axios.instance";
import { createAction } from "redux-actions";
import { createPropertyQueryParams } from "utils/string-handler";

export const fetchPropertySuccess = createAction("FETCH_PROPERTY_SUCCESS");
export const fetchPropertyError = createAction("FETCH_PROPERTY_ERROR");
export const loadingProperties = createAction("LOADING_PROPERTIES");
export const sortBy = createAction("SORT_BY");

const BASE_URL = "api/public/listings/search";

export function fetchProperties(filter: string, city = "madrid") {
  return (dispatch: any) => {
    dispatch(loadingProperties());
    return axios
      .get(`${BASE_URL}/markers/${city}?type[]=${filter}`)
      .then((result: AxiosResponse) => {
        const totalNumberOfListings = result.data.data.length;
        const properties = createPropertyQueryParams(result);
        const url = `${BASE_URL}/homecards_ids?${properties}`;
        return axios.get(url).then(({ data }) => {
          const propertySuccess = {
            totalNumberOfListings,
            properties: data.data.homecards
          };
          dispatch(fetchPropertySuccess(propertySuccess));
        });
      })
      .catch(dispatch(fetchPropertyError));
  };
}

export const sortPropertiesBy = (value: string) => sortBy(value);
