import React from 'react'
import Logo from '../../images/nft/IMG_0505.jpg'

import './index.scss'

function Navbar() {   
    return (
        <>
            <nav className="navbar navbar-expand-xl navbar-dark bg-dark-grey">
                <div className="container">
                    <a className="navbar-brand nft-font" href="/">
                        <img src={Logo} alt="" width="40" className="me-2"/> Akita <span className="nft-green">Kennel Club</span>
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
                            <li className="nav-item my-2">
                                <a className="btn btn-outline-light btn-sm ms-0 ms-md-4 px-3 rounded-pill border-2" aria-current="page" href="#awards">Connect Wallet</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}




export default Navbar;
