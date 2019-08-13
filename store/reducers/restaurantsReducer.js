import {
  CAPTURE_RESTAURANTS,
} from '../../constants/actions';

function restaurantsReducer(state = {}, action) {
  switch (action.type) {
    case CAPTURE_RESTAURANTS:
      return action.payload;
    default:
      return state;
  }
}

export default restaurantsReducer;
