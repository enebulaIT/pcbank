import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <>
                {/* footer area start */}
                <footer className="footer-area">
                    <div className="container">
                        <div className="footer-inner">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget-address">
                                        <Link className="widget-title initiate-scripts" to={'/'}><img src={process.env.PUBLIC_URL + '/assets/img/logo.jpg'} alt="logo" /></Link>
                                        <ul className="widget-list">
                                            <li>"Blue Diamond",<br /> 9-Ramakrishna nagar,<br /> Swami vivekanand Road,<br /> Rajkot-360001</li>
                                            <li><a href="mailto:info@pcbank-rajkot.com">info@pcbank-rajkot.com</a></li>
                                            <li><a href="mailto:manager@pcbank-rajkot.com">manager@pcbank-rajkot.com</a></li>
                                            <li><a href="tel:02812467857">(0281)2467857-59</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="digLogoQR">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/DICGCLogo.jpg'} alt="DICGCLogo" />
                                        <img src={process.env.PUBLIC_URL + '/assets/img/QrCode.png'} alt="QrCode " />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget-links">
                                        <h4 className="widget-title">Links.</h4>
                                        <ul className="widget-list">
                                            <li><Link className="initiate-scripts" to={'/'}>Home</Link></li>
                                            <li><Link className="initiate-scripts" to={'/about'}>About Us</Link></li>
                                            <li><Link className="initiate-scripts" to={'/contact'}>Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget-about">
                                        <h4 className="widget-title">Services.</h4>
                                        <ul className="widget-list">
                                            <li><Link className="initiate-scripts" to={'/rtgs'}>RTGS/NEFT</Link></li>
                                            <li><Link className="initiate-scripts" to={'/sms'}>SMS Alert</Link></li>
                                            <li><Link className="initiate-scripts" to={'/pmjjby-pmsby'}>PMJJBY/PMSBY</Link></li>
                                            <li><Link className="initiate-scripts" to={'/nach-ach'}>NACH/ACH/ABPS</Link></li>
                                            <li><Link className="initiate-scripts" to={'/core-banking'}>Core Banking</Link></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </footer>
                <div className="footer-bottom">
                    <div className="col-lg-12 align-self-center">
                        <div className="copy-right text-center">
                            @ 2020, PCBank all rights reserved
                        </div>
                    </div>
                </div>
                {/* footer area end */}

                {/* back to top area start */}
                <div className={this.props.design === 'home_2' ? 'back-to-top back-to-top-2' : 'back-to-top'}>
                    <span className="back-top"><i className="fa fa-angle-double-up" /></span>
                </div>
                {/* back to top area end */}
            </>
        );
    }
}

export default Footer;