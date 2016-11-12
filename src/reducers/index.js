import { combineReducers } from 'redux';
import PlacesReducer from './reducer_places';
const rootReducer = combineReducers({
  places: PlacesReducer
});

export default rootReducer;
