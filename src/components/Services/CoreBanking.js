import React, { Component } from "react";
import Section from "../layouts/Section";
import BlogSidebarArea from "../layouts/BlogSidebarArea";

class CoreBanking extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={true} title={'Core Banking'}>
                <section className="blog_area single-post-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="blog_details">
                                        <h4>Core Banking Solution [CBS]</h4>
                                        <ul>
                                            <li>Core Banking Solution (CBS) is networking of branches, which enables Customers to operate their accounts, and avall banking services from any branch of the Bank on CBS network, regardless of where he maintains his account. The customer is no more the customer of a Branch. He becomes the Bank's Customer.</li>
                                            <li>Another interesting fact regarding CBS is that all CBS branches are inter-connected with each other. Therefore, Customers of CBS branches can avail various banking facilities from any other CBS branch located anywhere in the world.</li>

                                            <li>WHAT CBS OFFER TO A CUSTOMER ?</li>
                                            <ol>
                                                <li>To make inquiries about the balance or debit or credit entries in the account.</li>
                                                <li>To obtain cash payment out of his account by tendering a cheque.</li>
                                                <li>To deposit a cheque for credit into his account.</li>
                                                <li>To deposit cash into the account.</li>
                                                <li>To deposit cheques/cash into account of some other person who has account in a CBS branch.</li>
                                                <li>To get statement of account.</li>
                                                <li>To transfer funds from his account to some other account-his own or of third party, provided both accounts are in CBS branches.</li>
                                                <li>To obtain Demand Drafts or Banker's Cheques from any branch on CBS amount shall be online debited to his account.</li>
                                                <li>Customers can continue to use ATMs and other Delivery Channels, which are also interfaced with CBS platform.</li>
                                            </ol>

                                            <li>Thus, CBS is a step towards enhancing customer convenience through anywhere and anytime banking..</li>
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

export default CoreBanking;