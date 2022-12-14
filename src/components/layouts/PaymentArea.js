import React, {Component} from "react";

class PaymentArea extends Component {
    render() {
        return (
            <div className="payment-area" id="payment">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="countr lt wow fadeInLeft">
                                <div className="icon">
                                    <i className="fa fa-cc-visa" aria-hidden="true" />
                                </div>
                                <span className="counter">35750</span>
                                <h3 className="title">Visa Card </h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="countr wow fadeInUp">
                                <div className="icon">
                                    <i className="fa credit fa-credit-card-alt" aria-hidden="true" />
                                </div>
                                <span className="counter">57305</span>
                                <h3 className="title">Credit Card</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="countr  wow fadeInDown">
                                <div className="icon">
                                    <i className="fa fa-cc-mastercard" aria-hidden="true" />
                                </div>
                                <span className="counter">57681</span>
                                <h3 className="title">master card</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="countr wow fadeInRight">
                                <div className="icon">
                                    <i className="fa fa-credit-card-alt" aria-hidden="true" />
                                </div>
                                <span className="counter">78607</span>
                                <h3 className="title">debit card</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PaymentArea;