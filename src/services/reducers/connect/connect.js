import {CONNECT_WALLET, DISCONNECT_WALLET} from '../../constants/ActionTypes'

import MyAlgoConnect from '@randlabs/myalgo-connect';

let defaultState = null;

if (localStorage.walletconnect) {
    defaultState = {
      address: JSON.parse(localStorage.walletconnect).accounts[0]
    }
} else if (localStorage.getItem("myAlgoAddress") !== null){
  defaultState = {
    address: localStorage.getItem("myAlgoAddress")
  }
}

export function connect(state = defaultState, action) {
  switch (action.type) {
    case CONNECT_WALLET:
      return {
        ...state,
        address: action.address
      }
    case DISCONNECT_WALLET:
      localStorage.removeItem("myAlgoAddress");
      return {
        ...state,
        address: null
      }
    default:
      return state
  }
}

export const myAlgoWallet = new MyAlgoConnect();