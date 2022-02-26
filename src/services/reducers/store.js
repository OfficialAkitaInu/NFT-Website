import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import {connect_modal, wallet_connect_modal} from './modal/modal';
import {connect} from './connect/connect';

export default createStore(combineReducers({connect_modal, wallet_connect_modal, connect}),applyMiddleware(thunk));