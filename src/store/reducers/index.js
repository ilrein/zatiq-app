import {
  combineReducers,
} from 'redux';

import userReducer from './userReducer';
import restaurantsReducer from './restaurantsReducer';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({
  user: userReducer,
  restaurants: restaurantsReducer,
  session: sessionReducer,
});

export default rootReducer;
