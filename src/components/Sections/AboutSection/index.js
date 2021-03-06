import React from 'react';
import { Link } from 'react-router-dom';

import Img1 from '../../../images/IMG_0505.webp';
import Img2 from '../../../images/compressed-nft/AKC0011.webp';
import Img3 from '../../../images/compressed-nft/AKC0036.webp';

import './index.scss';

const AboutSection = () => {
    return (
        <div className="container small-width">
            <div className="row align-items-center py-6 px-5 mb-5" id="collection">
                <div className="col-12 col-md-6">
                    <img src={Img1} width="350" alt="" className="img-fluid d-block mx-auto rounded-circle mb-5 border border-dark border-3"/>
                </div>
                <div className="col-12 col-md-6">
                    <h1 className="display-3">The Collection</h1>
                    <p>The Kennel Club is a series of 1,000 unique Akita NFTs minted on the unstoppable Algorand blockchain. Created by talented artist <a target="_blank" rel="noreferrer" id="algoo" href="https://twitter.com/AlgooNFT">@Algoo</a>, each hand-built Akita is ready to take on the world with its very own selection of painstakingly crafted attributes. To view the gallery in all its glory, grab a katana, don your best wizard robes and head on over to the <Link to="/collection">collection</Link>.</p>
                </div>
            </div>
            <div className="row align-items-center px-5 mb-5" id="club">
                <div className="col-12 col-md-6 mobile-order">
                    <h1 className="display-3">The Club</h1>
                    <p>Ownership of a genuine Akita NFT entitles you to join the exclusive Kennel Club. As time goes on, members will get to name their own Akitas, access a private Discord channel and enjoy a range of giveaways and benefits that will evolve as the community grows. <span>10% of ALL sales will also be donated to charitable causes</span>, so you can relax in the knowledge that you’re helping make the world a better place.</p>
                </div>
                <div className="col-12 col-md-6">
                    <img src={Img2} width="350" alt="" className="img-fluid d-block mx-auto rounded-circle mb-5 border border-dark border-3"/>
                </div>
            </div>
            <div className="row align-items-center py-6 px-5 mb-5" id="token">
                <div className="col-12 col-md-6">
                    <img src={Img3} width="350" alt="" className="img-fluid d-block mx-auto rounded-circle mb-5 border border-dark border-3"/>
                </div>
                <div className="col-12 col-md-6">
                    <h1 className="display-3">The Token</h1>
                    <p>The Kennel Club is the brainchild of the people behind Akita Inu ASA, a cryptocurrency token built on the Algorand blockchain. Founded in October 2021, Akita Inu has quickly become a premier Algorand community project with a kick-ass team of developers and a mission to make a difference.</p>
                    <p>To find out more and hang with our wonderful community, come and join us on <a href="https://reddit.com/r/AkitaInuASA/">Reddit</a>, <a href="https://twitter.com/AkitaInuASA">Twitter</a>, <a href="https://discord.gg/SmMuHws8nT">Discord</a>, <a href="https://www.instagram.com/akitainuasa_official/">Instagram</a>.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
