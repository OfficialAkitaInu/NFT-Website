import {SHOW_CONNECT_MODAL, SHOW_WALLET_CONNECT_MODAL, HIDE_MODAL } from '../../constants/ActionTypes'

export function connect_modal(state = null, action) {
  switch (action.type) {
    case SHOW_CONNECT_MODAL:
      return {
        type: action.type,
      }
    case HIDE_MODAL:
      return null
    default:
      return state
  }
}

export function wallet_connect_modal(state = null, action) {
  switch (action.type) {
    case SHOW_WALLET_CONNECT_MODAL:
      return {
        type: action.type,
      }
    case HIDE_MODAL:
      return null
    default:
      return state
  }
}