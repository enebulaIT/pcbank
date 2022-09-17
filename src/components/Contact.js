import React, {Component} from "react";
import Section from "./layouts/Section";

class Contact extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={true} title={'Contact'}>
                {/* contact page conten area start */}
                <div className="contact-page-content-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-contact-info-box">
                                    <div className="icon">
                                        <i className="fa fa-map-marker" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Address:</h4>
                                        <span className="details"> "Blue Diamond",<br/> 9-Ramakrishna nagar,<br/> Swami vivekanand Road,<br/>Rajkot-360001</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-contact-info-box">
                                    <div className="icon">
                                        <i className="fa fa-phone" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Phone</h4>
                                        <span className="details"><a href="tel:02812467857">(0281) 2467857/89</a></span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-contact-info-box">
                                    <div className="icon">
                                        <i className="fa fa-envelope" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Email Address</h4>
                                        <span className="details"><a href="mailto:admin@pcbank-rajkot.com">admin@pcbank-rajkot.com</a></span>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact-map">
                                    <div className="mapouter">
                                        <div className="gmap_canvas">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14765.14874715052!2d70.820711!3d22.304976!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5ac5cfd5a3664269!2sshree%20parshwanath!5e0!3m2!1sen!2sin!4v1662656890806!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* contact page conten area end */}

                {/* contact area start */}
                <section className="contact-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact-bottom-inner">
                                    {/* contact bottom inner */}
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <div className="form-content-area">
                                                {/* right content area */}
                                                <h3 className="title text-center">Contact Us</h3>
                                                <div className="contact-form-wrapper">
                                                    <form method="POST" id="contact_form" className="contact-form">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="form-element ">
                                                                    <input type="text" id="name" name="name" placeholder="Name" className="input-field borderd" />
                                                                </div>
                                                                <div className="form-element ">
                                                                    <input type="email" id="email" name="email" placeholder="Email" className="input-field borderd" />
                                                                </div>

                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-element ">
                                                                    <input type="text" id="company" name="company" placeholder="Company" className="input-field borderd" />
                                                                </div>
                                                                <div className="form-element ">
                                                                    <input type="tel" id="phone" name="phone" placeholder="Phone Number" className="input-field borderd" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <textarea rows="10" cols="30" id="message" name="message" placeholder="How can we help?" className="input-field borderd textarea" />
                                                            </div>
                                                        </div>
                                                        <input type="submit" className="btn btn-blue" value="Send a Message" />
                                                    </form>
                                                </div>
                                            </div>
                                            {/* //.right content area */}
                                        </div>
                                    </div>
                                </div>
                                {/* contact bottom inner */}
                            </div>
                            {/* //.col-lg-12 */}
                        </div>
                    </div>
                </section>
                {/* contact area end */}
            </Section>
        );
    }
}

export default Contact;