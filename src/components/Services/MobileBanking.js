import React, { Component } from "react";
import Section from "../layouts/Section";
import { Link } from "react-router-dom";
import BlogSidebarArea from "../layouts/BlogSidebarArea";

class MobileBanking extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={true} title={'Mobile Banking'}>
                <section className="blog_area single-post-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="blog_details">
                                        <h4>IFSC : HDFC0CSPCK (For IMPS / NEFT / RTGS Inward Remittance)</h4>
                                        <p className="excert">Shree Parswanath Co-op Bank Ltd has started Mobile Banking.</p>
                                        <ul>
                                            <li>Any time Fund transfer using MMID through IMPS&nbsp;(24 X 7)</li>
                                            <li>Any time Fund transfer using&nbsp;IFSC and A/c No through IMPS&nbsp;(24 X 7).</li>
                                            <li>Fund transfer using&nbsp;IFSC and A/c No through RTGS / NEFT (As per RBI Time table).</li>
                                            <li>Fund Transfer using IFT - (internal fund transfer between&nbsp;Shree Dharati Co-op. Bank&nbsp;A/c)&nbsp;(24 X 7).</li>
                                            <li>Online manage Payee / Beneficiary</li>
                                            <li>Online Cheque Book Request</li>
                                            <li>Online Stop Payment of Cheque</li>
                                            <li>Online search transaction with Cheque No.</li>
                                            <li>Mini Statement Received</li>
                                            <li>Detailed Statement Download &amp; E-mail</li>
                                            <li>Online Block ATM Card</li>
                                        </ul>
                                        <p>Now you can transfer funds, Request for cheque book, Stop payment, Block ATM Card,Statement etc.<br />
                                            Hurry..... Contact nearest Branch for Reqistration</p>
                                        <p>Privacy Policy</p>
                                        <p>Download Mobile Banking Application Link</p>
                                        <p>Mobile Banking Privacy Policy</p>
                                        <div className="custom-links">
                                            <a href="https://play.google.com/store/apps/details?id=com.dharatibank.mobileapp"><img class="mlogo" src="https://www.dharatibank.com/images/android1.png" /></a>
                                            <a href="https://itunes.apple.com/in/app/shree-dharati-co-operative/id1420373029?mt=8"><img class="mlogo" src="https://www.dharatibank.com/images/apple1.png" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                {/* Blog Sidebar Area Imported from Layouts */}
                                <BlogSidebarArea />
                            </div>
                        </div>
                    </div>
                </section>
            </Section>
        );
    }
}

export default MobileBanking;