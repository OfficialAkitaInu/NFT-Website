import {CONNECT_WALLET, DISCONNECT_WALLET} from '../../constants/ActionTypes'

import WalletConnect from "@walletconnect/client";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";
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
      if (walletConnect.connected) {
        walletConnect.killSession();
      }
      localStorage.removeItem("myAlgoAddress");
      localStorage.removeItem("walletconnect");
      return {
        ...state,
        address: null
      }
    default:
      return state
  }
}

export let walletConnect = new WalletConnect({
  bridge: "https://bridge.walletconnect.org", 
  qrcodeModal: QRCodeModal,
});

export let myAlgoWallet = new MyAlgoConnect();