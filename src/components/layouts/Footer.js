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
                                        <Link className="widget-title initiate-scripts" to={'/'}><img src={process.env.PUBLIC_URL + '/assets/img/logo-2.png'} alt="logo" /></Link>
                                        <ul className="widget-list">
                                            <li>564, Manon road, F1 456 Caron Town.</li>
                                            <li>Office No 3456</li>
                                            <li>info@example.com</li>
                                            <li>234-5825852763</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-6 offset-lg-1">
                                    <div className="widget widget-links">
                                        <h4 className="widget-title">Links.</h4>
                                        <ul className="widget-list">
                                            <li><Link className="initiate-scripts" to={'/'}>Home</Link></li>
                                            <li><Link className="initiate-scripts" to={'/about'}>About Us</Link></li>
                                            <li><Link className="initiate-scripts" to={'/contact'}>Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-6">
                                    <div className="widget widget-about">
                                        <h4 className="widget-title">Services.</h4>
                                        <ul className="widget-list">
                                            <li><Link className="initiate-scripts" to={'/about'}>About Us</Link></li>
                                            <li><Link className="initiate-scripts" to={'/blog'}>Blog</Link></li>
                                            <li><Link className="initiate-scripts" to={'/contact'}>Contact Us</Link></li>
                                            <li><Link className="initiate-scripts" to={'/'}>Sign in</Link></li>
                                            <li><Link className="initiate-scripts" to={'/'}>My Account</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="widget widget-contact">
                                        <h4 className="widget-title">Contact Us.</h4>
                                        <ul className="social-area">
                                            <li><Link className="initiate-scripts" to={'/'}><i className="fa fa-facebook" /></Link></li>
                                            <li><Link className="initiate-scripts" to={'/'}><i className="fa fa-twitter" /></Link></li>
                                            <li><Link className="initiate-scripts" to={'/'}><i className="fa fa-linkedin" /></Link></li>
                                            <li><Link className="initiate-scripts" to={'/'}><i className="fa fa-pinterest" /></Link></li>
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