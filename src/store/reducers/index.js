import {
  combineReducers,
} from 'redux';

import userReducer from './userReducer';
import restaurantsReducer from './restaurantsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  restaurants: restaurantsReducer,
});

export default rootReducer;
