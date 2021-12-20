import React, { useState, useEffect } from 'react';

import NftFilterData from '../../../details.json';
import NftData from '../../../data.json';
import LazyLoad, { forceVisible } from "react-lazyload";

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

    const [Filters, setFilters] = useState([]);
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
        forceVisible();
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

        forceVisible();
    }
    
    const filteredNFT = NftData.filter(
      row =>
        row.Head.includes(getHead) &&
        row.Eyes.includes(getEyes) &&
        row.Snout.includes(getSnout) &&
        row.Body.includes(getBody) &&
        row.Back.includes(getBack) &&
        row.Skin.includes(getSkin) &&
        row.Background.includes(getBackground) &&
        row.Rarity.includes(getRarity)
    );

    return (
        <div className="py-5 px-3">
            <div className="container">
                <div className="row g-4 mb-5" id="filters">
                    {NftFilterData.map((data) => (
                        <div className="col-6 col-md-4 col-lg-3" key={data.section}>
                        <small className="text-white-50 ps-1">{ data.section }:</small><br />
                            <select className="form-select text-capitalize" id={data.section} name={data.section} onChange={handleSelect}>
                                <option value=''>Select</option>
                                {data.info.map((filters) => (
                                <option value={filters.id} key={filters.id}>{filters.name}</option>
                                ))}
                            </select>
                        </div>
                    ))}
                    <div className="text-center">
                        <button className="reset-button" onClick={() => {resetSelect()}}>Reset</button>
                    </div>
                </div>
                <div className="row g-4" id="results">
                    {filteredNFT.map(data => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={data.name}>
                        <div className="card border-0 big-round">
                            <a href={data.url} target="_blank" rel="noreferrer">
                                <LazyLoad height={250} once>
                                    <img src={'images/nft/'+data.img} loading="lazy" className="card-img-top" alt="" />
                                </LazyLoad>
                            </a>
                            <div className="card-footer bg-dark-grey p-4 position-relative">
                                <h2 className="h5 nft-font text-truncate">AKC{data.name}</h2>
                                <span className={data.Rarity.toLowerCase()}><i className="fas fa-check-circle fa-xs"></i>{data.Rarity}</span>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NFTSection
