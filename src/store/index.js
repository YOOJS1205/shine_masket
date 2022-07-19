import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UserInfoReducer from './UserInfo';
import PostInfoReducer from './PostInfo';

const persistConfig = {
  key: 'UserInfo',
  storage,
  whitelist: ['UserInfoReducer', 'PostInfoReducer'],
};

const rootReducer = combineReducers({
  UserInfoReducer,
  PostInfoReducer,
});

export default persistReducer(persistConfig, rootReducer);
