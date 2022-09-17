import React, { Component } from "react";
import Section from "../layouts/Section";
import { Link } from "react-router-dom";
import BlogSidebarArea from "../layouts/BlogSidebarArea";

class VehicleLoan extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={true} title={'Vehicle Loan'}>
                <section className="blog_area single-post-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="blog_details">
                                        <h4>Vehicle Loan</h4>
                                        <ul>
                                            <li>
                                                Hire Purchase Loan is available for purchase of two wheelers, three wheelers, four wheelers and for
                                                Commercial vehicles and also for purchase of 3 years old car with good condition.</li>
                                        </ul>
                                        <h4>
                                            Applicant details :</h4>
                                        <ul>
                                            <li>
                                                Applicant’s last two years Income tax Return / Payslip of last 3 months / Notarized income certificate for
                                                joint family.</li>
                                            <li>
                                                Last tax bill / certificate from society chairman/Secretary if applicant owned property</li>
                                            <li>
                                                3 Photographs of Applicant</li>
                                            <li>
                                                Address proof – electric bill /telephone bill/Aadhar card (any one) As per KYC norms</li>
                                            <li>
                                                Photo proof – Pan card / Voter card / Driving license/Aadhar card (Any one) As per KYC norms</li>
                                            <li>
                                                Quotation of vehicle</li>
                                            <li>
                                                Applicant has to show all original documents to the bank for verification with zerox copy. Original
                                                documents will be returned to applicant after verification.</li>
                                            <li>
                                                Driving License</li>
                                        </ul>
                                        <h4>
                                            Guarantor Details</h4>
                                        <ul>
                                            <li>
                                                Photograph-2 copies</li>
                                            <li>
                                                Last tax bill</li>
                                            <li>
                                                Last income tax return copy</li>
                                            <li>
                                                Address proof – electric bill /telephone bill (any one)</li>
                                            <li>
                                                Photo proof – Pan card / Voter card / Driving license/Aadhar card (Any one)</li>
                                        </ul>
                                        <h4>
                                            Conditions</h4>
                                        <ul>
                                            <li>
                                                We give loan up to 85% of quotation of basic price. for transport/ commercial vehical to shareholders and
                                                Bank will give loan upto 75% of quotation of basic price to the nominal members.</li>
                                            <li>
                                                Applicant has to take insurance of full value of vehicle in favour of bank.</li>
                                            <li>
                                                The Loan for two wheelers, three wheelers will be repaid with interest in 36 equal monthly
                                                instalments.</li>
                                            <li>
                                                The Loan for 4 wheelers will be repaid with interest in 84 equal monthly instalments.</li>
                                            <li>
                                                Applicant have to pay margin amount to the bank. Bank will issue Banker cheque of full amount in the name of
                                                dealer.</li>
                                            <li>
                                                Applicant have to submit invoice, receipt, insurance policy, RTO book showing Bank's lien
                                                recorded with RTO.</li>
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

export default VehicleLoan;