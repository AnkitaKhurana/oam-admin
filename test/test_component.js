import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import test from 'tape';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import sinonStubPromise from 'sinon-stub-promise';
import Title from '../src/components/Title';

sinonStubPromise(sinon);

// JSDOM
const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html>hello');
const document = dom.window.document;

// Mock Store
const mockStore = configureStore();
const initialState = {
  temp: {
    items: '',
    isAuthentic: false
  }
};
const store = mockStore(initialState);


it('Title Component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><Title /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});


// test('Title Component renders without crashing', (t) => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Provider store={store}><Title /></Provider>, div);
//   ReactDOM.unmountComponentAtNode(div);
//   // t.end();
// });

