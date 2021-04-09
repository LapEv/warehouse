import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { modalReducer } from './reducers/modal';
import { themeReducer } from './reducers/theme';
import { pinCodeReducer } from './reducers/security';

const rootReducer = combineReducers({
  modal: modalReducer,
  pinCode: pinCodeReducer,
  theme: themeReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
