import { combineReducers } from "redux";
import { courseReducer } from "./courseReducer";
import { sectionReducer } from "./sectionReducer";

const reducers = combineReducers({
  courseReducer,
  sectionReducer
});

export default reducers;
