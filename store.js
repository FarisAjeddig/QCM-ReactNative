import { createStore } from 'redux';
import level from './Reducers/levelReducer';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootPersistConfig = {
  key: 'root',
  storage: storage
}
//
// const rootReducer = persistCombineReducers(rootPersistConfig, {
//   level: level
// });
//
// const configureStore = () => {
//   return createStore(rootReducer);
// }
//
// export default configureStore;


export default createStore(persistCombineReducers(rootPersistConfig, {level: level}))
