import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UserInfoReducer from './UserInfo';

const persistConfig = {
  key: 'UserInfo',
  storage,
  whitelist: ['UserInfoReducer'],
};

const rootReducer = combineReducers({
  UserInfoReducer,
});

export default persistReducer(persistConfig, rootReducer);
