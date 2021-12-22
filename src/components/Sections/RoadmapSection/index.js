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
                            <h2 className="h5 mb-0">Completed 1</h2><span className="small text-white-50">15 Jan, 2022</span>
                            <p className="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                        </li>
                        <li className="timeline-item bg-dark big-round ms-3 p-4 shadow">
                            <div className="timeline-arrow"></div>
                            <h2 className="h5 mb-0">Completed 2</h2><span className="small text-white-50">1 Feb, 2022</span>
                            <p className="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                        </li>
                        <li className="timeline-item bg-dark big-round ms-3 p-4 shadow not-done">
                            <div className="timeline-arrow"></div>
                            <h2 className="h5 mb-0">Uncompleted 1</h2><span className="small text-white-50">1 Feb, 2022</span>
                            <p className="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                        </li>
                        <li className="timeline-item bg-dark big-round ms-3 p-4 shadow not-done">
                            <div className="timeline-arrow"></div>
                            <h2 className="h5 mb-0">Uncompleted 2</h2><span className="small text-white-50">1 Feb, 2022</span>
                            <p className="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RoadmapSection
