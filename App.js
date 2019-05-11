import React, { Component } from 'react';
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux';
import configureStore from './store';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'

export default class App extends Component {
  render() {
    let persistor = persistStore(configureStore)
    return (
      <Provider store={configureStore}>
       <PersistGate persistor={persistor}>
        <Navigation />
       </PersistGate>
      </Provider>
    );
  }
}
