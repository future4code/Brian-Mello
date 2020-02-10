import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(rootReducer);
 

function App() {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
}

export default App;
