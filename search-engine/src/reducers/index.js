import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import searchReducer from "./searchReducer";

export default combineReducers({
  form: FormReducer,
  search: searchReducer
});
