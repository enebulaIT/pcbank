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
                                        <li><Link className="initiate-scripts" to={'/govt-tax-collection'}>Govt TAX Collection</Link></li>
                                        <li><Link className="initiate-scripts" to={'/pmjjby-pmsby'}>PMJJBY/PMSBY</Link></li>
                                        <li><Link className="initiate-scripts" to={'/nach-ach'}>NACH/ACH/ABPS</Link></li>
                                        <li><Link className="initiate-scripts" to={'/core-banking'}>Core Banking</Link></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><Link className="initiate-scripts" to={'/services'}>Deposit</Link>
                                    <ul className="sub-menu">
                                        <li><Link className="initiate-scripts" to={'/saving-account'}>Saving Account</Link></li>
                                        <li><Link className="initiate-scripts" to={'/current-account'}>Current Account</Link></li>
                                        <li><Link className="initiate-scripts" to={'/fixed-deposit'}>Fixed Deposit</Link></li>
                                        <li><Link className="initiate-scripts" to={'/reccuring-deposit'}>Reccuring Deposit</Link></li>
                                        <li><Link className="initiate-scripts" to={'/deposit-interest'}>Deposit Interest Rate</Link></li>
                                        <li><a class="initiate-scripts" href="https://phoenix-it.co.in/depositcalculator/" target="_blank">Deposit Calculator</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><Link className="initiate-scripts" to={'/services'}>Loan</Link>
                                    <ul className="sub-menu">
                                        <li><Link className="initiate-scripts" to={'/housing-loan'}>Housing Loan</Link></li>
                                        <li><Link className="initiate-scripts" to={'/property-loan'}>Mortgage Loan (Property)</Link></li>
                                        <li><Link className="initiate-scripts" to={'/machinery-loan'}>Machinery Loan</Link></li>
                                        <li><Link className="initiate-scripts" to={'/vehicle-loan'}>Vehicle Loan</Link></li>
                                        {/* <li><Link className="initiate-scripts" to={'/education-loan'}>Higher Education Loan</Link></li> */}
                                        {/* <li><Link className="initiate-scripts" to={'/fd-loan'}>Loan/OD Against Fixed Deposit</Link></li> */}
                                        {/* <li><Link className="initiate-scripts" to={'/nsc-kvp-loan'}>Loan/OD Against N.S.C/K.V.P</Link></li> */}
                                        {/* <li><Link className="initiate-scripts" to={'/lic-loan'}>Loan/OD Against L.I.C Ploicy</Link></li> */}
                                        <li><Link className="initiate-scripts" to={'/cash-credit'}>Cash Credit</Link></li>
                                        {/* <li><Link className="initiate-scripts" to={'/security-credit'}>Security Overdraft</Link></li> */}
                                        <li><Link className="initiate-scripts" to={'/intereest-rate'}>Loan Interest Rate</Link></li>
                                        <li><a class="initiate-scripts" href="https://phoenix-it.co.in/emicalculator/" target="_blank">EMI Calculator</a></li>
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