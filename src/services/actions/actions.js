import {SHOW_CONNECT_MODAL, SHOW_WALLET_CONNECT_MODAL, HIDE_MODAL, CONNECT_WALLET, DISCONNECT_WALLET} from '../constants/ActionTypes'

export const openConnectModal = () => {
  return async (dispatch) => {
    dispatch({
      type: SHOW_CONNECT_MODAL
    })
  }
}

export const openWalletConnectModal = () => {
  return async (dispatch) => {
    dispatch({
      type: SHOW_WALLET_CONNECT_MODAL
    })
  }
}

export const closeModal = () => ({ type: HIDE_MODAL });

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