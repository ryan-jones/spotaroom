import * as React from "react";
import "./Showcase.scss";
import { IProperty, IPropertyProps } from "interfaces/property.interface";
import Property from "./Property/Property";
import { sortPropertyList } from "utils/filters";

interface IProps {
  properties: IPropertyProps;
}

const showcase = ({ properties }: IProps) => (
  <section className='showcase'>
    {properties.loading ? (
      <p>Loading...</p>
    ) : (
      <>
        <h2>{properties.totalNumberOfListings} properties located in Madrid</h2>
        {sortPropertyList(properties).map((property: IProperty, index) => (
          <Property key={`${property.adId}-${index}`} property={property} />
        ))}
      </>
    )}
  </section>
);

export default showcase;
