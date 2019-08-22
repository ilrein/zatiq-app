import {
  combineReducers,
} from 'redux';

// import userReducer from './userReducer';
import restaurantsReducer from './restaurantsReducer';
// import dishesReducer from './dishesReducer';
// import menusReducer from './menusReducer';

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
});

export default rootReducer;
