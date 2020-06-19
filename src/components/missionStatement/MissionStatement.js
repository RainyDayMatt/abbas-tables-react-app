import React, { Component } from "react";

class MissionStatement extends Component {
    componentDidMount() {
        this.props.fetchProperty("missionStatement");
        this.props.fetchProperty("whyWeServe");
    }

    render() {
        return (
            <div>
                <h3>Mission Statement</h3>
                <h5>
                    { this.props.missionStatementProperties.missionStatement }
                </h5>
                <h3>Why We Serve</h3>
                <h5>
                    { this.props.missionStatementProperties.whyWeServe }
                </h5>
            </div>
        );
    }
}

export default MissionStatement;
