import * as React from 'react';
import './Showcase.scss';
import { IProperty, IPropertyProps } from 'src/interfaces/property.interface';
import Property from './Property/Property';
import { sortPropertyList } from 'src/utils/filters';

interface IProps {
  properties: IPropertyProps
}

const showcase = ({ properties }: IProps) => {
  const propertyListings = sortPropertyList(properties);
    return (
      <section className="showcase">
        {properties.loading 
          ? (<p>Loading...</p>) 
          : (
            <React.Fragment>
              <h2>{properties.totalNumberOfListings} properties located in Madrid</h2>
             { propertyListings.map((property: IProperty, index) => (
               <Property key={`${property.adId}-${index}`} property={property} />))
             }
            </React.Fragment>
          )
        }
      </section>
    )
}

export default showcase;