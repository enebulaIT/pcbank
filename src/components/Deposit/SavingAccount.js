import React, { Component } from "react";
import Section from "../layouts/Section";
import BlogSidebarArea from "../layouts/BlogSidebarArea";

class SavingAccount extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={true} title={'Saving Account'}>
                <section className="blog_area single-post-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="blog_details">
                                        <h4>Saving Account
                                        </h4>
                                        <ul>
                                            <li>Customer can open Saving Account with minimum balance or Rs.1000.</li>
                                            <li>Customer has to maintain minimum balance or Rs.1000/-</li>
                                            <li>We also open zero balance saving account with certain conditions/ limited transaction.</li>
                                            <li>We offer nomination facility for all deposit accounts.</li>
                                            <li>Customer can open single/joint account and that account can jointly,operate as per instruction like Any one,
                                                Jointly, Any two Jointly either or survivor etc.</li>
                                            <li>Customer can open Savings A/c for his/her minor children.</li>
                                            <li>We offer Computerised passbook to our Account holders.</li>
                                            <li>We are member of Deposit Insurance and Credit Guarantee Scheme in which customers deposits are insured up to
                                                Rs. 5 Lac.</li>
                                        </ul>
                                        <p>Rules &amp; Regulation for Savings Bank Account</p>
                                        <ul>
                                            <li>Every Depositor must have to fulfill KYC norms as per RBI directive.</li>
                                            <li>The Customer has to give all the valid proof under KYC norms at the time of opening an account as per RBI
                                                Guideline.</li>
                                            <li>Guardian can open Minor Savings Account. Birth Proof of Children is required.</li>
                                            <li>The Bank management having right to close the account after notice if account holder do not keep sufficient
                                                balance to clear inward cheque or ECS.</li>
                                            <li>The customer must have to preserve his/her cheque book &amp; passbook in his custody. The Bank is not
                                                responsible for any misuse of cheque book &amp; pass book.</li>
                                            <li>Interest on Savings deposit is calculated on daily balances.</li>
                                            <li>The customer without cheque book facility will be given withdrawal form at the time of payment. The
                                                withdrawal form will be given to the account holder only and only at the time of payment.</li>
                                            <li>The Passbook should be accompanied with the withdrawal form.</li>
                                            <li>Stop payment of particular cheque/s facility is available but the customer has to keep sufficient balance to
                                                match the cheque amount then only the cheque will be returned with the reason of stop payment and stop
                                                payment charges will be levied from the account.</li>
                                            <li>The Bank is having all rights of appropriation, set off, lien and change the rules and regulation.</li>
                                        </ul>
                                        <p>Requirements to open Savings Bank Account</p>
                                        <ul>
                                            <li><strong>Valid Photo I.D. &amp; Address Proof</strong></li>
                                            <li>(A) Any one of proof (Photo I.D.)<br />
                                                <strong>1</strong>.Pan card or Form-60 (Mandatory), <strong>2</strong>.Passport, <strong>3</strong>.Driving License, <strong>4</strong>. Voter ID Card,
                                                <strong>5</strong>. Government Approved College/university I.Card, <strong>6</strong>. Government/Semi
                                                government/Department I.Card
                                            </li>
                                            <li>(B) Address Proof(Any One)<br />
                                                <strong>1</strong>. Aadhaar card (Mandatory) <strong>2</strong>. Electricity Bill (not more than 2 months old) <strong>3</strong>. BSNL Landline
                                                Telephone Bill (not more than 2 months old), <strong>4</strong>. Municipal Tax Bill <strong>5</strong>. GSPC
                                                Gas Bill <strong>6</strong>. Latest LIC Premium receipt
                                            </li>
                                            <li>Other proof acceptable by Bank.</li>
                                            <li><strong>Passport Size Photograph 4 Copies</strong></li>
                                            <li><strong>Birth Certificate for minor account </strong></li>
                                            <li>Introduction From Existing account Holder</li>
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

export default SavingAccount;