import React, { useRef } from 'react';
import {connect} from 'react-redux';

import {SHOW_WALLET_CONNECT_MODAL} from '../../services/constants/ActionTypes';

import {closeModal} from '../../services/actions/actions';

import { Background, ModalWrapper, CloseModalButton, ModalHeader, WalletConnectTextWrapper } from './WalletConnectModalElements';

const WalletConnectModal = ({wallet_connect_modal, closeModal}) => {

    const modalRef = useRef()

    if (!wallet_connect_modal) {
        return null;
    }

    return (       
        <>
        { wallet_connect_modal.type === SHOW_WALLET_CONNECT_MODAL &&
            <Background ref={modalRef}>
                <ModalWrapper>
                    <CloseModalButton onClick={closeModal}/>
                    <ModalHeader>
                        Transaction Pending
                    </ModalHeader>
                    <WalletConnectTextWrapper>
                        <p>Please Check The Official Algorand App To Proceed</p>
                    </WalletConnectTextWrapper>
                </ModalWrapper>
            </Background>
        }
            
        </>
    )
}

const mapStateToProps = (state) => ({
    wallet_connect_modal: state.wallet_connect_modal,
});
  
const mapDispatchToProps = (dispatch) => ({
    closeModal: (id) => dispatch(closeModal(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletConnectModal);
