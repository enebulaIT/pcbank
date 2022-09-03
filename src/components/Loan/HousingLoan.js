import React, { Component } from "react";
import Section from "../layouts/Section";
import { Link } from "react-router-dom";
import BlogSidebarArea from "../layouts/BlogSidebarArea";

class HousingLoan extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={true} title={'Housing Loan'}>
                <section className="blog_area single-post-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="blog_details">
                                        <h4>Housing Loan</h4>
                                        <ul>
                                            <li>
                                                Housing Loan upto Rs.70/lacs is available for construction/purchase of old/new flat, bungalow,raw house and
                                                also for carryout addition/alteration in the existing residential house.</li>
                                        </ul>
                                        <h4>
                                            Housing Loan Applicant details :</h4>
                                        <ul>
                                            <li>
                                                Copy of Last Three years income tax return / Pay slip of last 3 months.&nbsp; If Applicant is businessman in
                                                that case last three years copies of balance sheet, income tax return of the proprietor/partner,statement of
                                                capital account.</li>
                                            <li>
                                                If property is to be purchased under housing scheme,the copies of documents,such as share
                                                certificate,allotment-letter,saledeed,revenue records of 7/12.</li>
                                            <li>
                                                Copy of authorised building plan.</li>
                                            <li>
                                                Copy of receipt of advanced payment-made/copy of agreement to sale</li>
                                            <li>
                                                Copy of title clearance certificate given by the advocate/ solicitor.</li>
                                            <li>
                                                Consent letter from the society about noting of charge of the bank.</li>
                                            <li>
                                                Three copies of Photograph</li>
                                            <li>
                                                Copy of PAN Card</li>
                                            <li>
                                                Address proof – electric bill /telephone bill (any one)</li>
                                            <li>
                                                Photo proof – Pan card / Voter card / Driving license (Any one)</li>
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
                                                Address proof – electric bill /telephone bill (any one) As per KYC norms</li>
                                            <li>
                                                Photo proof – Pan card / Voter card / Driving license/Aadhar card (Any one) As per KYC norms</li>
                                        </ul>
                                        <h4>
                                            Housing Loan Conditions</h4>
                                        <ul>
                                            <li>
                                                Original documents of property to be submitted to the bank. Registered mortgage of property to be done in
                                                favour of bank.Bank charge will be noted in society’s book.</li>
                                            <li>
                                                Valuation of the property will be required for old property. Bank will give loan of 60% of valuation
                                                amount.(for old property)and new property bank will give loan of 80%.</li>
                                            <li>
                                                Applicant will have to take insurance of the building in favour of bank.</li>
                                            <li>
                                                Loan amount with interest will be repaid within 120 equal monthly instalments.</li>
                                            <li>
                                                Applicant has to submit original share certificate of the Society/Association, Municipal Tax bill, Tax
                                                receipt, sales deed etc, for registered mortgage of the property.</li>
                                            <li>
                                                Title clearance and valuation report will be done by approved lawyer and valuer of the bank. Applicant has
                                                to pay their fees.</li>
                                            <li>
                                                Applicant has to take share @ 2.5% of the limit.</li>
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

export default HousingLoan;