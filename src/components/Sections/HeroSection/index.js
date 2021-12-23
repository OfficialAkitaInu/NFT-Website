import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Gif from '../../../images/nft.gif';
import './index.scss';

import MyAlgoConnect from '@randlabs/myalgo-connect';

import { connectWallet } from "../../../services/actions/actions";
import {myAlgoWallet} from '../../../services/reducers/connect/connect'

const HeroSection = ({address, connectWallet, myAlgoWallet}) => {
    const [entered, setEntered] = useState(false);

    async function getEntered() {
        const response = await fetch(process.env.REACT_APP_API_URL + "/entered", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({wallet_address: localStorage.getItem("myAlgoAddress")})
        });
        if (response.ok) {
            setEntered(true)
            return true;
        }
        else {
            setEntered(false);
            return false;
        }
    }

    useEffect(() => {
        if (localStorage.getItem("myAlgoAddress")) {
            //getEntered();
        }
    }, [])

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

    async function enterShuffle() {
        if (!address) {
            await connectToMyAlgo();
        }
        
        if (getEntered()) {
            return true;
        }

        const response = await fetch(process.env.REACT_APP_API_URL + "/enter", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({wallet_address: localStorage.getItem("myAlgoAddress")})
        });

        if (response.ok) {
            setEntered(true);
            return true;
        }
        else {
            setEntered(false);
            return false;
        }

    }

    return (
        <div className="nftBackground text-white">
        <div className="container small-width">
            <div className="row align-items-center py-6 px-3 h-full-screen">
                <div className="col-12 text-center">
                    <img src={Gif} width="350" alt="" className="img-fluid d-block mx-auto rounded-circle mb-5 border border-dark border-3"/>
                    {/*!entered || !address
                        ? <button onClick={() => {enterShuffle()}} className="btn btn-outline-light btn-lg rounded-pill shadow border-2">Enter Shuffle</button>
                        : <h1>You have entered the shuffle!</h1>
                    */}
                    
                </div>
            </div>
        </div>
        <svg className="m-minus-1 img-flip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><g transform="translate(720,174) scale(1,1) translate(-720,-174)"><path d="" fill="rgb(46,49,54)"><animate attributeName="d" dur="19s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="0s" values="M0 0L 0 214.9848280783939Q 80 242.72337307300558  160 200.05274309068835T 320 248.32458218997903T 480 238.66661821384852T 640 211.51960143889377T 800 207.98735971355623T 960 232.02152666571124T 1120 245.30669005296505T 1280 198.19930544107874T 1440 250.84949882665188L 1440 0 Z;M0 0L 0 223.30027872793684Q 80 217.21585917207992  160 196.99219800755813T 320 235.7018398487831T 480 212.04486641371636T 640 215.35424936215801T 800 217.4303837193541T 960 230.98795985107128T 1120 241.45831217487108T 1280 235.13433305562006T 1440 225.3717148633125L 1440 0 Z;M0 0L 0 254.79151635136407Q 80 231.08654293726624  160 182.13816053818394T 320 206.8510621791531T 480 230.5404442241851T 640 183.52616381182872T 800 253.8776516435699T 960 204.1873984247278T 1120 201.07029069018844T 1280 256.0461840485549T 1440 242.0124681466796L 1440 0 Z;M0 0L 0 214.9848280783939Q 80 242.72337307300558  160 200.05274309068835T 320 248.32458218997903T 480 238.66661821384852T 640 211.51960143889377T 800 207.98735971355623T 960 232.02152666571124T 1120 245.30669005296505T 1280 198.19930544107874T 1440 250.84949882665188L 1440 0 Z"></animate></path></g></svg>
    </div>
    )
}

const mapStateToProps = (state) => ({
    address: state.connect?.address,
    myAlgoWallet: myAlgoWallet
});

const mapDispatchToProps = (dispatch) => ({
    connectWallet: (address) => dispatch(connectWallet(address))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);