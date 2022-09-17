import React, { Component } from "react";
import Section from "../layouts/Section";
import BlogSidebarArea from "../layouts/BlogSidebarArea";

class NACH extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={true} title={'NACH/ACH/ABPS'}>
                <section className="blog_area single-post-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="blog_details">
                                        <h4>National Automated Clearing House [NACH]</h4>
                                        <ul>
                                            <li>National Payments Corporation of India (NPCI) has implemented "National Automated Clearing House (NACH) for Banks, Financial Institutions, Corporates and Government a web based solution to facilitate interbank, high volume, electronic transactions which are repetitive and periodic in nature. NACH System can be used for making bulk transactions towards distribution of subsidies, dividends, interest, salary, pension etc. and also for bulk transactions towards collection of payments pertaining to telephone, electricity, water, loans, investments in mutual funds, insurance premium etc.</li>
                                            <li>National Automated Clearing House (NACH) is a centralised system, launched with an aim to consolidate multiple ECS systems running across the country and provides a framework for the harmonization of standard & practices and removes local barriers/inhibitors. NACH system will provide a national footprint and is expected to cover the entire care banking enabled bank branches spread across the geography of the country irrespective of the location of the bank branch.</li>
                                            <li>With the implementation of NACH system, NPCI intends to provide a single set of rules (operating and business), open standards and best industry practices for electronic transactions which are common across all the Participants, Service Providers and Users etc. NACH system also supports Financial Inclusion measures initiated by Government, Government Agencies and Banks by providing support to Aadhaar based transactions.</li>
                                            <li>The NACH system facilitates the member banks to design their own products and also addresses specific needs of the banks & corporates including a refined Mandate Management System (MMS) and an online Dispute Management System (DMS) coupled with strong information exchange and customised MIS capabilities.</li>
                                            <li>The NACH system provides a robust, secure and scalable platform to the participants with both transaction and file based transaction processing capabilities. It has best in class security features cost efficiency & payment performance (STP) coupled with multi-level data validation facity accessible to all participants across the country. </li>
                                            <li>NACH'S Aadhaar Payment Bridge (APB) System, developed by NPCI has been helping the Government and Government Agencies in making the Direct Benefit Transfer scheme a success APB System has been successfully channelizing the Government subsidies and benefits to the intended beneficiaries using the Aadhaar numbers. The APB System links the Government Departments and their sponsor banks on one side and beneficiary banks and beneficiary on the other hand.</li>
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

export default NACH;