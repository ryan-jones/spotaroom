import { handleActions } from 'redux-actions';
import { fetchPropertySuccess, loadingProperties, sortBy } from '../actions/property.actions';


const initialState = {
  results: [],
  loading: true,
  sortedBy: 'ascending',
  totalNumberOfListings: 0
}

const propertyReducer = handleActions({
  // @ts-ignore
    [loadingProperties]: (state) => ({ ...state,  loading: true }),
  // @ts-ignore
    [fetchPropertySuccess]: (state, action: any) => {
      const { properties, totalNumberOfListings } = action.payload;
      return { 
        ...state,
        totalNumberOfListings, 
        results: properties, 
        loading: false 
      }
    },
  // @ts-ignore
    [sortBy]: (state, action) => ({ ...state, sortedBy: action.payload })
  }, initialState)

  export default propertyReducer;