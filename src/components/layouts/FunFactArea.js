import React, {Component} from "react";
import {Link} from "react-router-dom";

class FunFactArea extends Component {
    render() {
        return (
            <div className="fun-fact-area">
                <div className="container">
                    {/* <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="section-title section-title-2">
                                <h6 className="subtitle subtitle-thumb">Why Choose Us</h6>
                                <h2 className="title">Craete Your Amazing Benifit</h2>
                                <p>Bankdipscing elitr, sed diam nonumy eirmod et accusam et justo duo dolores et ea rebum. tet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div> */}
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6 text-center">
                            <div className="single-fact">
                                <h1 className="counter">28034</h1>
                                <h5>Customers</h5>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center">
                            <div className="single-fact">
                                <h1 className="counter">6</h1>
                                <h5>Our Branches</h5>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center">
                            <div className="single-fact">
                                <h1 className="counter">24347.24</h1>
                                <h5>Total Business (in Lacs)</h5>
                            </div>
                        </div>
                        {/* <div className="col-lg-12 text-center">
                            <Link className="btn initiate-scripts" to={'/'}>Create An Account</Link>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default FunFactArea;