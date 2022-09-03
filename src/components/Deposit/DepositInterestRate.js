import React, { Component } from "react";
import Section from "../layouts/Section";
import { Link } from "react-router-dom";
import BlogSidebarArea from "../layouts/BlogSidebarArea";

class DepositInterestRate extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={true} title={'Deposit Interest Rate'}>
                <section className="blog_area single-post-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="blog_details">
                                        <h4>Deposit Interest Rate
                                        </h4>
                                        <table border="1" id="t01">
                                            <tbody>
                                                <tr>
                                                    <th colspan="5">Rate of interest on Fixed Deposits from 29/07/2022
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td><strong>Sr.No</strong></td>
                                                    <td><strong>Duration</strong></td>
                                                    <td>
                                                        <p><strong>General</strong></p>
                                                        <p><strong>Depositor&nbsp; &nbsp; &nbsp;</strong></p>
                                                    </td>
                                                    <td>
                                                        <p><strong>Bulk Depositor</strong></p>
                                                        <p><strong>(15 Lacs &amp; Above)</strong></p>
                                                    </td>
                                                    <td>
                                                        <p><strong>Senior Citizen</strong></p>
                                                        <p><strong>Depositor</strong></p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>15 days to 180 day</td>
                                                    <td>3.50 %</td>
                                                    <td>3.50 %</td>
                                                    <td>3.50 %</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>181 days to 365 Days</td>
                                                    <td>4.00 %</td>
                                                    <td>4.00 %</td>
                                                    <td>4.00 %</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>13 months to 36 months</td>
                                                    <td>5.75 %</td>
                                                    <td>6.25 %</td>
                                                    <td>6.25 %</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>37 months to 60 months</td>
                                                    <td>6.50 %</td>
                                                    <td>7.00 %</td>
                                                    <td>7.00 %</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>61 months to 120 months</td>
                                                    <td>6.00 %</td>
                                                    <td>6.50 %</td>
                                                    <td>6.50 %</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p>Note</p>
                                        <ul>
                                            <li>Senior Citizen gets 0.5% interest higher for the deposit of above 1 year.</li>
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

export default DepositInterestRate;