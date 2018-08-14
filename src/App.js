import React from 'react';
import 'typeface-roboto'; // eslint-disable-line
import { Provider } from 'react-redux';
import './App.css';
import Landing from './components/Landing';
import createStore from './store/store';

const store = createStore;

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Landing />
    </div>
  </Provider>
);

export default App;
