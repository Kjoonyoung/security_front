import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './Auth';
import tokenReducer1 from './Auth';
import userInfoReducer from './UserInfo';
import userSignUpReducer from './UserSignUp';

export default configureStore({
  reducer: {
    token: tokenReducer,
    userInfo: userInfoReducer
  },
  reducer: {
    token: tokenReducer1,
    userSignUp: userSignUpReducer
  },
});