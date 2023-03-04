import React, {Component} from "react";
import Section from "./layouts/Section";
import Banner from "./layouts/Banner";
import MoneyOption from "./layouts/MoneyOption";
import AboutArea from "./layouts/AboutArea";
import FunFactArea from "./layouts/FunFactArea";

class HomeOne extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={false}>
                <Banner design={'home_1'} />
                <MoneyOption design={'home_1'} />
                {/* <FunFactArea /> */}
                {/* <AboutArea design={'home_1'} /> */}
            </Section>
        );
    }
}

export default HomeOne;