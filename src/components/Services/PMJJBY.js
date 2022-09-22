import React, { Component } from "react";
import Section from "../layouts/Section";
import { Link } from "react-router-dom";
import BlogSidebarArea from "../layouts/BlogSidebarArea";

class PMJJBY extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={true} title={'PMJJBY/PMSBY'}>
                <section className="blog_area single-post-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="blog_details">
                                        <h4>PRADHAN MANTRI SURAKSHA BIMA YOJANA [PMSBY]</h4>
                                        <ul>
                                            <li>Eligibility: Available to people in age group 18 to 70 years with bank account.</li>
                                            <li>Premium: Rs 20 per annum.</li>
                                            <li>Payment Mode: The premium will be directly auto-debited by the bank from the subscribers account. This is the only mode available.</li>
                                            <li>Risk Coverage: For accidental death and full disability-Rs 2 Lakh and for partial disability - Rs 1 Lakh</li>
                                            <li>Eligibility: Any person having a bank account and Aadhaar number linked to the bank account can give a simple form to the bank every year before 1st of June in order to join the scheme. Name of nominee to be given in the form. </li>
                                            <li>The premium paid will be tax-free under section 80C and also the proceeds amount will get tax-exemption u/s 10(100) But if the proceeds from insurance policy exceed Rs.1 lakh, TDS at the rate of 2% from the total proceeds if no Form 156 or Form 15H is submitted to the insurer.</li>
                                        </ul>
                                    </div>

                                    <div className="blog_details">
                                        <h4>PRADHAN MANTRI JEEVAN JYOTI BIMA YOJANA [PMIJBY]</h4>
                                        <ul>
                                            <li>Eligibility Available to people in the age group of 18 to 50 and having a bank account. People who join the scheme before completing 50 years can, however, continue to have the risk of life cover up to the age of 55 years subject to payment of premium.</li>
                                            <li>Premium: Rs 436 per annum it will be auto-debited in one instalment </li>
                                            <li>Payment Mode: The payment of premium will be directly auto-debited by the bank from the subscribers account.</li>
                                            <li>Risk Coverage: Rs. 2 Lakh in case of death for any reason.</li>
                                            
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

export default PMJJBY;