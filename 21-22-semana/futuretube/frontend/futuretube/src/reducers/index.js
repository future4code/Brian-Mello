import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import videos from '../reducers/videos'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    videos,
    // Outros reducers aqui
  });
