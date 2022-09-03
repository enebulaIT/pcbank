import React, { Component } from "react";
import Section from "../layouts/Section";
import { Link } from "react-router-dom";
import BlogSidebarArea from "../layouts/BlogSidebarArea";

class SMSAlert extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={true} title={'SMS Alert'}>
                <section className="blog_area single-post-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="blog_details">
                                        <h4>SMS Alert
                                        </h4>
                                        <ul>
                                            <li>
                                                We are Providing SMS facility for all banking transaction.</li>
                                            <li>
                                                Shree Dharati Bank SMS Alert is a service that allows you to stay updated on your banking transactions on Shree Dharati Bank&nbsp;account on your mobile. These alerts could be event based.</li>
                                            <li>
                                                Yes you can set SMS alerts for any of your Internet enabled accounts (SB, CC &amp; OD). You can select the accounts and the events for which you wish to receive alerts</li>
                                            <li>
                                                Your mobile number should be registered with Shree Dharati Bank.</li>
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

export default SMSAlert;