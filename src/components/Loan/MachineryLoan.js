import React, { Component } from "react";
import Section from "../layouts/Section";
import { Link } from "react-router-dom";
import BlogSidebarArea from "../layouts/BlogSidebarArea";

class MachineryLoan extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={true} title={'Machinery Loan'}>
                <section className="blog_area single-post-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="blog_details">
                                        <h4>Machinery Loan</h4>
                                        <ul>
                                            <li>
                                                Machinery term loan is available for purchase of old/new machinery. Trading / Manufacturing units, Traders ,
                                                Business community can avail credit facility for development of business.</li>
                                        </ul>
                                        <h4>
                                            Applicant details :</h4>
                                        <ul>
                                            <li>
                                                Applicant’s last two years Income tax Return /last years balance sheet and profit &amp; loss account of
                                                firm/company.</li>
                                            <li>
                                                Last tax bill / certificate from society chairman/Secretary if applicant own property</li>
                                            <li>
                                                Applicant should have Savings/ current Bank account with the bank.</li>
                                            <li>
                                                Bank Statement.</li>
                                            <li>
                                                Applicant has to show all original documents to the bank for verification with zerox copy. Original
                                                documents will be returned to applicant after verification.</li>
                                            <li>
                                                3 Photographs of Applicant</li>
                                            <li>
                                                Address proof – electric bill /telephone bill- land line /Aadhar card (any one) As per KYC norms.</li>
                                            <li>
                                                Photo proof – Pan card / Voter card / Driving license (Any one) As per KYC norms</li>
                                        </ul>
                                        <h4>
                                            Guarantor Details</h4>
                                        <ul>
                                            <li>
                                                Photograph-2 copies</li>
                                            <li>
                                                Last tax bill</li>
                                            <li>
                                                Last income tax return copy /Pay Slip</li>
                                            <li>
                                                Address proof – electric bill /telephone bill- land line (any one)</li>
                                            <li>
                                                Photo proof – Pan card / Voter card / Driving license/Aadhar card (Any one)</li>
                                        </ul>
                                        <h4>
                                            Conditions</h4>
                                        <ul>
                                            <li>
                                                Property Mortgage required.</li>
                                            <li>
                                                Two guarantors are required.</li>
                                            <li>
                                                Bank will sanction loan 90% of quotation amount for new machinery. Applicant has to deposit margin money
                                                with bank. Bank will issue banker cheque to dealer.</li>
                                            <li>
                                                HPA required "Shree Parswanath co.op. Bank Ltd" in original invoice.</li>

                                            <li>
                                                Loan will be repaid with interest within 60 equal monthly instalments.</li>
                                            <li>
                                                Applicant has to submit 60 cheques for repayment of instalments and remaining cheques as per bank's
                                                instruction.</li>
                                            <li>
                                                Applicant has to take share of bank @ 2.5% of the limit.</li>
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

export default MachineryLoan;