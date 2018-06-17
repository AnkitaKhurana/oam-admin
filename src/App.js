import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Title from './components/Title';
import LoginForm from './components/LoginForm';
import createStore from './store/store';

const store = createStore;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Title className="App-title" />
          </header>
          <p className="App-intro">
          Admin Login
          </p>
          <LoginForm/>
        </div>
      </Provider>
    );
  }
}

export default App;
