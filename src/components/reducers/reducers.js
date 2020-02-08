import { combineReducers } from "redux";
import { courseReducer } from "./courseReducer";
import { sectionReducer } from "./sectionReducer";
import { dragReducer } from "./dragReducer";

const reducers = combineReducers({
  courseReducer,
  sectionReducer,
  dragReducer
});

export default reducers;
