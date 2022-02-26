import React, { useRef, useCallback, useEffect } from 'react';
import {connect} from 'react-redux';

import {SHOW_CONNECT_MODAL} from '../../services/constants/ActionTypes';

import {closeModal, connectWallet} from '../../services/actions/actions';
import {myAlgoWallet, walletConnect} from '../../services/reducers/connect/connect'

import { Background, ModalWrapper, CloseModalButton, ConnectButtonWrapper, ConnectButton, ButtonLogo, ModalHeader } from './ConnectModalElements';
import MyAlgoLogo from '../../images/MyAlgo_Icon.png';
import OfficialAlgoLogo from '../../images/Algo_Official_Icon.png';

import WalletConnect from "@walletconnect/client";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";
import MyAlgoConnect from '@randlabs/myalgo-connect';

import { disconnectWallet } from "../../services/actions/actions";

const ConnectModal = ({connect_modal, closeModal, walletConnect, myAlgoWallet, address, connectWallet, disconnectWallet}) => {
    async function connectToMyAlgo() {
        try {
            myAlgoWallet = myAlgoWallet = new MyAlgoConnect();

            const accounts = await myAlgoWallet.connect();
            const addresses = accounts.map(account => account.address);

            if (addresses) {
                connectWallet(addresses[0]);
                localStorage.setItem("myAlgoAddress", addresses[0])
                closeModal();
            }
          
        } catch (err) {
            console.error(err);
        }
    }

    async function connectToWalletConnect() {
        // Check if connection is already established
        if (walletConnect && walletConnect.connected) {
            await walletConnect.killSession();
        }

        walletConnect = null;

        walletConnect = new WalletConnect({
            bridge: "https://bridge.walletconnect.org", 
            qrcodeModal: QRCodeModal,
        });
        
        // create new session
        if (walletConnect && !walletConnect.connected) {
            await walletConnect.createSession();
        }

        // Subscribe to connection events
        walletConnect.on("connect", (error, payload) => {
            if (error) {
                throw error;
            }
        
            // Get provided accounts
            const { accounts } = payload.params[0];
            connectWallet(accounts[0]);
            closeModal();
        });
        
        walletConnect.on("disconnect", (error, payload) => {
            if (error) {
                throw error;
            }
        });
    }
    
    function shortenAddress(address) {
        return address.substring(0,10) + '...' + address.substring(address.length - 10);
    }

    function copyAddress(address) {
        navigator.clipboard.writeText(address);
        document.querySelector(".connect-button-wrapper p").textContent = "Copied";
        setTimeout(function() {
            document.querySelector(".connect-button-wrapper p").textContent = shortenAddress(address);
        }, 1000)
    }

    function disconnect() {
        disconnectWallet();
    }

    const modalRef = useRef()

    const closeModalBackground = e => {
        if (modalRef.current === e.target) {
            closeModal()
        }
    }

    const keyPress = useCallback(e => {
        if (e.key === 'Escape') {
            closeModal()
        }
    },[closeModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    })

    if (!connect_modal) {
        return null;
    }

    return (       
        <>
        { connect_modal.type === SHOW_CONNECT_MODAL &&
            <Background ref={modalRef} onClick={closeModalBackground}>
                <ModalWrapper>
                    <CloseModalButton onClick={closeModal}/>
                    <ModalHeader>
                    {!address
                      ? "Connect Wallet"
                      : "Wallet Connected"
                    }
                    </ModalHeader>
                    <ConnectButtonWrapper className="connect-button-wrapper">
                    {!address
                      ? <>
                          <ConnectButton onClick={connectToMyAlgo}>
                              <ButtonLogo src={MyAlgoLogo}/>
                              MyAlgo Wallet
                          </ConnectButton>
                          <ConnectButton onClick={connectToWalletConnect}>
                              <ButtonLogo src={OfficialAlgoLogo}/>
                              Official Algorand Wallet
                          </ConnectButton>
                        </>
                      : <>
                        <p onClick={() => {copyAddress(address)}}>{shortenAddress(address)}</p>
                        <ConnectButton onClick={disconnect}>
                            Disconnect
                        </ConnectButton>
                        </>
                   }
                    </ConnectButtonWrapper>
                </ModalWrapper>
            </Background>
        }
            
        </>
    )
}

const mapStateToProps = (state) => ({
    connect_modal: state.connect_modal,
    walletConnect: walletConnect,
    myAlgoWallet: myAlgoWallet,
    address: state.connect?.address
});
  
const mapDispatchToProps = (dispatch) => ({
    closeModal: (id) => dispatch(closeModal(id)),
    connectWallet: (address) => dispatch(connectWallet(address)),
    disconnectWallet: () => dispatch(disconnectWallet()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectModal);
