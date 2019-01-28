import { IProperty } from './property.interface';

export interface IStoreState {
  properties: {
    results: IProperty[];
    loading: boolean;
    sortedBy: string;
  };
}