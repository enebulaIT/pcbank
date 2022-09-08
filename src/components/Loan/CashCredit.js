import React, { Component } from "react";
import Section from "../layouts/Section";
import { Link } from "react-router-dom";
import BlogSidebarArea from "../layouts/BlogSidebarArea";

class CashCredit extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={true} title={'Cash Credit'}>
                <section className="blog_area single-post-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="blog_details">
                                        <h4>Cash Credit</h4>
                                        <ul>
                                            <li>
                                                Cash credit facility is available as a Working Capital for development of business against prime security of
                                                stock and collateral security. Trading / Manufacturing Units, Traders, Business community can avail the Cash
                                                Credit.</li>
                                        </ul>
                                        <h4>
                                            Cash credit Applicant details :</h4>
                                        <ul>
                                            <li>
                                                Copy of Income tax return of last three year along with balance sheet.</li>
                                            <li>
                                                Provisional Balance Sheet (If required).</li>
                                            <li>
                                                Copy of All related person's(Partner, Director etc) Income tax return with Balance sheet.</li>
                                            <li>
                                                Memorandum and Article of Association in case of limited company, Partnership deed in case of Partnership
                                                Firm.</li>
                                            <li>
                                                3 Photographs of Applicant.</li>
                                            <li>
                                                Business proof of Applicant.</li>
                                            <li>
                                                All Registration Certificate of firm</li>
                                            <li>
                                                Copy of PAN Card</li>
                                            <li>
                                                Copy of Proof of ID (PAN Card, Aadhar Card, Driving License, passport) of all related person</li>
                                            <li>
                                                Bank account statement of last year</li>
                                            <li>
                                                Property File</li>
                                            <li>
                                                If applicant borrow any loan from other bank then applicant must give copy of sanction letter and any other
                                                required loan details.</li>
                                            <li>
                                                Applicant has to show all original documents to the bank for verification with xerox copy. Original
                                                documents will be returned to applicant after verification.</li>
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
                                            Cash Credit Conditions</h4>
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

export default CashCredit;