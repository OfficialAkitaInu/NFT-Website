import React, { useState, useEffect } from 'react';

import './index.scss';

const WinnerSection = ({id}) => {

    const [nftName, setNftName] = useState(null);
    const [nftUrl, setNftUrl] = useState(null);

    useEffect(() => {
        fetch(`https://indexer.algoexplorerapi.io/v2/assets/${id}?include-all=true`)
            .then((response) => response.json())
            .then((data) => {
                setNftUrl("https://ipfs.io/" + data.asset.params.url.replace(":/", ""));
        })

        fetch(`https://indexer.algoexplorerapi.io/v2/assets/${id}?include-all=true`)
            .then((response) => response.json())
            .then((data) => {
                setNftName(data.asset.params.name);
        })

    }, [])


    return (
        <div className="nftBackground text-white">
            <div className="container small-width">
                <div className="row align-items-center py-6 px-3 h-full-screen">
                    <div className="col-12 text-center">
                        {nftName ? (<h1 className="mb-4">You won {nftName}!</h1>) : ""}
                        {nftUrl ? (<img className="nft-image" src={nftUrl}></img>) : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WinnerSection
