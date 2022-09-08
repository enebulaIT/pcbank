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
                                        <h4>Loan Interest Rate</h4>
                                        <p>&nbsp;</p>
                                        <p><strong>Interest rate on Advances Effective From Dt:01-08-2021</strong></p>
                                        <p>&nbsp;</p>
                                        <table border="" class="fnt-13" id="t01">
                                            <tbody>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>Type of Advances</th>
                                                    <th>Interest Rate</th>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><strong>Building Loan</strong></td>
                                                    <td>&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td>For House Purchase (Women)</td>
                                                    <td>07.25% to 08.25%</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td>For House Purchase (Other)</td>
                                                    <td>07.50% to 08.50%</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td>For Commercial Purchase</td>
                                                    <td>10.00% to 11.00%</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td><strong>Cash Credit</strong></td>
                                                    <td>10.50% to 12.00%</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td><strong>Secured Overdraft</strong></td>
                                                    <td>11.00% to 12.50%</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td><strong>Machinery Loan</strong></td>
                                                    <td>&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td>New Purchase</td>
                                                    <td>09.50% to 10.50%</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td>Old Purchase</td>
                                                    <td>11.90%</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td><strong>Furniture Term Loan</strong></td>
                                                    <td>10.50% to 11.50%</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td><strong>Industrial Term Loan</strong></td>
                                                    <td>10.50% to 11.50%</td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td><strong>Business Loan</strong></td>
                                                    <td>10.50% to 11.50%</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td><strong>Property Loan (Mortgage Loan)</strong></td>
                                                    <td>&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td>Resident&nbsp; Property</td>
                                                    <td>10.50% to 11.50%</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td>Commercial Property (BL)</td>
                                                    <td>10.75% to 11.75%</td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td><strong>Consumption / Personal Loan (CS)</strong></td>
                                                    <td>15.00%</td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td><strong>Higher Education Loan</strong></td>
                                                    <td>11.00%</td>
                                                </tr>
                                                <tr>
                                                    <td>11</td>
                                                    <td><strong>Vehicles Loan</strong></td>
                                                    <td>&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td>For Individual (New Vehicle)</td>
                                                    <td>8.50% to 10.00%</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td>For Individual (Old Car Loan) (Up to 5 year old)</td>
                                                    <td>11.00%</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td>For Commercial Vehicle</td>
                                                    <td>12.00%</td>
                                                </tr>
                                                <tr>
                                                    <td>12</td>
                                                    <td><strong>Builder Finance</strong></td>
                                                    <td>12.00% to 13.50%</td>
                                                </tr>
                                                <tr>
                                                    <td>13</td>
                                                    <td><strong>N.S.C. / K.V.P. Loan</strong></td>
                                                    <td>8.50%</td>
                                                </tr>
                                                <tr>
                                                    <td>14</td>
                                                    <td><strong>L.I.C. Policy Against Loan/OD</strong></td>
                                                    <td>8.50%</td>
                                                </tr>
                                                <tr>
                                                    <td>15</td>
                                                    <td><strong>Loan Ag. F.D.&nbsp; / F.D. Ag. O.D.</strong></td>
                                                    <td>&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td>Individual</td>
                                                    <td>FD RATE + 1</td>
                                                </tr>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td>Third Party</td>
                                                    <td>FD RATE + 2</td>
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