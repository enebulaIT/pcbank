import React, { Component } from "react";
import Section from "./layouts/Section";

class About extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={true} title={'About Us'}>
                <div className="about-us-area pd-100">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12 offset-lg-1">
                                <div className="about-us-details">
                                    <div className="section-title">
                                        <h2 className="title">History</h2>
                                        <p>Formerly our Bank was working as a co-operative society. We obtained a registration
                                            from the District Registrar of Rajkot on 03-01-1997 and subsequently a license from
                                            Reserve Bank of India on 29-10-2007 and commenced banking w.e.f. 03-01-1997.</p>

                                        <p>The year ending 31.03.1997 was our first annual accounting year as a co.operative
                                            bank, though we had completed only three months, The Bank declared 12 %
                                            dividend to the members.</p>

                                        <p>By the end of the second year as at 31.03.1998, the Deposits reached to the tune of
                                            Rs.212.47 Lacs with 156.00 % rise and Advances to the tune of Rs.172.90 Lacs with
                                            a rise of 17.96 % and Net Profit rose to Rs.11.12 Lacs.</p>

                                        <p>By the end of the year as at 31.03.2022, the Deposits reached to the tune of Rs.
                                            1594.90 Lacs and Advances to the tune of Rs. 1233.56 Lacs and Net Profit rose to
                                            Rs. 33.60 Lacs.</p>

                                        <p>Considering our “0” NPA for the year 2002-2003 Gujarat Rajya Sahakari Sangh and
                                            Gujarat Urban Co-operative Banks Federation awarded the Bank with an
                                            “Excellence Award” on the basis of “0” NPA Bank. In short, the Bank achieved
                                            Award.</p>

                                        <p>Entire economy of Saurashtra is dependent mainly on agriculture and the agriculture
                                            is wholly depended on the rain (natural phenomena). We have experienced that
                                            since last many consecutive years the nature has not favoured Saurashtra. One by
                                            one natural calamity viz. draught, cyclone, earthquake, scarcity etc. has been
                                            experienced by us in last many years and their evil effects have ruined us. In these
                                            difficult days when the cooperative banks of Gujarat and Saurashtra are struggling
                                            hard to keep their identity, our Bank has made all-round development.</p>

                                        <p>We know very well that the expectations of our customers shall now increase
                                            manifold. Let us tell you that we are working with a strong team-spirit to satisfy
                                            almost all reasonable expectations of our clients and the society, by and large.</p>

                                        <p>We are very much thankful to you for giving your precious time by paying attention
                                            towards our introductory information.</p>
                                    </div>

                                    <div className="section-title">
                                        <h2 className="title">Message from MD</h2>
                                        <p>For over 26 years, Shree Parswanath Co-operative Bank Ltd. has met the financial needs of
                                            our customers with outstanding service, value-oriented products, and conveniently located
                                            Head office. We continually strive to find better ways to serve, contribute, and make a
                                            difference in the communities that we serve.</p>

                                        <p>Our Board of Directors is made up of local individuals and business leaders, Chartered
                                            Accountant and Professional Director that understand the value of a community bank and its
                                            importance to local commercial and individual needs. We value the relationships we have
                                            with our shareholders &amp; customers and thank you for choosing to our Bank.</p>

                                        <b className="mdName">“VYAJBI BANK FOR MEMBERS ONLY”</b>

                                        <b>Sincerely,</b>
                                        <div>Piyush I. Mehta</div>
                                        <b>Managing director</b>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <br />
                        <br />
                        <br />
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <div className={this.props.design === 'home_2' ? 'section-title section-title-3' : 'section-title'}>
                                    <h6 className="subtitle subtitle-thumb">Details of Board of Directors as on 11.07.2023</h6>
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
                                            <td>Ghanshyambhai G. Dholakiya(CA)</td>
                                            <td>Chairman</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Hareshbhai K. Vora</td>
                                            <td>Vice-Chairman</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Chandreshbhai R Mehta</td>
                                            <td>Director</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Frenyben N. Parekh (CA)</td>
                                            <td>Director</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Subhashbhai Bavishi</td>
                                            <td>Director</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Anilbhai Desai (Advocate)</td>
                                            <td>Director</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Dhruvikbhai G. Talavia</td>
                                            <td>Director</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Shilaben P. Mehta</td>
                                            <td>Coopt Director</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Vijaybhai N. Amlani</td>
                                            <td>Coopt Director</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        );
    }
}

export default About;