import { PERFORM_SEARCH } from "../actions/types";

const INITIAL_STATE = {
  searchResults: undefined
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PERFORM_SEARCH:
      return { ...state, searchResults: action.payload };
    default:
      return state;
  }
};
export default searchReducer;
