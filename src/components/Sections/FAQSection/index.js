import React from 'react';

import './index.scss';

const FAQSection = () => {
    return (
        <div className="pt-5 px-3">
            <div className="container small-width">
                <h1 className="text-center mb-5">FAQ</h1>
                <div className="accordion big-round" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How many NFTs are in the collection?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                      One thousand unique Akita NFTs are being minted in total. Each Akita features characteristics from a cache of over 100 attributes with a range of rarity values (Common, Uncommon, Rare, Epic, Legendary). Ten personalized Akitas have been reserved for the Akita Inu Team. The remaining 990 NFTs will be sold to the community via Shuffles or reserved for giveaways. N.B. Members of the Akita Inu Team will not be permitted to participate in any of the Shuffles themselves.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How can I purchase an Akita?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        At first, the only way to purchase an Akita will be by participating in a Shuffle on this site. Later, some holders may choose to sell their Akitas via an NFT marketplace or auction site.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        What’s a Shuffle?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        A Shuffle is a randomized method of distributing Akitas. It’s a fair way of making sure that everyone who wants an NFT has an equal shot at getting their paws on one.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                        Wen Shuffle?
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        You don’t have to wait too long! The very first Shuffle will last 24 hours and be held on January 15th, 2022.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                        How much will each Akita cost?
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Akita NFTs distributed via the first Shuffle will be sold for 50 Algos each. (Prices for future Shuffles TBA).
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                        Why did you mint on Algorand?
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Quite simply, we believe that Algorand is the future of cryptocurrency. Founded by cryptography superstar Silvio Micali, Algorand offers a huge number of benefits to its users, including:
                        <ul>
                          <li>A forkless blockchain with instant finality (so you’ll receive your Akita in seconds and no one will ever be able to clone it)</li>
                          <li>Tiny transaction fees (so you can spend your hard-earned Algos on Akitas, not ‘gas’)</li>
                          <li>Huge room to grow on L1 (so your Akitas won’t get stuck in a traffic jam)</li>
                          <li>Carbon negativity (so your Akitas won’t cost the earth)</li>
                        </ul>
                        To find out more, check out the website of the <a href="https://algorand.foundation/">Algorand Foundation</a>.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseThree">
                        How can we keep in touch?
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Come and chat with the Team and check out our fabulous community on <a href="https://www.reddit.com/r/AkitaInuASA/">Reddit</a>, <a href="https://discord.com/invite/SmMuHws8nT">Discord</a>, <a href="https://twitter.com/AkitaInuASA">Twitter</a> and <a href="https://www.instagram.com/akitainuasa_official">Instagram</a>. We look forward to seeing you soon!
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default FAQSection
