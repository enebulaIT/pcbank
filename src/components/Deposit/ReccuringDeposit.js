import React, { Component } from "react";
import Section from "../layouts/Section";
import { Link } from "react-router-dom";
import BlogSidebarArea from "../layouts/BlogSidebarArea";

class RecurringDeposit extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={true} title={'Reccuring Deposit'}>
                <section className="blog_area single-post-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="blog_details">
                                        <h4>Reccuring Deposit
                                        </h4>
                                        <ul>
                                            <li>
                                                Recurring Deposit is a monthly Fix Savings Scheme. Customer can Open Recurring A/c with minimum of Rs.100/-
                                                per month and in count of Rs. 100/- thereafter i.e. Rs.100/-, Rs.200/-, Rs. 300/- etc.</li>
                                            <li>
                                                Customers can open Recurring account for 12, 24 and 36 Months.</li>
                                            <li>
                                                We offer nomination facility for all deposit accounts.</li>
                                            <li>
                                                We are member of Deposit Insurance and Credit Guarantee Scheme in which customers deposit are insured up to
                                                Rs. 1 Lac.</li>
                                        </ul>
                                        <h4>
                                            Rules &amp; Regulation for Recurring Deposite</h4>
                                        <ul>
                                            <li>
                                                Depositor has to fulfill KYC norms as per RBI directive.</li>
                                            <li>
                                                Guardian can open Minor's Recurring A/c. When minor turn major there after providing valid age proof he/she
                                                can withdraw the amount with his/her signature.</li>
                                            <li>
                                                Every Depositor must have to deposit their instalments till date of opening a/c or last installment date of
                                                every month.</li>
                                            <li>
                                                If Depositors failed to deposit Installment on regular basis, penalty will be levied.</li>
                                            <li>
                                                The maturity amount is payable after 30 days of last instalments deposited.</li>
                                            <li>
                                                If customer want to close the 12 months period deposit account before its mature period then the interest
                                                will be applicable as per Savings Interest Rate.</li>
                                            <li>
                                                If Customer Deposit more instalments than required for prescribe period then Interest will not be applicable
                                                on extra installment he/she deposited.</li>
                                            <li>
                                                If customer having Savings or Current a/c in the Bank then by the written application Bank will transfer
                                                Recurring Deposit instalments from that account as standing instruction.</li>
                                            <li>
                                                The Bank is having rights of appropriation, set off, lien and change the rules and regulation for the
                                                scheme.</li>
                                            <li>
                                                1% penalty will be levid on present interest rates.</li>
                                        </ul>
                                        <h4>
                                            Requirements to Recurring Deposit</h4>
                                        <ul>
                                            <li>
                                                <strong>Valid Photo I.D. &amp; Address Proof of proprietor / partners /directors </strong>
                                            </li>
                                            <li>
                                                (A) Any one of proof for all partners/ directors or proprietor (Photo Id)<br/>
                                                    <strong>1</strong>.Passport, <strong>2</strong>.Driving License, <strong>3</strong>.Voter ID Card,
                                                    <strong>4</strong>.Government Approved College/university I.Card, <strong>5</strong>. Government/Semi
                                                    government/Department I.Card
                                            </li>
                                            <li>
                                                (B) Address Proof(Any One)<br/>
                                                    <strong>1</strong>. Electricity Bill (not more than 2 months old) <strong>2</strong>. BSNL Landline
                                                    Telephone Bill (not more than 2 months old) <strong>3</strong>.Municipal Tax Bill
                                            </li>
                                            <li>
                                                Other proof acceptable by Bank.</li>
                                            <li>
                                                Passport Size Photograph 2 Copies</li>
                                            <li>
                                                Pan Card</li>
                                            <li>
                                                Birth Certificate for minor a/c.</li>
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

export default RecurringDeposit;