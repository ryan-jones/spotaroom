import { IPropertyProps } from "interfaces/property.interface";

export const sortPropertyList = (properties: IPropertyProps) => {
  return properties.sortedBy === "ascending"
    ? properties.results.sort((a, b) => a.pricePerMonth - b.pricePerMonth)
    : properties.results.sort((a, b) => b.pricePerMonth - a.pricePerMonth);
};
