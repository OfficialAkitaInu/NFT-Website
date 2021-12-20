import {CONNECT_WALLET, DISCONNECT_WALLET} from '../constants/ActionTypes'

export const connectWallet = (address) => {
  return async (dispatch) => {
    dispatch({
      type: CONNECT_WALLET,
      address: address
    })
  }
}

export const disconnectWallet = (data) => {
  return async (dispatch) => {
    dispatch({
      type: DISCONNECT_WALLET
    })
  }
}