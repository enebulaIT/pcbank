import React, { Component } from "react";
import Section from "../layouts/Section";
import { Link } from "react-router-dom";
import BlogSidebarArea from "../layouts/BlogSidebarArea";

class GovtTaxCollection extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={true} title={'Govt TAX Collection'}>
                <section className="blog_area single-post-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="blog_details">
                                        <h4>Govt TAX Collection
                                        </h4>
                                        <p><strong>The Bank Provides Following E-Payments Facilities :</strong></p>
                                        <ul>
                                            <li>GST Payment through Only RTGS/NEFT</li>
                                            <li>Income Tax</li>
                                            <li>TDS-TCS</li>
                                            <li>TDS on Sale of Property(26QB)</li>
                                            <li>TDS on Rent of Property(26QC)</li>
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

export default GovtTaxCollection;