import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Gif from '../../../images/nft.gif';
import './index.scss';

import algosdk from 'algosdk';
import { formatJsonRpcRequest } from "@json-rpc-tools/utils";

import { openConnectModal, openWalletConnectModal, closeModal } from "../../../services/actions/actions";

import { myAlgoWallet, walletConnect } from '../../../services/reducers/connect/connect'

const axios = require('axios').default;

const HeroSection = ({address, showConnectModal, showWalletConnectModal, closeModal, myAlgoWallet, walletConnect}) => {

    const [entered, setEntered] = useState(null);
    const [winner, setWinner] = useState(null);
    const [NftID, setNftID] = useState(null);
    const [claimed, setClaimed] = useState(null);
    
    function base64Encode(input) {
        return btoa(input.reduce((str, byte) => str + String.fromCharCode(byte), ""));
    }

    async function getEntered() {
        const response = await fetch(process.env.REACT_APP_API_ADDRESS + "/entered", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({wallet_address: address})
        }).then((response) => {
            if (response.status === 200) {
                setEntered(true)
                return true;
            }
            else {
                setEntered(false);
                return false;
            }
        })
        .catch((error) => {
            console.error(error);
            setEntered(false);
            return false;
        });

        return response;
    }

    async function isWinner() {
        await fetch(process.env.REACT_APP_API_ADDRESS + "/isWinner", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({wallet_address: address})
        })
            .then(response => {
                if (response.status === 200) {
                    setWinner(true);
                }
                else {
                    setWinner(false);
                }
                return response.json()
            })
            .then(data => {
                setNftID(data.nft_id);
                setClaimed(data.claimed);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        if (address) {
            getEntered();
            isWinner();
        }
    }, [address])

    async function enterShuffle() {
        if (!address) {
            showConnectModal();
            return;
        }

        if (await getEntered()) {
            return;
        }

        const response = await fetch(process.env.REACT_APP_API_ADDRESS + "/enter", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({wallet_address: address})
        });

        if (response.ok) {
            setEntered(true);
            return true;
        }
        else {
            setEntered(false);
            document.getElementById("enter-button").classList.add("apply-shake");

            document.getElementById("enter-button").addEventListener("animationend", (e) => {
                document.getElementById("enter-button").classList.remove("apply-shake");
            });
            return false;
        }
    }

    async function claimNFT() {
        const algodClient = new algosdk.Algodv2("",'https://api.algoexplorer.io', '');
        const params = await algodClient.getTransactionParams().do();

        const txn1 = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
            suggestedParams: {
                ...params,
            },
            from: address,
            to: address,
            amount: 0,
            assetIndex: NftID,
        })

        const txn2 = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
            suggestedParams: {
                ...params,
            },
            from: address,
            to: process.env.REACT_APP_NFT_WALLET, 
            amount: 50000000,
        });

        const txnsToGroup = [ txn1, txn2 ];
        const groupID = algosdk.computeGroupID(txnsToGroup)
        for (let i = 0; i < 2; i++) txnsToGroup[i].group = groupID;

        let signed_transactions = [];
        let transactions_to_send = [];

        if (localStorage.getItem("walletconnect")) {
            const txnsToSign = txnsToGroup.map(txn => {
                const encodedTxn = Buffer.from(algosdk.encodeUnsignedTransaction(txn)).toString("base64");
              
                return {
                  txn: encodedTxn,
                  message: 'Description of transaction being signed',
                  // Note: if the transaction does not need to be signed (because it's part of an atomic group
                  // that will be signed by another party), specify an empty singers array like so:
                  // signers: [],
                };
            });

            const requestParams = [txnsToSign];

            const request = formatJsonRpcRequest("algo_signTxn", requestParams);
            showWalletConnectModal();
            try {
                const result = await walletConnect.sendCustomRequest(request);
                signed_transactions = result.map(element => {
                    return element ? new Uint8Array(Buffer.from(element, "base64")) : null;
                });
                signed_transactions.forEach((signed_transaction) => {
                    transactions_to_send.push(base64Encode(signed_transaction))
                })
                closeModal();
            }
            catch (e) {
                console.error(e);
                closeModal();
                return;
            }
        }
        else if (localStorage.getItem("myAlgoAddress")) {
            signed_transactions = await myAlgoWallet.signTransaction(txnsToGroup.map(txn => txn.toByte()));
            signed_transactions.forEach((signed_transaction) => {
                transactions_to_send.push(base64Encode(signed_transaction.blob))
            })
        }

        const response = await axios.post(process.env.REACT_APP_API_ADDRESS + '/sendClaimTransaction', {
            "wallet_address": address,
            "transactions": transactions_to_send,
        })

        if (!response.data.Error) {
            window.location.href = `https://nft.akita.community/winner/${NftID}`;
        }
    }

    return (
        <div className="nftBackground text-white">
            <div className="container small-width">
                <div className="row align-items-center py-6 px-3 h-full-screen">
                    <div className="col-12 text-center">
                        <img src={Gif} width="350" alt="" className="img-fluid d-block mx-auto rounded-circle mb-5 border border-dark border-3"/>
                        {/*entered !== null && !entered || !address
                            ? <button id="enter-button" onClick={() => {enterShuffle()}} className="btn btn-outline-light btn-lg rounded-pill shadow border-2">Enter Shuffle</button>
                            : <h1>You have entered the shuffle!</h1>
                        */}
                        {address && winner !== null && (!winner
                            ? <h1>You didn't win, better luck next time!</h1>
                            : (
                                !claimed ? (
                                <>
                                    <h1>You're a winner!</h1>
                                    <button id="enter-button" onClick={() => {claimNFT()}} className="btn btn-outline-light btn-lg rounded-pill shadow border-2 mt-3">Adopt Your Akita (50A)</button>
                                </>
                                ) 
                                : ""
                            ))
                        }
                    </div>
                </div>
            </div>
            <svg className="m-minus-1 img-flip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><g transform="translate(720,174) scale(1,1) translate(-720,-174)"><path d="" fill="rgb(46,49,54)"><animate attributeName="d" dur="19s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="0s" values="M0 0L 0 214.9848280783939Q 80 242.72337307300558  160 200.05274309068835T 320 248.32458218997903T 480 238.66661821384852T 640 211.51960143889377T 800 207.98735971355623T 960 232.02152666571124T 1120 245.30669005296505T 1280 198.19930544107874T 1440 250.84949882665188L 1440 0 Z;M0 0L 0 223.30027872793684Q 80 217.21585917207992  160 196.99219800755813T 320 235.7018398487831T 480 212.04486641371636T 640 215.35424936215801T 800 217.4303837193541T 960 230.98795985107128T 1120 241.45831217487108T 1280 235.13433305562006T 1440 225.3717148633125L 1440 0 Z;M0 0L 0 254.79151635136407Q 80 231.08654293726624  160 182.13816053818394T 320 206.8510621791531T 480 230.5404442241851T 640 183.52616381182872T 800 253.8776516435699T 960 204.1873984247278T 1120 201.07029069018844T 1280 256.0461840485549T 1440 242.0124681466796L 1440 0 Z;M0 0L 0 214.9848280783939Q 80 242.72337307300558  160 200.05274309068835T 320 248.32458218997903T 480 238.66661821384852T 640 211.51960143889377T 800 207.98735971355623T 960 232.02152666571124T 1120 245.30669005296505T 1280 198.19930544107874T 1440 250.84949882665188L 1440 0 Z"></animate></path></g></svg>
        </div>
    )
}

const mapStateToProps = (state) => ({
    address: state.connect?.address,
    myAlgoWallet: myAlgoWallet,
    walletConnect:  walletConnect
});

const mapDispatchToProps = (dispatch) => ({
    showConnectModal: () => dispatch(openConnectModal()),
    showWalletConnectModal: () => dispatch(openWalletConnectModal()),
    closeModal: (id) => dispatch(closeModal(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);