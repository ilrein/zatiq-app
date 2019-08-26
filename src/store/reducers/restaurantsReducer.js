import {
  CAPTURE_RESTAURANTS,
} from '../../constants/types';

function restaurantsReducer(state = {
  docs: [],
  totalDocs: 0,
  limit: 10,
  hasPrevPage: false,
  hasNextPage: false,
  page: 1,
  totalPages: 1,
  pagingCounter: 1,
  prevPage: null,
  nextPage: null,
}, action) {
  switch (action.type) {
    case CAPTURE_RESTAURANTS:
      return action.payload;
    default:
      return state;
  }
}

export default restaurantsReducer;
