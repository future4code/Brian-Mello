import { combineReducers } from "redux";
import tasks from "./weekTasksReducer"

export const rootReducer = combineReducers({
  tasks
});
