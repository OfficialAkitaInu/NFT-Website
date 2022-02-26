import React from 'react'
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import Logo from '../../images/watermarked_logo.webp'
import './index.scss'

import { openConnectModal } from "../../services/actions/actions";

const Navbar = ({address, showConnectModal}) => {
    function shortenAddress(address) {
        return address.substring(0,5) + '...' + address.substring(address.length - 5);
    }

    return (
        <>
            <nav className="navbar navbar-expand-xl navbar-dark bg-dark-grey">
                <div className="container">
                    <Link className="navbar-brand nft-font" to="/">
                        <img src={Logo} alt="" width="40" className="me-2 rounded"/> Akita <span className="nft-green">Kennel Club</span>
                    </Link>
                    <button className="navbar-toggler rounded-4 shadow-sm nftBackground" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse px-3" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-0 mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/collection">Collection</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" target="_blank" rel="noreferrer" href="https://www.nftexplorer.app/sellers?collection=akita-kennel-club">Listings</a>
                            </li>
                            {/*<li className="nav-item">
                                <a className="nav-link" href="/merch">Merch</a>
                            </li>*/}
                            <li className="nav-item">
                                <Link className="nav-link" to="/faq">FAQ</Link>
                            </li>
                            {<li className="nav-item my-2">
                                {!address 
                                    ? <div className="connect-button btn-sm ms-0 ms-md-4 px-3 rounded-pill" aria-current="page" onClick={() => {showConnectModal()}}>Connect Wallet</div>
                                    : <div className="connect-button btn-sm ms-0 ms-md-4 px-3 rounded-pill" aria-current="page" onClick={() => {showConnectModal()}}>{shortenAddress(address)}</div>
                                }
                            </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

const mapStateToProps = (state) => ({
    address: state.connect?.address,
});

const mapDispatchToProps = (dispatch) => ({
    showConnectModal: () => dispatch(openConnectModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
