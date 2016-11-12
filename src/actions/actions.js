import axios from 'axios'
import {searchNearby, getDetails} from 'utils/googleApiHelpers'

export const FETCH_NEARBY_PLACES = 'FETCH_NEARBY_PLACES';
export const FETCH_PLACE_DETAILS = 'FETCH_PLACE_DETAILS';
export const FETCH_PLACE_DETAILS__BEGIN = 'FETCH_PLACE_DETAILS__BEGIN';

export function fetchNearbyPlaces(google, map, params) {
  var promise = searchNearby(...arguments);

  return dispatch => {
    dispatch({
      type: FETCH_PLACE_DETAILS__BEGIN
    });
    dispatch({
      type: FETCH_NEARBY_PLACES,
      payload: promise
    });
  };
}

export function fetchPlaceDetails(google, map, placeId) {
  var promise = getDetails(...arguments);

  return {
    type: FETCH_PLACE_DETAILS,
    payload: promise
  };
}
