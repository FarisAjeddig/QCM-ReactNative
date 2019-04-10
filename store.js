import { createStore, combineReducers } from 'redux';
import levelReducer from './Reducers/levelReducer';

const rootReducer = combineReducers({
  level: levelReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
