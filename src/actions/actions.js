import axios from 'axios'
import {searchNearby, getDetails} from 'utils/googleApiHelpers'

export const FETCH_NEARBY_PLACES = 'FETCH_NEARBY_PLACES';
export const FETCH_PLACE_DETAILS = 'FETCH_PLACE_DETAILS';

export function fetchNearbyPlaces(google, map, params) {
  var request = searchNearby(...arguments);

  return {
    type: FETCH_NEARBY_PLACES,
    payload: request
  };
}

export function fetchPlaceDetails(google, map, placeId) {
  var request = searchNearby(...arguments);

  return {
    type: FETCH_PLACE_DETAILS,
    payload: request
  };
}
