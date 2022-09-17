import React, {Component} from "react";
import {Link} from "react-router-dom";

class InvestorArea extends Component {
    render() {
        return (
            <div className="envestor-area pd-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className={this.props.design === 'home_2' ? 'section-title section-title-3' : 'section-title'}>
                                <h6 className="subtitle subtitle-thumb">Details of Board of Directors as on 31.08.2022</h6>
                                {/* <h2 className="title">Top Invester of E-Banking</h2>
                                <p>Bankdipscing elitr, sed diam nonumy eirmod et accusam et justo duo dolores et ea rebum. tet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <table className="custom-investor-table">
                                <thead>
                                    <tr>
                                        <td>No.</td>
                                        <td>Name</td>
                                        <td>Designation</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InvestorArea;