import {FETCH_NEARBY_PLACES, FETCH_PLACE_DETAILS} from 'actions/actions'

const INITIAL_STATE = {
  all: [],
  current: null
};

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_PLACE_DETAILS:
    console.log('payload': action.payload);
    return {
      ...state,
      current: action.payload.data
    }
  case FETCH_NEARBY_PLACES:
    console.log('payload': action.payload);
    return {
      ...state,
      all: action.payload.data
      // pagination: action
    };
  default:
    return state;
  } //end switch
}
