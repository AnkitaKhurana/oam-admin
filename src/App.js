import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Dashboard from './components/Dashboard';
import createStore from './store/store';
const store = createStore;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <Dashboard/>          
        </div>
      </Provider>
    );
  }
}

export default App;
