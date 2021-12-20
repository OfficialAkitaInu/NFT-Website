import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import {connect} from './connect/connect';

export default createStore(combineReducers({connect}),applyMiddleware(thunk));