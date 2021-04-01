import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { modalReducer } from './reducers/modal';
import { themeReducer } from './reducers/theme';

const rootReducer = combineReducers({
  modal: modalReducer,
  theme: themeReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
