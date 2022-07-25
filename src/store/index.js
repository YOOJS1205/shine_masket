import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UserInfoReducer from './UserInfo';
import PostInfoReducer from './PostInfo';
import OtherUserInfoReducer from './OtherUserInfo';
import ProductInfoReducer from './ProductInfo';

const persistConfig = {
  key: 'UserInfo',
  storage,
  whitelist: ['UserInfoReducer', 'PostInfoReducer', 'OtherUserInfoReducer', 'ProductInfoReducer'],
};

const rootReducer = combineReducers({
  UserInfoReducer,
  PostInfoReducer,
  OtherUserInfoReducer,
  ProductInfoReducer,
});

export default persistReducer(persistConfig, rootReducer);
