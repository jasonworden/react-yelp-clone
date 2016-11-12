import {FETCH_NEARBY_PLACES, FETCH_PLACE_DETAILS} from 'actions/actions'

const INITIAL_STATE = {
  all: [],
  current: null
};

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_NEARBY_PLACES:
    debugger
    console.log('payload for nearby places': action.payload);
    return {
      ...state,
      all: action.payload
    };
  case FETCH_PLACE_DETAILS:
    console.log('payload for fetch details': action.payload);
    return {
      ...state,
      current: action.payload
    };
  default:
    return state;
  } //end switch
}
