import React, { Component } from "react";
import Section from "../layouts/Section";
import { Link } from "react-router-dom";
import BlogSidebarArea from "../layouts/BlogSidebarArea";

class PropertyLoan extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={true} title={'Property Loan'}>
                <section className="blog_area single-post-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="blog_details">
                                        <h4>Property Loan</h4>
                                        <h4>
                                            Applicant details :</h4>
                                        <ul>
                                            <li>
                                                Last three years balance sheet, copy of income tax return, copy of Partner’s personal return , Memorandum
                                                and Article of Association in case of limited company, resolution for loan application.</li>
                                            <li>
                                                Three photographs of Applicant</li>
                                            <li>
                                                Business proof of Applicant</li>
                                            <li>
                                                Applicant’s Pan card / Partner’s Pan Card / Limited Company’s Pan card</li>
                                            <li>
                                                Bank statement of last 2 years</li>
                                            <li>
                                                Applicant has to show all original documents to the bank for verification with zerox copy. Original
                                                documents will be returned to applicant after verification.</li>
                                            <li>
                                                Applicant should have Savings/ current Bank account with the bank.</li>
                                            <li>
                                                Address proof – electric bill /telephone bill -land line (any one) As per KYC norms</li>
                                            <li>
                                                Photo proof – Pan card / Voter card / Driving license (Any one) As per KYC norms</li>
                                        </ul>
                                        <h4>
                                            Guarantor Details</h4>
                                        <ul>
                                            <li>
                                                Photograph-two copies</li>
                                            <li>
                                                Last tax bill</li>
                                            <li>
                                                Last income tax return copy</li>
                                            <li>
                                                Address proof – electric bill /telephone bill- land line (any one)As per KYC norms</li>
                                            <li>
                                                Photo proof – Pan card / Voter card / Driving license/Aadhar card (Any one)As per KYC norms</li>
                                        </ul>
                                        <h4>
                                            Conditions</h4>
                                        <ul>
                                            <li>
                                                Original documents of property Such as share certificate, sale deed, tax receipt, allotment letter are to be
                                                submitted to the bank. Registered mortgage of property to be done in favour of bank.Banks charge will be
                                                noted in Association / society’s book.</li>
                                            <li>
                                                Bank will give loan if property is having N A N O C and BU permission.</li>
                                            <li>
                                                Applicant will have to take insurance of the building in favour of bank.</li>
                                            <li>
                                                Title clearance and valuation report will be done by approved lawyer and valuer of the bank. Applicant has
                                                to pay their fees.</li>
                                            <li>
                                                applicant has to provide two guarantors.</li>
                                            <li>
                                                business-mortgage loan is to be repaid with interest within 84 equal monthly instalments. whereas business
                                                mortgage overdraft facility is subject to maximum after 12 months.</li>
                                            <li>
                                                Limit will be decided on turn over basis as per bank rules or 70% of the value of the property , whichever
                                                is less.</li>
                                            <li>
                                                Applicant is required to submit stock statement creditors list and statement of book-debts on monthly basis
                                                and the copy of balance sheet as on 31st march every year.</li>
                                            <li>
                                                Aplicant has to take share @ 2.5% of the limit.</li>
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

export default PropertyLoan;