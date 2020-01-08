import { combineReducers } from "redux";
import { tasksReducer } from "./todos";

export const rootReducer = combineReducers({
    todos: tasksReducer,
});