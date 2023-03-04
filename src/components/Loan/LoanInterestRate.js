import React, { Component } from "react";
import Section from "../layouts/Section";
import { Link } from "react-router-dom";
import BlogSidebarArea from "../layouts/BlogSidebarArea";

class LoanInterestRate extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={true} title={'Loan Interest Rate'}>
                <section className="blog_area single-post-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="blog_details">
                                        <h4>Loan Interest Rate (As per slab)</h4>
                                        <p><strong>Interest rate on Advances Effective From Dt:01-01-2023</strong></p>
                                        <p>&nbsp;</p>
                                        <table border="" id = "interestrate">
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>Interest Rate</th>
                                                    <th>Type of Advances</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>8.50%</td>
                                                    <td><strong>Housing Loan</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>9.50%</td>
                                                    <td><strong>Secured OD</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>9.50%</td>
                                                    <td><strong>Cash Credit</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>9.50%</td>
                                                    <td><strong>Machinery Loan</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>9.00%</td>
                                                    <td><strong>Term Loan</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>9.50%</td>
                                                    <td><strong>Mortgage Loan</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>11.00%</td>
                                                    <td><strong>4 wheeler Loan(Old)</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>9.00%</td>
                                                    <td><strong>4 wheeler Loan(New)</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>11.50%</td>
                                                    <td><strong>2 wheeler Loan</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>10.50%</td>
                                                    <td><strong>Consumer Loan</strong></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p>&nbsp;</p>
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

export default LoanInterestRate;