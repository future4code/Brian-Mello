import React from 'react';
import { Provider } from 'react-redux';
import TodoContainer from './components/TodoContainer';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store = {store}>
      <TodoContainer/>
    </Provider>
  );
}

export default App;
