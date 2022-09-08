import React, { Component } from "react";
import { Link } from "react-router-dom";

class AboutArea extends Component {
    render() {
        return (
            <div className="about-us-area pd-100">
                <div className="container">
                    <div className="row">
                        {/*video-area start*/}
                        <div className="col-lg-5 col-md-8 align-self-center">
                            <div className="about-us-details">
                                <div className="section-title">
                                    <h2 className="title">Financial Statistics</h2>

                                    <table class="table table-bordered table-hover table-responsive">
                                        <thead>
                                            <tr style={{textAlign: "right", backgroundColor: "#30ccb4"}}>
                                                <td colspan="5">
                                                    <strong>As on Dt: 2022-03-31
                                                    </strong>
                                                </td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style={{backgroundColor: "#a0efe3"}}>
                                                <td colspan="5">Branches :
                                                    <strong>&nbsp;6
                                                    </strong>
                                                </td>
                                            </tr>
                                            <tr style={{backgroundColor: "#62c2e5"}}>
                                                <td colspan="4">ATM On Site :
                                                    <strong>&nbsp;2
                                                    </strong>
                                                </td>
                                            </tr>
                                            <tr style={{backgroundColor: "#bfedb6"}}>
                                                <td colspan="4">Over
                                                    <strong>&nbsp;28034
                                                    </strong>customers
                                                </td>
                                            </tr>
                                            <tr style={{backgroundColor: "#e3b6ed", textAlign: "right"}}>
                                                <td colspan="5">
                                                    <strong>(Rs. in Lacs)
                                                    </strong>
                                                </td>
                                            </tr>
                                            <tr style={{backgroundColor: "#62c2e5"}}>
                                                <td>Total Business :
                                                </td>
                                                <td colspan="4">
                                                    <strong>&nbsp;24347.24
                                                    </strong>
                                                </td>
                                            </tr>
                                            <tr style={{backgroundColor: "#62c2e5"}}>
                                                <td>Deposit :
                                                </td>
                                                <td colspan="4">
                                                    <strong>&nbsp;16650.36
                                                    </strong>
                                                </td>
                                            </tr>
                                            <tr style={{backgroundColor: "#62c2e5"}}>
                                                <td>Advances :
                                                </td>
                                                <td colspan="4">
                                                    <strong>&nbsp;7696.88
                                                    </strong>
                                                </td>
                                            </tr>
                                            <tr style={{backgroundColor: "#62c2e5"}}>
                                                <td>Profit :
                                                </td>
                                                <td colspan="4">
                                                    <strong>&nbsp;219.17
                                                    </strong>
                                                </td>
                                            </tr>
                                            <tr style={{backgroundColor: "#62c2e5"}}>
                                                <td>CRAR :
                                                </td>
                                                <td colspan="4">
                                                    <strong>23.65%
                                                    </strong>
                                                </td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/*video-area end*/}
                        <div className="col-lg-6 offset-lg-1">
                            <div className="about-us-details">
                                <div className="section-title">
                                    <h2 className="title">Shree Parswanath Co-Op Bank Ltd.</h2>
                                    <p>After the nationalization of major commercial banks in the year 1969, small traders and small scale industrial units in big cities and some urban places expressed difficulties in obtaining timely & adequate credit facilities. It was this objective in mind that the Rajkot Industrial & Commercial Association promoted this bank under the leadership of late Shri Hargovindbhai P. Tilavat on 10th December 1982 in just 800 sq. feet.</p>
                                    <p>There after Shri Ranchhodbhai R. Bhanderi became the Chairman and under his able and dynamic leadership the bank has started achieving excellent progress and just in a short span opened other new branches in the city.</p>
                                </div>
                                <Link className={this.props.design === 'home_2' ? 'btn btn-blue bg-pink initiate-scripts' : 'btn btn-blue initiate-scripts'} to={'/about'}>Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutArea;