import React, { Component } from "react";

import { Button } from "reactstrap";

class InfoBar extends Component {
    componentDidMount() {
        const date = new Date();
        this.props.fetchProperty("volunteerLink");
        this.props.fetchProperty("donateLink");
        this.props.fetchMonthMealSummary(date.getFullYear(), date.getMonth() + 1);
        this.props.fetchYearMealSummary(date.getFullYear());
    }

    render() {
        return (
            <div className={ "d-flex px-3" }>
                Proudly serving Ada's hungry. Meals served this month: { this.props.monthSummary.totalMeals }. Meals served this year: { this.props.yearSummary.totalMeals }.
                <div className={ "ml-auto" }>
                    <Button className={ "ml-2" } color={ "primary" } href={ this.props.links.donateLink }>
                        Donate Now
                    </Button>
                    <Button className={ "ml-2" } color={ "primary" } href={ this.props.links.volunteerLink }>
                        Sign Up to Volunteer
                    </Button>
                </div>
            </div>
        );
    }
}

export default InfoBar;
