import React from 'react'
import { connect } from 'react-redux';

import Logo from '../../images/watermarked_logo.webp'
import './index.scss'

import MyAlgoConnect from '@randlabs/myalgo-connect';

import { connectWallet, disconnectWallet } from "../../services/actions/actions";
import { myAlgoWallet } from '../../services/reducers/connect/connect'

const Navbar = ({address, connectWallet, disconnectWallet, myAlgoWallet}) => {
    function shortenAddress(address) {
        return address.substring(0,5) + '...' + address.substring(address.length - 5);
    }

    async function connectToMyAlgo() {
        try {
            myAlgoWallet = myAlgoWallet = new MyAlgoConnect();

            const accounts = await myAlgoWallet.connect();
            const addresses = accounts.map(account => account.address);

            connectWallet(addresses[0]);
            localStorage.setItem("myAlgoAddress", addresses[0])
          
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-xl navbar-dark bg-dark-grey">
                <div className="container">
                    <a className="navbar-brand nft-font" href="/">
                        <img src={Logo} alt="" width="40" className="me-2 rounded"/> Akita <span className="nft-green">Kennel Club</span>
                    </a>
                    <button className="navbar-toggler rounded-4 shadow-sm nftBackground" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse px-3" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-0 mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/collection">Collection</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/faq">FAQ</a>
                            </li>
                            {/*<li className="nav-item my-2">
                                {!address 
                                    ? <div className="connect-button btn-sm ms-0 ms-md-4 px-3 rounded-pill" aria-current="page" onClick={() => {connectToMyAlgo()}}>Connect Wallet</div>
                                    : <div className="connect-button btn-sm ms-0 ms-md-4 px-3 rounded-pill" aria-current="page" onClick={() => {disconnectWallet()}}>{shortenAddress(address)}</div>
                                }
                            </li>*/}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

const mapStateToProps = (state) => ({
    address: state.connect?.address,
    myAlgoWallet: myAlgoWallet
});

const mapDispatchToProps = (dispatch) => ({
    connectWallet: (address) => dispatch(connectWallet(address)),
    disconnectWallet: () => dispatch(disconnectWallet()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
