import { combineReducers } from 'redux';
import UserReducer from './UserReducer';

const reducers = combineReducers({
  users: UserReducer
})

export default reducers;

export type UserState = ReturnType<typeof reducers>