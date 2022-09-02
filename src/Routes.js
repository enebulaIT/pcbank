import React, { Component } from "react";
import {Router, Route, Switch, HashRouter} from "react-router-dom";
import history from "./History";
import HomeOne from "./components/HomeOne";
import HomeTwo from "./components/HomeTwo";
import Loan from "./components/Loan";
import About from "./components/About";
import Services from "./components/Services";
import ApplyLoan from "./components/ApplyLoan";
import Blog from "./components/Blog";
import BlogSingle from "./components/BlogSingle";
import Contact from "./components/Contact";
import MobileBanking from "./components/Services/MobileBanking";
import RTGS from "./components/Services/Rtgs";
import IMPS from "./components/Services/Imps";
import SMSAlert from "./components/Services/SMSAlert";

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

                    </Switch>
                </HashRouter>
            </Router>
        )
    }
}

export default Routes;