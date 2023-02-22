import React, { Component } from "react";
import { Link } from "react-router-dom";
import InvestorArea from "../layouts/InvestorArea";

class AboutArea extends Component {
    render() {
        return (
            <div className="about-us-area pd-100">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-12 offset-lg-1">
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

                    <br />
                    <br />
                    <br />
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
                                        <th>No.</th>
                                        <th>Name</th>
                                        <th>Designation</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Ghanshyambhai G. Dholakiya(C.A)</td>
                                        <td>Chairman</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Piyushbhai I. Mehta</td>
                                        <td>Managing Director</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Subhashbhai Bavishi</td>
                                        <td>Director</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Chandreshbhai R Mehta</td>
                                        <td>Director</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Samirbhai M. Patel</td>
                                        <td>Director</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Frenyben N. Parekh (CA)</td>
                                        <td>Director</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Nalinbhai T. Zaveri</td>
                                        <td>Director</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Hareshbhai K. Vora</td>
                                        <td>Director</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Anilbhai Desai (Advocate)</td>
                                        <td>Director</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Dhruvikbhai G. Talavia</td>
                                        <td>Director</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutArea;