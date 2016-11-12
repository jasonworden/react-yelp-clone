import {
  FETCH_NEARBY_PLACES,
  FETCH_PLACE_DETAILS,
  FETCH_PLACE_DETAILS__BEGIN
} from 'actions/actions'

const INITIAL_STATE = {
  all: [],
  detail: {
    loading: true,
    place: {},
    location: {}
  }
};

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_NEARBY_PLACES:
    return {
      ...state,
      all: action.payload
    };
  case FETCH_PLACE_DETAILS__BEGIN:
    return {
      ...state,
      detail: INITIAL_STATE.detail
    }
  case FETCH_PLACE_DETAILS:
    return {
      ...state,
      detail: {
        loading: false,
        place: action.payload,
        location: {
          lat: action.payload.geometry.location.lat(),
          lng: action.payload.geometry.location.lng()
        }
      }
    };
  default:
    return state;
  } //end switch
}
