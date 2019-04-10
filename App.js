import React, { Component } from 'react';
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux';
import configureStore from './store';

export default class App extends Component {
  render() {

    return (
      <Provider store={configureStore()}>
        <Navigation />
      </Provider>
    );
  }
}
