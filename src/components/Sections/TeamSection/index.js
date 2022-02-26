import React, { useState, useEffect } from 'react';

import NftFilterData from '../../../details.json';
import NftData from '../../../team.json';
import LazyLoad, { forceVisible } from "react-lazyload";

import loadingImg from '../../../images/loading.webp';

import './index.scss';
import NFTModal from '../../NFTModal';

const TeamSection = () => {

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
        //document.getElementById("Rarity").selectedIndex = 0;
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
        if(
          event.target.id==='Head' ||
          event.target.id==='Eyes'||
          event.target.id==='Snout' ||
          event.target.id==='Body' || 
          event.target.id==='Back' ||
          event.target.id==='Skin'||
          event.target.id==='Background'||
          event.target.id==='Rarity'
        ) {
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
        <div className="inset-shadow">
            <div className="py-5 px-3">
                <h1 className="display-3 text-center mb-5">The Team</h1>
                <div className="container">
                    <div className="row g-4" id="results">
                        {filteredNFT.map(data => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4" key={data.name}>
                            <div className="card border-0 big-round hand" data-bs-toggle="modal" data-bs-target="#nftModal" onClick={() => setModalTitle(data.name) + setModalData(data) + setModalImg(require('../../../images/compressed-nft/' + data.img))}>
                                <LazyLoad height={400} placeholder={<img src={loadingImg}  className="img-fluid" alt="..." />} once>
                                    <img src={require('../../../images/compressed-nft/' + data.img)} loading="lazy" className="card-img-top" alt="" />
                                </LazyLoad>
                                <div className="card-footer bg-dark-grey p-4 position-relative">
                                    <h2 className="h5 nft-font text-truncate">{data.Owner}</h2>
                                    <p className="mb-0">{data.Description}</p>
                                    {/*<span className={data.Rarity.toLowerCase()}><i className="fas fa-check-circle fa-xs"></i>{data.Rarity}</span>*/}
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <NFTModal modalTitle={modalTitle} modalImg={modalImg} modalData={modalData} />
            </div>
        </div>
    )
}

export default TeamSection
