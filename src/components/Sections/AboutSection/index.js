import React from 'react';

import Img1 from '../../../images/nft.gif';
import Img2 from '../../../images/nft/IMG_0505.jpg';
import Img3 from '../../../images/nft/IMG_0515.jpg';

const AboutSection = () => {
    return (
        <div className="container small-width">
            <div className="row align-items-center py-6 px-3">
                <div className="col-12 col-md-6">
                    <img src={Img1} width="350" alt="" className="img-fluid d-block mx-auto rounded-circle mb-5 border border-dark border-3"/>
                </div>
                <div className="col-12 col-md-6">
                    <h1 className="display-3">About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget dictum quam. Vivamus lacinia dui mauris, ac feugiat lacus facilisis nec. Phasellus sed augue faucibus neque lacinia convallis. Fusce efficitur leo dui, a scelerisque sem facilisis id. In imperdiet neque enim, ac semper lacus hendrerit sit amet.</p>
                </div>
            </div>
            <div className="row align-items-center px-3 mt-2">
                <div className="col-12 col-md-6">
                    <h1 className="display-3">About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget dictum quam. Vivamus lacinia dui mauris, ac feugiat lacus facilisis nec. Phasellus sed augue faucibus neque lacinia convallis. Fusce efficitur leo dui, a scelerisque sem facilisis id. In imperdiet neque enim, ac semper lacus hendrerit sit amet.</p>
                </div>
                <div className="col-12 col-md-6">
                    <img src={Img2} width="350" alt="" className="img-fluid d-block mx-auto rounded-circle mb-5 border border-dark border-3"/>
                </div>
            </div>
            <div className="row align-items-center py-6 px-3 mt-2">
                <div className="col-12 col-md-6">
                    <img src={Img3} width="350" alt="" className="img-fluid d-block mx-auto rounded-circle mb-5 border border-dark border-3"/>
                </div>
                <div className="col-12 col-md-6">
                    <h1 className="display-3">About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget dictum quam. Vivamus lacinia dui mauris, ac feugiat lacus facilisis nec. Phasellus sed augue faucibus neque lacinia convallis. Fusce efficitur leo dui, a scelerisque sem facilisis id. In imperdiet neque enim, ac semper lacus hendrerit sit amet.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
