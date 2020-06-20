import React, { Component } from "react";

class MeetTheStaff extends Component {
    componentDidMount() {
        this.props.fetchProperty("mtsLeAnnBio");
        this.props.fetchProperty("mtsMaryBio");
        this.props.fetchProperty("mtsSuzanneBio");
        this.props.fetchProperty("mtsLisaBio");
        this.props.fetchProperty("mtsMattBio");
        this.props.fetchProperty("mtsGlendaBio");
        this.props.fetchProperty("mtsLacyBio");
        this.props.fetchProperty("mtsRhiannanBio");
    }

    render() {
        return (
            <div>
                <h1>
                    Meet The Staff
                </h1>
                <h2>
                    Executive Committee
                </h2>
                <h3>LeAnn Gourley</h3>
                <h4>Co-Director of Operations, President</h4>
                <h5>{ this.props.meetTheStaffProperties.mtsLeAnnBio }</h5>
                <h3>Mary Huckeby</h3>
                <h4>Co-Director of Operations, Treasurer</h4>
                <h5>{ this.props.meetTheStaffProperties.mtsMaryBio }</h5>
                <h3>Suzanne Morris</h3>
                <h4>Vice President</h4>
                <h5>{ this.props.meetTheStaffProperties.mtsSuzanneBio }</h5>
                <h3>Lisa Shores</h3>
                <h4>Secretary</h4>
                <h5>{ this.props.meetTheStaffProperties.mtsLisaBio }</h5>
                <h3>Matt Harp</h3>
                <h4>Tech Lead</h4>
                <h5>{ this.props.meetTheStaffProperties.mtsMattBio }</h5>
                <h3>Glenda West</h3>
                <h4>Committee Member</h4>
                <h5>{ this.props.meetTheStaffProperties.mtsGlendaBio }</h5>
                <h3>Lacy Grammer</h3>
                <h4>Committee Member</h4>
                <h5>{ this.props.meetTheStaffProperties.mtsLacyBio }</h5>
                <h3>Rhiannan DeMoss</h3>
                <h4>Committee Member</h4>
                <h5>{ this.props.meetTheStaffProperties.mtsRhiannanBio }</h5>
            </div>
        );
    }
}

export default MeetTheStaff;
