import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Dashboard from './components/Dashboard';
import createStore from './store/store';

const store = createStore;

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Dashboard />
    </div>
  </Provider>
);

export default App;
