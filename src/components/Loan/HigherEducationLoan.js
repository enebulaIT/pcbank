import React, { Component } from "react";
import Section from "../layouts/Section";
import { Link } from "react-router-dom";
import BlogSidebarArea from "../layouts/BlogSidebarArea";

class HigherEducationLoan extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={true} title={'Higher Education Loan'}>
                <section className="blog_area single-post-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="blog_details">
                                        <h4>Higher Education Loan</h4>
                                        <p>
                                            Higher Education loan is available up to Rs: 50/- lacs for higher study in the faculty of Medical, Engineering
                                            and IT. Students.</p>
                                        <h4>
                                            Applicant details</h4>
                                        <ul>
                                            <li>
                                                Applicant has to submit copy of mark sheet, result sheet, school leaving certificate pertaining to 12th
                                                standard.</li>
                                            <li>
                                                Photograph-two copies</li>
                                            <li>
                                                Copy of income tax return of the father who will be Co. Borrower for the loan.</li>
                                            <li>
                                                Copy of PAN card of the co-borrower.</li>
                                            <li>
                                                Bank Statement of last two years.</li>
                                            <li>
                                                Address proof -Electric bill/ telephone bill (any one)</li>
                                            <li>
                                                Photo Proof- Voter card / Driving license (any one)</li>
                                        </ul>
                                        <h4>
                                            Guarantor details</h4>
                                        <ul>
                                            <li>
                                                Photograph-2 Copies</li>
                                            <li>
                                                Last tax bill</li>
                                            <li>
                                                Last income tax return copy</li>
                                            <li>
                                                Address proof – electric bill /telephone bill (any one)</li>
                                            <li>
                                                Photo proof – Pan card / Voter card / Driving license (Any one)</li>
                                        </ul>
                                        <h4>
                                            Conditions</h4>
                                        <ul>
                                            <li>
                                                Father of the student has to submit document of the property for registered mortgage in favour of bank. Bank
                                                charge will be noted in Association / Society book.</li>
                                            <li>
                                                Valuation of the property will be required in case of old property.</li>
                                            <li>
                                                Title clearance and valuation report will be done by approved lawyer and valuer of the bank. Applicant has
                                                to pay their fees.</li>
                                            <li>
                                                Bank will keep 25% margin on tuition fee, Hostel fee or total package of fees.</li>
                                            <li>
                                                Applicant has to submit admission letter and details of college / University.</li>
                                            <li>
                                                Applicant has to submit progress report of each semesters.</li>
                                            <li>
                                                Loan is to be repaid along with interest in 60 equal monthly instalments. The repayment will start as soon
                                                as applicant complete study and obtain degree. During study period the applicant has to pay interest on
                                                regular basis.</li>
                                            <li>
                                                Father will stand as co-borrower.</li>
                                            <li>
                                                Applicant has to provide one guarantor.</li>
                                            <li>
                                                Applicant has to take share @ 2.50% of the limit.</li>
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

export default HigherEducationLoan;