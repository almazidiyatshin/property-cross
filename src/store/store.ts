import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { reducer } from '../reducers/reducer';

import { requestMiddleware } from '../middlewares/requestMiddleware';

export const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, requestMiddleware)
);
