import * as React from 'react';
import { IProperty } from 'src/interfaces/property.interface';

interface IProps {
  property: IProperty;
}

const property = ({ property: { mainPhotoUrl, title, currencySymbol, pricePerMonth}}: IProps) => (
  <div className="property">
    <div className="property__image">
      <img src={mainPhotoUrl} />
      <div className="overlay" />
    </div>
  <div className="property__description">
    <p>{title}</p>
  </div>
  <div className="property__actions">
    <div className="price">
      <p>{pricePerMonth}{currencySymbol}</p>
    </div>
    <div className="buttons">
      <button className="details">More Details</button>
      <button className="book">Book Now!</button>
    </div>
  </div>
</div>
)

export default property;