import React, { Component } from "react";
import { Link } from "react-router-dom";
// import bannerImg1 from '../../assets/images/banner1.jpg';
// import bannerImg2 from '../../assets/images/banner2.jpg';
import bannerImg3 from '../../assets/images/banner3.jpg';
// import bannerImg4 from '../../assets/images/banner4.jpg';
// import bannerImg5 from '../../assets/images/banner5.jpg';
import bannerImg6 from '../../assets/images/banner6.jpg';

class Banner extends Component {
    render() {
        return (
            <div className={this.props.design === 'home_2' ? 'banner-area style-two' : 'banner-area style-one'}>
                <div className="banner-slider owl-carousel">
                    {/* <div className={this.props.design === 'home_2' ? 'item bg-two' : 'item bg-one'}>
                        <img className="custom-banner-img" src={bannerImg1} alt="banner" />
                    </div>
                    <div className={this.props.design === 'home_2' ? 'item bg-two' : 'item bg-one'}>
                        <img className="custom-banner-img" src={bannerImg2} alt="banner" />
                    </div> */}
                    <div className={this.props.design === 'home_2' ? 'item bg-two' : 'item bg-one'}>
                        <img className="custom-banner-img" src={bannerImg3} alt="banner" />
                    </div>
                    {/* <div className={this.props.design === 'home_2' ? 'item bg-two' : 'item bg-one'}>
                        <img className="custom-banner-img" src={bannerImg4} alt="banner" />
                    </div>
                    <div className={this.props.design === 'home_2' ? 'item bg-two' : 'item bg-one'}>
                        <img className="custom-banner-img" src={bannerImg5} alt="banner" />
                    </div> */}
                    <div className={this.props.design === 'home_2' ? 'item bg-two' : 'item bg-one'}>
                        <img className="custom-banner-img" src={bannerImg6} alt="banner" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;