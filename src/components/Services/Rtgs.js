import React, { Component } from "react";
import Section from "../layouts/Section";
import { Link } from "react-router-dom";
import BlogSidebarArea from "../layouts/BlogSidebarArea";

class RTGS extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={true} title={'RTGS/NEFT'}>
                <section className="blog_area single-post-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="blog_details">
                                        <h2>RTGS Service</h2>
                                        <p className="excert">Tranfer Your Funds Anywhere in india in minutes (Selected Banks and Branches) Minimum amount per transaction Rs. Two Lacks There is no upper ceiling of RTGS transactions.</p>
                                        <p>timing :-</p>
                                        <ul>
                                            <li>The beneficiary bank credits the beneficiary’s account within two hour of receiving the funds message.</li>
                                            <li>What you need to Submit? (Remitting customer)</li>
                                            <li>Amount to be remitted.</li>
                                            <li>His/her account number which is to be debited.</li>
                                            <li>Name of the beneficiary bank.</li>
                                            <li>Name of the beneficiary customer.</li>
                                            <li>IFSC of receiving branch.</li>
                                            <li>Account number of the beneficiary customer.</li>
                                            <li>10:00 am to 04:00 P.M. (Monday to Saturday) (2nd and 4th Saturday holiday)</li>
                                        </ul>
                                        <p>NEFT Service</p>
                                        <p>Reserve Bank of India has introduced a system called National Electronic Funds Transfer System (NEFT) through
                                            which fund transfer operation would take place among member Banks and financial institutions. Our bank is one of
                                            the participants in the above system.</p>
                                        <p>The Objectives of the NEFT System are:</p>
                                        <p>To establish an Electronic Funds Transfer System to facilitate an efficient, Secure, economical, reliable and
                                            expeditious system of funds transfer and Clearing in the banking sector throughout India, and To relieve the
                                            stress on the existing paper based funds transfer and clearing system.</p>
                                        <ul>
                                            <li>Credit to Beneficiary’s Account on the same day/next day if remittance done late in the evening.</li>
                                            <li>Safest and Secure Mode of Fund Transfer.</li>
                                            <li>No charges for inward Remittance</li>
                                            <li>Money can be put to use by beneficiary on the same day or next day.</li>
                                        </ul>
                                        <p>Eligibility</p>
                                        <ul>
                                            <li>Customers of Shree Dharati Co-op Bank Ltd. can send/ receive remittances under NEFT Scheme to/ from any
                                                destination Bank/ Branch which is registered with RBI’s NEFT System.</li>
                                            <li>Presently more than 60,000 Branches of 91 member banks spread across the country participate in NEFT..</li>
                                        </ul>
                                        <p>Amount of Remittance:</p>
                                        <ul>
                                            <li>There is no ceiling of minimum and maximum amount of remittance/ transaction.</li>
                                        </ul>
                                        <p>Credit to Beneficiary’s Account:</p>
                                        <ul>
                                            <li>Credit to the Beneficiary Account will be given by Beneficiary’s Bank’s Branch on the same day [chargable
                                                same day] and in case of holiday/ after business hours, credit will be given on next business date.</li>
                                        </ul>
                                        <p>Working of the Scheme:</p>
                                        <ul>
                                            <li>Customers of&nbsp;Shree Dharati Co-op Bank Ltd. can send/ receive remittances under NEFT Scheme to/ from any
                                                destination Bank/ Branch which is registered with RBI’s NEFT System.</li>
                                            <li>Presently more than 60,000 Branches of 91 member banks spread across the country participate in NEFT..</li>
                                            <li>There is no ceiling of minimum and maximum amount of remittance/ transaction.</li>
                                            <li>Credit to the Beneficiary Account will be given by Beneficiary’s Bank’s Branch on the same day [chargable
                                                same day] and in case of holiday/ after business hours, credit will be given on next business date.</li>
                                            <li>Collect NEFT slip book from the Branch.<br />
                                                Mention beneficiary Bank and Branch name with IFSC code (Indian Financial System Code) and beneficiary’s
                                                Name, Account Type, Account Number and Amount to be remitted. Message will be sent in electronic form in a
                                                highly secured manner through NEFT System to Beneficiary Bank’s Branch.</li>
                                            <li>Timings :-<br />
                                                10:00 am to 04:00 P.M. (Monday to Saturday) (2nd and 4th Saturday holiday)</li>
                                        </ul>
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

export default RTGS;