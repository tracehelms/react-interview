import { createStore, combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";

import commentsReducer from './reducers/comments';

const reducers = combineReducers({
  comments: commentsReducer,
  routing: routerReducer
});

export default createStore(reducers);
