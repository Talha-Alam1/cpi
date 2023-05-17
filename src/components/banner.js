import React from 'react';
import BannerImage from '../assets/images/BannerImage.png';

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="row">
                    <div className="content">
                        <h1><span>unboxing</span><br/>Impact</h1>
                    </div>
                    <div className="image">
                        <img src={BannerImage} alt="bannerImage" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
