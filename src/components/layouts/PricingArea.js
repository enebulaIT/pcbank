import React, {Component} from "react";
import {Link} from "react-router-dom";

class PricingArea extends Component {
    render() {
        return (
            <div className="pricing-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className={this.props.design === 'home_2' ? 'section-title section-title-3' : 'section-title'}>
                                <h6 className="subtitle subtitle-thumb">Pricing Plan</h6>
                                <h2 className="title">Grab Our Mega Deposit Package</h2>
                                <p>Bank dipscing elitr, sed diam nonumy eirmod et accusam et justo duo dolores et ea rebum. tet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-price text-center">
                                <div className="pricing-details">
                                    <h2 className="pricing-cost">5.50%</h2>
                                    <h6 className="pricing-subtitle">For a month</h6>
                                    <h4 className="pricing-title">Basic</h4>
                                </div>
                                <ul className="pricing-list">
                                    <li><Link className="initiate-scripts" to={'/services'}>Miximum Deposit $10,00</Link></li>
                                    <li><Link className="initiate-scripts" to={'/services'}>Minimum Deposit $10</Link></li>
                                    <li><Link className="initiate-scripts" to={'/services'}>Up to 50 Users available</Link></li>
                                    <li><Link className="initiate-scripts" to={'/services'}>Free Banking</Link></li>
                                    <li><Link className="btn btn-blue initiate-scripts" to={'/services'}>Book Now</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-price text-center">
                                <div className="pricing-details">
                                    <h2 className="pricing-cost">7.50%</h2>
                                    <h6 className="pricing-subtitle">For a month</h6>
                                    <h4 className="pricing-title">Premium</h4>
                                </div>
                                <ul className="pricing-list">
                                    <li><Link className="initiate-scripts" to={'/services'}>Miximum Deposit $10,00</Link></li>
                                    <li><Link className="initiate-scripts" to={'/services'}>Minimum Deposit $10</Link></li>
                                    <li><Link className="initiate-scripts" to={'/services'}>Up to 50 Users available</Link></li>
                                    <li><Link className="initiate-scripts" to={'/services'}>Free Banking</Link></li>
                                    <li><Link className="btn btn-blue initiate-scripts" to={'/services'}>Book Now</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-price text-center">
                                <div className="pricing-details">
                                    <h2 className="pricing-cost">9.50%</h2>
                                    <h6 className="pricing-subtitle">For a month</h6>
                                    <h4 className="pricing-title">Advanced Plan</h4>
                                </div>
                                <ul className="pricing-list">
                                    <li><Link className="initiate-scripts" to={'/services'}>Miximum Deposit $10,00</Link></li>
                                    <li><Link className="initiate-scripts" to={'/services'}>Minimum Deposit $10</Link></li>
                                    <li><Link className="initiate-scripts" to={'/services'}>Up to 50 Users available</Link></li>
                                    <li><Link className="initiate-scripts" to={'/services'}>Free Banking</Link></li>
                                    <li><Link className="btn btn-blue initiate-scripts" to={'/services'}>Book Now</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PricingArea;