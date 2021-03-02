import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { login } from './reducers/loginReducer.js'

const rootReducer = combineReducers({
  login: loginReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))