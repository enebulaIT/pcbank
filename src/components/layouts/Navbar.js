import React, {Component} from "react";
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-area bg-one">
                <nav className="navbar navbar-area navbar-expand-lg">
                    <div className="container nav-container">
                        <div className="responsive-mobile-menu">
                            <button className="menu toggle-btn d-block d-lg-none" data-target="#banlank_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-left" />
                                <span className="icon-right" />
                            </button>
                        </div>
                        <div className="logo d-block d-lg-none">
                            <Link className="initiate-scripts" to={'/'}><img src={process.env.PUBLIC_URL + '/assets/img/logo.png'} alt="img" /></Link>
                        </div>
                        <div className="nav-right-part nav-right-part-mobile">
                            <Link className="btn btn-round" to={'/signup'}>Open AN Account</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="banlank_main_menu">
                            <ul className="navbar-nav menu-open">
                                <li><Link className="initiate-scripts" to={'/'}>Home</Link></li>
                                <li><Link className="initiate-scripts" to={'/about'}>About Us</Link></li>
                                <li className="menu-item-has-children"><Link className="initiate-scripts" to={'/services'}>Services</Link>
                                    <ul className="sub-menu">
                                        <li><Link className="initiate-scripts" to={'/mobile-banking'}>Mobile Banking</Link></li>
                                        <li><Link className="initiate-scripts" to={'/rtgs'}>RTGS/NEFT</Link></li>
                                        <li><Link className="initiate-scripts" to={'/imps'}>IMPS</Link></li>
                                        <li><Link className="initiate-scripts" to={'/sms'}>SMS Alert</Link></li>
                                    </ul>
                                </li>
                                <li><Link className="initiate-scripts" to={'/contact'}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;