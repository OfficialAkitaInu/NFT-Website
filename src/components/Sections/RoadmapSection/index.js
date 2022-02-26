import React from 'react'

import './index.scss';

const RoadmapSection = () => {
    return (
        <div className="inset-shadow">
            <div className="container py-5">
                <h1 className="display-3 text-center mb-5">Roadmap</h1>
                <div className="container tiny-width">
                    <ul className="timeline">
                        <li className="timeline-item bg-dark big-round ms-3 p-4 shadow">
                            <div className="timeline-arrow"></div>
                            <h2 className="h5 mb-0">Hello, World!</h2><span className="small text-white-50">24 Dec, 2021</span>
                            <p className="text-small mt-2 font-weight-light">The brand new website for The Kennel Club launched on December 24th, 2021. Glad you could make it! Our devs worked incredibly hard behind the scenes to build the infrastructure, fine-tune the design and make a gallery fitting for <a href="https://twitter.com/AlgooNFT">@Algoo's</a> amazing artwork. And now it’s live for everyone to enjoy! </p>
                        </li>
                        <li className="timeline-item bg-dark big-round ms-3 p-4 shadow">
                            <div className="timeline-arrow"></div>
                            <h2 className="h5 mb-0">The Official Launch</h2><span className="small text-white-50">15 Jan, 2022</span>
                            <p className="text-small mt-2 font-weight-light">On January 15th, 2022, the initial batch of Kennel Club NFTs will be sold and sent out blinking into the sunlight for the very first time. They’ll all be purchased via Shuffles. These Shuffles will last 24 hours and be held each weekend until every single Akita has found a new home.</p>
                        </li>
                        <li className="timeline-item bg-dark big-round ms-3 p-4 shadow not-done">
                            <div className="timeline-arrow"></div>
                            <h2 className="h5 mb-0">The Grand Finale</h2><span className="small text-white-50">19 Mar, 2022</span>
                            <p className="text-small mt-2 font-weight-light">Ten weeks after the first NFTs are sold, it’ll be time to let the last of the Akitas loose into the community. Put March 19th into your calendars so you don’t miss the Shuffle to own the final few dogs in the collection.</p>
                        </li>
                        <li className="timeline-item bg-dark big-round ms-3 p-4 shadow not-done">
                            <div className="timeline-arrow"></div>
                            <h2 className="h5 mb-0">Akita Merch Store Integration</h2><span className="small text-white-50">Q1 2022</span>
                            <p className="text-small mt-2 font-weight-light">We’ve put a lot of effort into the Akita Merch Store over the last few weeks. Once it opens, we plan on giving Kennel Club members the opportunity to get a personalized T-shirt emblazoned with the design of their very own Akita NFT.</p>
                        </li>
                        <li className="timeline-item bg-dark big-round ms-3 p-4 shadow not-done">
                            <div className="timeline-arrow"></div>
                            <h2 className="h5 mb-0">Naming your Akitas</h2><span className="small text-white-50">Q2 2022</span>
                            <p className="text-small mt-2 font-weight-light">Owners of each Akita NFT will have the chance to give their dog a name that reflects their unique personality. All the monikers will be proudly displayed in the gallery on this site. They’ll also be encoded into the NFT data to make them visible on sites like NFT Explorer.</p>
                        </li>
                        <li className="timeline-item bg-dark big-round ms-3 p-4 shadow not-done">
                            <div className="timeline-arrow"></div>
                            <h2 className="h5 mb-0">Holders Rewards</h2><span className="small text-white-50">Q2 2022</span>
                            <p className="text-small mt-2 font-weight-light">As well as gaining access to a private Discord channel and all the other great benefits mentioned above, Kennel Club members will enjoy a variety of fabulous rewards that will evolve as the community grows.</p>
                        </li>
                        <li className="timeline-item bg-dark big-round ms-3 p-4 shadow not-done">
                            <div className="timeline-arrow"></div>
                            <h2 className="h5 mb-0">Governance</h2><span className="small text-white-50">Q3 2022</span>
                            <p className="text-small mt-2 font-weight-light">As an Akita NFT holder and Kennel Club member, you’ll get to participate in Club Governance and vote on a variety of issues, including which charities we should donate some of our royalties to. Voting will be based on one vote per Akita NFT, so the more you own, the more of a say you’ll have.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RoadmapSection
