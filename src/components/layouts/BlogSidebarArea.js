import React, { Component } from "react";
import { Link } from "react-router-dom";

class BlogSidebarArea extends Component {
    render() {
        return (
            <div className="blog_right_sidebar">

                <aside className="single_sidebar_widget post_category_widget">
                    <h4 className="widget_title">Services</h4>
                    <ul className="list cat-list">
                        <li>
                            <Link to={'/mobile-banking'} className="d-flex initiate-scripts">
                                <p>Mobile Banking</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/rtgs'} className="d-flex initiate-scripts">
                                <p>RTGS/NEFT</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/imps'} className="d-flex initiate-scripts">
                                <p>IMPS</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/sms'} className="d-flex initiate-scripts">
                                <p>SMS Alert</p>
                            </Link>
                        </li>
                    </ul>
                </aside>




                <aside className="single_sidebar_widget newsletter_widget marquee-container">
                    <h4 className="widget_title">Latest News</h4>

                    <marquee direction="up" behavior="scroll" onmouseover="this.stop();" onmouseout="this.start();" class="my" scrollamount="3">

                        <div class="newslist">
                            <i class=""></i>&nbsp;
                            <p> For IMPS / RTGS / NEFT inward remittance, please use IFS Code 'IBKL01642SD' </p><br />
                        </div> <div class="newslist">
                            <i class=""></i>&nbsp;
                            <p> We are happy to announce the release of our Mobile Banking App. Register and continue to avail seamless banking services on mobile </p><br />
                        </div> <div class="newslist">
                            <i class=""></i>&nbsp;
                            <p> Dear Customer, we would like to inform you that as per the latest amendment to TDS u/s 194N, Banks are required to deduct TDS @ 2% &amp; 5% on cumulative cash withdrawals in a financial year exceeding Rs. 20 lakhs &amp; Rs. 1 Crore, respectively. This is effective July 1, 2020 and applicable if the IT returns for previous 3 years have not been filed. Request you to submit the declaration form along with copy of ITR acknowledgment to your nearest branch or send the declaration form along with copy of ITR acknowledgment from your registered email address to accounts@dharatibank.com. Please write to us at accounts@dharatibank.com for any queries in this regard and ignore this message if you are exempted from TDS. </p><br />
                        </div> 	         


                    </marquee>

                </aside>
            </div>
        );
    }
}

export default BlogSidebarArea;