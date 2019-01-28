import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import propertyReducer from './reducers/property.reducer';


export default function configureStore(preloadedState?: object) {
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const reducers = { 
    properties: propertyReducer
  }

  const rootReducer = combineReducers(reducers);
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

  return store;
}