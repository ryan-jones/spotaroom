import { AxiosResponse } from "axios";

export const createPropertyQueryParams = (result: AxiosResponse) => {
  return result.data.data
  .slice(0, 30)
  .map((propertyListing: any) => `ids[]=${propertyListing.id}`)
  .join('&');
}