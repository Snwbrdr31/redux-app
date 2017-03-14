import { combineReducers } from 'redux';
import todos from './todos';
import nextId from './nextId';
import filter from './filter';
import products from './products';

const rootReducer = combineReducers({ 
  todos, 
  nextId,
  filter,
  products,
});

export default rootReducer;
