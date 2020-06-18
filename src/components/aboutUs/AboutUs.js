import React, { Component } from "react";

class AboutUs extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProperty("missionStatement");
        this.props.fetchProperty("whyWeServe");
    }

    render() {
        return (
            <div className={ "px-5" }>
                <h3 className={ "my-3" }>Mission Statement</h3>
                <h5>
                    { this.props.aboutUsProperties.missionStatement }
                </h5>
                <h3 className={ "my-3" }>Why We Serve</h3>
                <h5>
                    { this.props.aboutUsProperties.whyWeServe }
                </h5>
            </div>
        );
    }
}

export default AboutUs;
