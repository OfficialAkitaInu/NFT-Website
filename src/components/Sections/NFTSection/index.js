import React, { useState, useEffect } from 'react';

import NftFilterData from '../../../details.json';
import NftData from '../../../data.json';
import LazyLoad, { forceVisible } from "react-lazyload";

import loadingImg from '../../../images/loading.png';

import './index.scss';

const NFTSection = () => {

    useEffect(() => {
        setAttributes()
    });

    function setQueryStringParameter(name, value) {
        const params = new URLSearchParams(window.location.search);
        params.set(name, value);
        window.history.replaceState({}, "", decodeURIComponent(`${window.location.pathname}?${params}`));
    }

    const [getHead, setHead] = useState('');
    const [getEyes, setEyes] = useState('');
    const [getSnout, setSnout] = useState('');
    const [getBody, setBody] = useState('');
    const [getBack, setBack] = useState('');
    const [getSkin, setSkin] = useState('');
    const [getBackground, setBackground] = useState('');
    const [getRarity, setRarity] = useState('');

    const resetSelect = () => {
        window.history.pushState({}, document.title, window.location.pathname);

        setHead("");
        setEyes("");
        setSnout("");
        setBody("");
        setBack("");
        setSkin("");
        setBackground("");
        setRarity("");

        document.getElementById("Head").selectedIndex = 0;
        document.getElementById("Eyes").selectedIndex = 0;
        document.getElementById("Snout").selectedIndex = 0;
        document.getElementById("Body").selectedIndex = 0;
        document.getElementById("Back").selectedIndex = 0;
        document.getElementById("Skin").selectedIndex = 0;
        document.getElementById("Background").selectedIndex = 0;
        document.getElementById("Rarity").selectedIndex = 0;
    }   
    
    const handleSelect = (event) => {
        setQueryStringParameter(event.target.id.toLowerCase(), event.target.value)

        if(event.target.id==='Head'){
            setHead(event.target.value);
        }
        if(event.target.id==='Eyes'){
            setEyes(event.target.value);
        }
        if(event.target.id==='Snout'){
            setSnout(event.target.value);
        }
        if(event.target.id==='Body'){
            setBody(event.target.value);
        }
        if(event.target.id==='Back'){
            setBack(event.target.value);
        }
        if(event.target.id==='Skin'){
            setSkin(event.target.value);
        }
        if(event.target.id==='Background'){
            setBackground(event.target.value);
        }
        if(event.target.id==='Rarity'){
            setRarity(event.target.value);
        }
        if(event.target.id==='Head' ||event.target.id==='Eyes'|| event.target.id==='Snout' || event.target.id==='Body' || event.target.id==='Back' ||event.target.id==='Skin'||event.target.id==='Background'|| event.target.id==='Rarity'){
            forceVisible();
        }
    };

    const setAttributes = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const headIndex = urlParams.get('head');
        const eyeIndex = urlParams.get('eyes');
        const snoutIndex = urlParams.get('snout');
        const bodyIndex = urlParams.get('body');
        const backIndex = urlParams.get('back');
        const skinIndex = urlParams.get('skin');
        const backgroundIndex = urlParams.get('background');
        const rarityIndex = urlParams.get('rarity');

        if (headIndex) {
            setHead(headIndex);
            document.getElementById("Head").selectedIndex = parseInt(headIndex);
        }
        if (eyeIndex) {
            setEyes(eyeIndex);
            document.getElementById("Eyes").selectedIndex = parseInt(eyeIndex);
        }
        if (snoutIndex) {
            setSnout(snoutIndex);
            document.getElementById("Snout").selectedIndex = parseInt(snoutIndex);
        }
        if (bodyIndex) {
            setBody(bodyIndex);
            document.getElementById("Body").selectedIndex = parseInt(bodyIndex);
        }
        if (backIndex) {
            setBack(backIndex);
            document.getElementById("Back").selectedIndex = parseInt(backIndex);
        }
        if (skinIndex) {
            setSkin(skinIndex);
            document.getElementById("Skin").selectedIndex = parseInt(skinIndex);
        }
        if (backgroundIndex) {
            setBackground(backgroundIndex);
            document.getElementById("Background").selectedIndex = parseInt(backgroundIndex);
        }
        if (rarityIndex) {
            setHead(rarityIndex);
            document.getElementById("Rarity").selectedIndex = parseInt(rarityIndex);
        }
        
        if (headIndex || eyeIndex || snoutIndex || bodyIndex || backIndex || skinIndex || backgroundIndex || rarityIndex) {
        forceVisible();
        }
    }
    
    const filteredNFT = NftData.filter(
      row =>
        (row.Head === getHead || getHead === "") &&
        (row.Eyes === getEyes || getEyes === "") &&
        (row.Snout === getSnout || getSnout === "") &&
        (row.Body === getBody || getBody === "") &&
        (row.Back === getBack || getBack === "") &&
        (row.Skin === getSkin || getSkin === "") &&
        (row.Background === getBackground || getBackground === "") &&
        (row.Rarity === getRarity || getRarity === "")
    );
    
    const [modalTitle, setModalTitle] = useState("Welcome");
    const [modalImg, setModalImg] = useState(loadingImg);
    const [modalData, setModalData] = useState("Loading...");

    return (
        <div className="py-5 px-3">
            <div className="container">
                <div className="row align-items-end g-4 mb-5" id="filters">
                    {NftFilterData.map((data) => (
                        <div className="col-6 col-md-4 col-lg-3" key={data.section}>
                            <small className="text-white-50 ps-1">{ data.section }:</small><br/>
                            <select className="form-select text-capitalize" id={data.section} name={data.section} onChange={handleSelect}>
                                <option value=''>Select</option>
                                {data.info.map((filters) => (
                                <option value={filters.id} key={filters.id}>{filters.name}</option>
                                ))}
                            </select>
                        </div>
                    ))}
                    <div className="col-12 col-md-4 col-lg-3">
                        <button className="btn big-round border-2 btn-outline-light opacity-half w-100" onClick={() => {resetSelect()}}><svg aria-hidden="true" width="14" focusable="false" data-prefix="far" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="m-minus-1"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"></path></svg> Reset</button>
                    </div>
                </div>
                <div className="row g-4" id="results">
                    {filteredNFT.map(data => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={data.name}>
                        <div className="card border-0 big-round hand" data-bs-toggle="modal" data-bs-target="#nftModal" onClick={() => setModalTitle(data.name) + setModalData(data) + setModalImg(require('../../../images/nft/' + data.img))}>
                            {}
                            <LazyLoad height={400} placeholder={<img src={loadingImg}  class="img-fluid" alt="..." />} once>
                                <img src={require('../../../images/nft/' + data.img)} loading="lazy" className="card-img-top" alt="" />
                            </LazyLoad>
                            <div className="card-footer bg-dark-grey p-4 position-relative">
                                <h2 className="h5 nft-font text-truncate">Akita #{data.name}</h2>
                                <span className={data.Rarity.toLowerCase()}><i className="fas fa-check-circle fa-xs"></i>{data.Rarity}</span>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="modal fade" id="nftModal" tabIndex="-1" aria-labelledby="nftModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content bg-discord big-round">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Akita #{modalTitle}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-6">
                                    <img src={modalImg} className="img-fluid big-round" alt=""/>
                                </div>
                                <div className="col">
                                    <table className="table table-dark table-striped">
                                        <tbody>
                                        <tr>
                                            <th className="px-4" scope="row">Name:</th>
                                            <td width="100%">#{modalData.name}</td>
                                        </tr>
                                        <tr>
                                            <th className="px-4" scope="row">Head:</th>
                                            <td width="100%">
                                                {modalData.Head ? NftFilterData[0].info[modalData.Head-1].name : null}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="px-4" scope="row">Eyes:</th>
                                            <td>{modalData.Eyes ? NftFilterData[1].info[modalData.Eyes-1].name : null}</td>
                                        </tr>
                                        <tr>
                                            <th className="px-4" scope="row">Snout:</th>
                                            <td>{modalData.Snout ? NftFilterData[2].info[modalData.Snout-1].name : null}</td>
                                        </tr>
                                        <tr>
                                            <th className="px-4" scope="row">Body:</th>
                                            <td>{modalData.Body ? NftFilterData[3].info[modalData.Body-1].name : null}</td>
                                        </tr>
                                        <tr>
                                            <th className="px-4" scope="row">Back:</th>
                                            <td>{modalData.Back ? NftFilterData[4].info[modalData.Back-1].name : null}</td>
                                        </tr>
                                        <tr>
                                            <th className="px-4" scope="row">Skin:</th>
                                            <td>{modalData.Skin ? NftFilterData[5].info[modalData.Skin-1].name : null}</td>
                                        </tr>
                                        <tr>
                                            <th className="px-4" scope="row">Background:</th>
                                            <td>{modalData.Background ? NftFilterData[6].info[modalData.Background-1].name : null}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTSection
