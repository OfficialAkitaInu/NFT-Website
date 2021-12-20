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
            getEntered();
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
                    {!entered || !address
                        ? <button onClick={() => {enterShuffle()}} className="btn btn-outline-light btn-lg rounded-pill shadow border-2">Enter Shuffle</button>
                        : <h1>You have entered the shuffle!</h1>
                    }
                    
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="m-minus-1"><path fill="rgb(46,49,54)" d="M0,128L15,128C30,128,60,128,90,128C120,128,150,128,180,112C210,96,240,64,270,64C300,64,330,96,360,106.7C390,117,420,107,450,122.7C480,139,510,181,540,202.7C570,224,600,224,630,186.7C660,149,690,75,720,64C750,53,780,107,810,154.7C840,203,870,245,900,261.3C930,277,960,267,990,234.7C1020,203,1050,149,1080,149.3C1110,149,1140,203,1170,186.7C1200,171,1230,85,1260,80C1290,75,1320,149,1350,181.3C1380,213,1410,203,1425,197.3L1440,192L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"></path></svg>
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