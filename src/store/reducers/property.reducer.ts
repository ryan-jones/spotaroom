import { handleActions } from 'redux-actions';
import { fetchPropertySuccess, loadingProperties, sortBy } from '../actions/property.actions';


const initialState = {
  results: [],
  loading: true,
  sortedBy: 'ascending'
}

const propertyReducer = handleActions({
  // @ts-ignore
    [loadingProperties]: (state) => ({ ...state,  loading: true }),
  // @ts-ignore
    [fetchPropertySuccess]: (state, action) => ({ ...state, results: action.payload, loading: false }),
  // @ts-ignore
    [sortBy]: (state, action) => ({ ...state, sortedBy: action.payload })
  }, initialState)

  export default propertyReducer;