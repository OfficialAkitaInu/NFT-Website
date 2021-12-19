import React from 'react'
import LazyLoad from "react-lazyload";


function NftResults({data}) {
    const filtered = data.filter( data => {
        return (
          data
        )
        /*
          return ( 
              data.head === document.querySelector('#Head').value
          )
        */
    });
    console.log({});
    return (
        <>
            {filtered.map(data => (
            <div className="col-6 col-md-4 col-lg-3" key={data.name}>
                <div className="card border-0 big-round">
                    <a href={data.url} target="_blank" rel="noreferrer">
                        <LazyLoad height={250} once>
                            <img src={'images/nft/'+data.img} loading="lazy" className="card-img-top" alt="" />
                        </LazyLoad>
                    </a>
                    <div className="card-footer bg-dark-grey p-4 position-relative">
                        <h2 className="h5 nft-font text-truncate">#{data.name}</h2>
                        <span className={data.rarity}><i className="fas fa-check-circle fa-xs"></i> {data.rarity}</span>
                    </div>
                </div>
            </div>
            ))}
        </>
    )
}

export default NftResults;
