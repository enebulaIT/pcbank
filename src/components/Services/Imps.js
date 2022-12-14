import React, { Component } from "react";
import Section from "../layouts/Section";
import { Link } from "react-router-dom";
import BlogSidebarArea from "../layouts/BlogSidebarArea";

class IMPS extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={true} title={'IMPS'}>
                <section className="blog_area single-post-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="blog_details">
                                        <h4>IMPS (Immediate Payment Service)
                                        </h4>
                                        <ul>
                                            <li>The IMPS (Immediate Payment Service) from Parswanath Bank helps you access your bank account and transfer funds instantly and securely. You can send money using Parswanath Mobile banking app. We enable you to transfer funds from your Parswanath Bank account to any Parswanath Bank or non-Parswanath Bank account. The beneficiary account is credited immediately when a fund transfer request is made from your side..</li>
                                            <li>This service is available 24x7, throughout the year including Sundays and any bank holiday..</li>
                                            <li>Use IMPS service to transfer funds anytime, from anywhere using our Mobile app</li>
                                        </ul>
                                        <p><strong>For IMPS inward remittance :</strong></p>
                                        <ul>
                                            <li>For IMPS inward remittance, please use IFS Code <strong>'ICIC000153'</strong></li>
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

export default IMPS;