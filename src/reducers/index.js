import { combineReducers } from 'redux';
import PlacesReducer from './reducer_places';

export default combineReducers({
  places: PlacesReducer
});
