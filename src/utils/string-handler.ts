import { AxiosResponse } from "axios";

export const createPropertyQueryParams = ({ data }: AxiosResponse) => {
  return data.data
    .slice(0, 30)
    .map((propertyListing: any) => `ids[]=${propertyListing.id}`)
    .join("&");
};
