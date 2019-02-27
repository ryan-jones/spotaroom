export interface IProperty {
  city: string;
  currency: string;
  currencySymbol: string;
  mainPhotoUrl: string;
  pricePerMonth: number;
  url: string;
  title: string;
  type: string;
  adId: number;
}

export interface IPropertyProps {
  results: IProperty[];
  loading: boolean;
  sortedBy: string;
  totalNumberOfListings: number;
}