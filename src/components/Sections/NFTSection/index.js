import React, { useState } from 'react';

import NftFilterData from '../../../details.json';
import NftData from '../../../data.json';
import LazyLoad from "react-lazyload";

import './index.scss';

const NFTSection = () => {
    const [Filters, setFilters] = useState([]);
    const [getHead, setHead] = useState('');
    const [getEyes, setEyes] = useState('');
    const [getSnout, setSnout] = useState('');
    const [getBody, setBody] = useState('');
    const [getBack, setBack] = useState('');
    const [getSkin, setSkin] = useState('');
    const [getBackground, setBackground] = useState('');
    const [getRarity, setRarity] = useState('');
   
    
    const handleSelect = (event) => {
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
      };
    
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
                        <small className="text-white-50 ps-3">{ data.section }:</small><br />
                            <select className="form-select text-capitalize border-2" id={data.section} name={data.section} onChange={handleSelect}>
                                <option value=''>Select</option>
                                {data.info.map((filters) => (
                                <option value={filters.id} key={filters.id}>{filters.name}</option>
                                ))}
                            </select>
                        </div>
                    ))}
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
