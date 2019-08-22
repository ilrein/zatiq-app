import {
  CAPTURE_USER,
} from '../../constants/types';

function userReducer(state = {}, action) {
  switch (action.type) {
    case CAPTURE_USER:
      return action.payload;
    default:
      return state;
  }
}

export default userReducer;
