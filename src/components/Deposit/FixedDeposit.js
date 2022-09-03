import React, { Component } from "react";
import Section from "../layouts/Section";
import { Link } from "react-router-dom";
import BlogSidebarArea from "../layouts/BlogSidebarArea";

class FixedDeposit extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={true} title={'Fixed Deposit'}>
                <section className="blog_area single-post-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="blog_details">
                                        <h4>Fixed Deposit
                                        </h4>
                                        <ul>
                                            <li>Term deposit scheme is an attractive scheme to deposit your savings for fix period for 15 days to 120 Months
                                                as per your future requirements.</li>
                                            <li>We provide attractive Interest Rates to our Customers from time to time.</li>
                                            <li>We offer 0.50% extra Interest Rate to Senior Citizens on term deposits of above 1 year.</li>
                                            <li>Guardian can open Minor's Term deposit A/c. When minor turns major then at maturity he/she can withdraw the
                                                amount with his/her signature, after providing valid age proof.</li>
                                            <li>We offer nomination facility for all deposit accounts.</li>
                                            <li>We provide Monthly &amp; quarterly Interest payment to our customers on their existing Fix Deposits as per
                                                their instruction &amp; RBI guidelines.</li>
                                            <li>Loan and Overdraft facility is available against Term deposit receipt.</li>
                                            <li>The maturity date of Loan and Overdraft Account against Fix Deposit is maturity date of Fix Deposit Receipt.
                                            </li>
                                            <li>TDS on Interest income will be deducted as per Income Tax Act.</li>
                                            <li>We are member of Deposit Insurance and Credit Guarantee Scheme [DICGC] in which customers deposit are
                                                insured up to Rs. 5 Lacs.</li>
                                        </ul>
                                        <p>Rules &amp; Regulation for Fix Deposit</p>
                                        <ul>
                                            <li>Depositor has to fulfill KYC norms as per RBI directive.</li>
                                            <li>Customer can Open Fix Deposit A/c with minimum of Rs.500/-</li>
                                            <li>Guardian can open Minor's Fix Deposit A/c. When minor turn major then after providing valid age proof he/she
                                                can withdraw the amount with his/her signature.</li>
                                            <li>No penalty charges in premature withdrawal of deposit.</li>
                                            <li>All rights reserved to the Bank's management to Change the Interest Rate of the Fix Deposit Scheme without
                                                prior notice. Change of Interest rate will be applicable to new deposits only.</li>
                                            <li>The Bank having rights of appropriation, set off, lien and change the rules and regulation for the scheme.
                                            </li>
                                        </ul>
                                        <p>Requirements to Fix Deposit</p>
                                        <ul>
                                            <li><strong>Valid Photo I.D. &amp; Address Proof of Individual / proprietor / partners / directors </strong>
                                            </li>
                                        </ul>
                                        <p>(A) Photo Proof (Any One)</p>
                                        <ul>
                                            <li><strong>1</strong>.Pan Card <strong>2.</strong>Aadhar Card <strong>3.</strong>Passport,
                                                <strong>4</strong>.Driving License, <strong>5</strong>.Voter ID Card, <strong>6</strong>.Government Approved
                                                College/university I.Card, <strong>7</strong>. Government/Semi government/Department I.Card</li>
                                        </ul>
                                        <p>(B) Address Proof(Any One)</p>
                                        <ul>
                                            <li><strong>1</strong>. Aadhar Card&nbsp;<strong>2.</strong>Passport,&nbsp;<strong>3</strong>.Driving
                                                License,&nbsp;<strong>4</strong>.Voter ID Card <strong>5.</strong>Electricity Bill (not more than 2 months
                                                old) <strong>6</strong>. BSNL Landline Telephone Bill (not more than 2 months old)
                                                <strong>7</strong>.Municipal Tax Bill</li>
                                        </ul>
                                        <p>&nbsp;</p>
                                        <ul>
                                            <li><strong>Other valid proof also acceptable by Bank.</strong></li>
                                            <li><strong>Passport Size Photograph 2 Copies</strong></li>
                                            <li><strong>Birth Certificate for minor a/c.</strong></li>
                                            <li><strong>Senior Citizens have to produce age proof to avail 0.50% Interest Rate benefit.</strong></li>
                                        </ul>
                                        <p>Download Form</p>
                                        <p>Download A/c Opening Form</p>
                                        <p>Download A/c Opening Card</p>
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

export default FixedDeposit;