import {
  CAPTURE_SESSION,
} from '../../constants/types';

function sessionReducer(state = {}, action) {
  switch (action.type) {
    case CAPTURE_SESSION:
      return action.payload;
    default:
      return state;
  }
}

export default sessionReducer;
