import React, { Component } from "react";
import Section from "../layouts/Section";
import { Link } from "react-router-dom";
import BlogSidebarArea from "../layouts/BlogSidebarArea";

class CurrentAccount extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={true} title={'Current Account'}>
                <section className="blog_area single-post-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="blog_details">
                                        <h4>Current Account
                                        </h4>
                                        <ul>
                                            <li>
                                                Customer can open Current Account with minimum balance or Rs.3000/-.</li>
                                            <li>
                                                We offer 45 pages cheque book.</li>
                                            <li>
                                                We offer nomination facility for all individual accounts and proprietory concern accounts.</li>
                                            <li>
                                                Customer can open joint account and that account can jointly,operate as per instruction like Any one,
                                                Jointly, Any two Jointly either or survivor etc.</li>
                                            <li>
                                                We offer Monthly, Half yearly, Yearly and periodical Statement to our Customers for their reconciliation
                                                purpose or any other purpose.</li>
                                            <li>
                                                We are member of Deposit Insurance and Credit Guarantee Scheme [DICGC] in which customers deposits are
                                                insured up to Rs. 5 Lac.</li>
                                        </ul>
                                        <h4>
                                            Rules &amp; Regulation for Current Account</h4>
                                        <ul>
                                            <li>
                                                Every Depositor must have to fulfill KYC norms as per RBI directive.</li>
                                            <li>
                                                The Customer has to give all the valid proof at the time of opening an account under KYC norms as per RBI
                                                Guideline.</li>
                                            <li>
                                                The Bank's management is having right to close the account after notice if account holder do not keep
                                                sufficient balance to clear inward cheque or ECS.</li>
                                            <li>
                                                The customer must have to preserve his/her cheque book in his custody. The Bank is not responsible for any
                                                misuse of cheque book.</li>
                                            <li>
                                                Cheque book charges will be debited from the account at the time of issue of cheque book. Other Charges
                                                which will be applicable will also be deducted from the account.</li>
                                            <li>
                                                Stop payment of particular cheque/s facility is available but the customer has to keep sufficient balance to
                                                match the cheque amount then only the cheque will be returned with the reason of stop payment and stop
                                                payment charges will be levied from the account.</li>
                                            <li>
                                                The Bank is having all rights of appropriation, set off, lien and change the rules and regulation.</li>
                                            <li>
                                                No interest will be paid in Current Account.</li>
                                        </ul>
                                        <h4>
                                            Requirements to Open Current Bank Account</h4>
                                        <ul>
                                            <li>
                                                <strong>Valid Photo I.D. &amp; Address Proof of proprietor / partners / directors (Self Attested)</strong>
                                            </li>
                                            <li>
                                                (A) Any one of proof for all partners/ directors or proprietor (Photo Id)<br/>
                                                    <strong>1</strong>.Passport, <strong>2</strong>.Driving License, <strong>3</strong>.Aadhar Card,
                                                    <strong>4</strong>.Voter ID Card, <strong>5</strong>.Government Approved College/university I.Card,
                                                    <strong>6</strong>. Government/Semigovernment/Department I.Card
                                            </li>
                                            <li>
                                                (B) Address Proof(Any One)<br/>
                                                    <strong>1</strong>. Electricity Bill (not more than 2 months old) <strong>2</strong>. BSNL Landline
                                                    Telephone Bill (not more than 2 months old) <strong>3</strong>.Municipal Tax Bill
                                            </li>
                                            <li>
                                                Other proof acceptable by Bank. (Mandatory)</li>
                                            <li>
                                                <strong>Passport Size Photograph 4 Copies</strong>
                                            </li>
                                            <li>
                                                <strong>Registration Certificate of firm/shop and establishment/S.S.I /GST Certificate.</strong>
                                            </li>
                                            <li>
                                                <strong>Partnership deed </strong>
                                            </li>
                                            <li>
                                                <strong>Copy of Memorandum and Articles of Association &amp; Latest Form No.32. (For Company Account) /
                                                    Resolution to operate the account.</strong>
                                            </li>
                                            <li>
                                                <strong>Pan Card(proprietor / partners / directors/ company) with forwarding letter</strong>
                                            </li>
                                            <li>
                                                <strong>Introduction from existing Account Holder</strong>
                                            </li>
                                            <li>
                                                <strong>Any other Government Approved document.</strong>
                                            </li>
                                        </ul>
                                        <h4>
                                            Download Form</h4>
                                        <p>
                                            <a href="https://www.dharatibank.com/uploads/download/account-opening-form.pdf" target="_blank"><button
                                                class="btn btn-info" type="button">Download A/c Opening Form</button></a>
                                        </p>
                                        <p>
                                            <a href="https://www.dharatibank.com/uploads/download/account-opening-specimen-card.pdf" target="_blank"><button
                                                class="btn btn-info" type="button">Download A/c Opening Card</button></a>
                                        </p>
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

export default CurrentAccount;