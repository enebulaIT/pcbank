import React, { Component } from "react";
import {Router, Route, Switch, HashRouter} from "react-router-dom";
import history from "./History";
import HomeOne from "./components/HomeOne";
import HomeTwo from "./components/HomeTwo";
import About from "./components/About";
import Services from "./components/Services";
import Blog from "./components/Blog";
import BlogSingle from "./components/BlogSingle";
import Contact from "./components/Contact";
import MobileBanking from "./components/Services/MobileBanking";
import RTGS from "./components/Services/Rtgs";
import IMPS from "./components/Services/Imps";
import SMSAlert from "./components/Services/SMSAlert";

import SavingAccount from "./components/Deposit/SavingAccount";
import CurrentAccount from "./components/Deposit/CurrentAccount";
import FixedDeposit from "./components/Deposit/FixedDeposit";
import ReccuringDeposit from "./components/Deposit/ReccuringDeposit";
import DepositInterestRate from "./components/Deposit/DepositInterestRate";

import HousingLoan from "./components/Loan/HousingLoan";
import PropertyLoan from "./components/Loan/PropertyLoan";
import MachineryLoan from "./components/Loan/MachineryLoan";
import VehicleLoan from "./components/Loan/VehicleLoan";
import HigherEducationLoan from "./components/Loan/HigherEducationLoan";
import CashCredit from "./components/Loan/CashCredit";
import LoanInterestRate from "./components/Loan/LoanInterestRate";
import GovtTaxCollection from "./components/Services/GovtTaxCollection";
import PMJJBY from "./components/Services/PMJJBY";
import NACH from "./components/Services/NACH";
import CoreBanking from "./components/Services/CoreBanking";

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <HashRouter basename="/">
                    <Switch>
                        <Route exact path={'/'} render={(props) => (<HomeOne {...props} />)} />
                        <Route exact path={'/home-one'} render={(props) => (<HomeOne {...props} />)} />
                        <Route exact path={'/home-two'} render={(props) => (<HomeTwo {...props} />)} />
                        {/* <Route exact path={'/loan'} render={(props) => (<Loan {...props} />)} /> */}
                        <Route exact path={'/about'} render={(props) => (<About {...props} />)} />
                        <Route exact path={'/services'} render={(props) => (<Services {...props} />)} />
                        {/* <Route exact path={'/apply-loan'} render={(props) => (<ApplyLoan {...props} />)} /> */}
                        <Route exact path={'/blog'} render={(props) => (<Blog {...props} />)} />
                        <Route exact path={'/blog-single'} render={(props) => (<BlogSingle {...props} />)} />
                        <Route exact path={'/contact'} render={(props) => (<Contact {...props} />)} />
                        <Route exact path={'/mobile-banking'} render={(props) => (<MobileBanking {...props} />)} />
                        <Route exact path={'/rtgs'} render={(props) => (<RTGS {...props} />)} />
                        <Route exact path={'/imps'} render={(props) => (<IMPS {...props} />)} />
                        <Route exact path={'/sms'} render={(props) => (<SMSAlert {...props} />)} />

                        <Route exact path={'/saving-account'} render={(props) => (<SavingAccount {...props} />)} />
                        <Route exact path={'/current-account'} render={(props) => (<CurrentAccount {...props} />)} />
                        <Route exact path={'/fixed-deposit'} render={(props) => (<FixedDeposit {...props} />)} />
                        <Route exact path={'/reccuring-deposit'} render={(props) => (<ReccuringDeposit {...props} />)} />
                        <Route exact path={'/deposit-interest'} render={(props) => (<DepositInterestRate {...props} />)} />
                        <Route exact path={'/deposit-calculator'} render={(props) => (<SMSAlert {...props} />)} />
                        <Route exact path={'/govt-tax-collection'} render={(props) => (<GovtTaxCollection {...props} />)} />
                        <Route exact path={'/pmjjby-pmsby'} render={(props) => (<PMJJBY {...props} />)} />
                        <Route exact path={'/nach-ach'} render={(props) => (<NACH {...props} />)} />
                        <Route exact path={'/core-banking'} render={(props) => (<CoreBanking {...props} />)} />
                        
                        <Route exact path={'/housing-loan'} render={(props) => (<HousingLoan {...props} />)} />
                        <Route exact path={'/property-loan'} render={(props) => (<PropertyLoan {...props} />)} />
                        <Route exact path={'/machinery-loan'} render={(props) => (<MachineryLoan {...props} />)} />
                        <Route exact path={'/vehicle-loan'} render={(props) => (<VehicleLoan {...props} />)} />
                        {/* <Route exact path={'/education-loan'} render={(props) => (<HigherEducationLoan {...props} />)} /> */}
                        {/* <Route exact path={'/fd-loan'} render={(props) => (<SMSAlert {...props} />)} />
                        <Route exact path={'/nsc-kvp-loan'} render={(props) => (<SMSAlert {...props} />)} />
                        <Route exact path={'/lic-loan'} render={(props) => (<SMSAlert {...props} />)} /> */}
                        <Route exact path={'/cash-credit'} render={(props) => (<CashCredit {...props} />)} />
                        {/* <Route exact path={'/security-credit'} render={(props) => (<SMSAlert {...props} />)} /> */}
                        <Route exact path={'/intereest-rate'} render={(props) => (<LoanInterestRate {...props} />)} />
                        <Route exact path={'/emi-calculator'} render={(props) => (<SMSAlert {...props} />)} />

                    </Switch>
                </HashRouter>
            </Router>
        )
    }
}

export default Routes;