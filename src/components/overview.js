import React from 'react';
import Square from '../assets/images/square.svg'
import logo from '../assets/images/logo.svg'

const Overview = () => {
    return (
        <section className="overview" id='view'>
            <div className="overviewInner">
                <div className="container">
                    <div className="row">
                        <div className="content">
                            <div className="sec-title">
                                <h2>Overview</h2>
                            </div>
                            <p>
                            Hub71 will host its annual event in the first quarter of 2023 to celebrate its achievements and impact in 2022. The event will take place in person for the first time since the pandemic, bringing together Hub71’s stakeholders across Abu Dhabi’s tech ecosystem. The event will involve founders, investors, strategic partners, and media for meaningful discussions on Abu Dhabi’s technology and innovation landscape and its role in strengthening economic resilience across key sectors.
                            </p>
                        </div>
                        <div className="image">
                            <img src={Square} alt="bannerImage" />
                        </div>
                        <div className="sidebar">
                            <img src={logo} alt="bannerImage" />
                            <a src="#">Overview</a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Overview;
