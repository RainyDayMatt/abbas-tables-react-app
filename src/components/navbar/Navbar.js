import React, { Component } from "react";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

class AuthNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            submissionEmail: "",
            submissionEmailError: "",
            submissionPassword: "",
            submissionPasswordError: ""
        };
    }

    handleSubmissionEmailChange(e) {
        this.setState({ submissionEmail: e.target.value });
    }

    handleSubmissionPasswordChange(e) {
        this.setState({ submissionPassword: e.target.value });
    }

    handleUserSignInFormSubmit(e) {
        e.preventDefault();
        if (this.state.submissionEmail.length > 0 && this.state.submissionPassword.length > 0) {
            this.props.fetchUser({
                email: this.state.submissionEmail,
                password: this.state.submissionPassword
            });
            this.setState({
                submissionEmail: "",
                submissionEmailError: "",
                submissionPassword: "",
                submissionPasswordError: ""
            });
        } else {
            this.setState({
                submissionEmailError: this.state.submissionEmail.length > 0 ? "Email cannot be blank." : "",
                submissionPasswordError: this.state.submissionPassword.length > 0 ? "Password cannot be blank." : ""
            });
        }
    }

    handleUserSignOutFormSubmit(e) {
        e.preventDefault();
        this.props.submitUserSignOutForm();
    }

    render() {
        let userOptions;
        if (!this.props.user) {
            userOptions =
                <Form className={ "userSignInForm" } inline onSubmit={ (e) => this.handleUserSignInFormSubmit(e) } >
                    <Form.Group className={ `mr-2 userSignInEmail` } controlId={ "email" } >
                        <Form.Control onChange={ (e) => this.handleSubmissionEmailChange(e) } placeholder={ "Email" } type={ "email" } value={ this.state.submissionEmail } />
                    </Form.Group>
                    <Form.Group className={ `mr-2 userSignInPassword` } controlId={ "password" } >
                        <Form.Control onChange={ (e) => this.handleSubmissionPasswordChange(e) } placeholder={ "Password" } type={ "password" } value={ this.state.submissionPassword } />
                    </Form.Group>
                    <Button className={ "mr-2" } type={ "submit" } variant={ "primary" } >
                        Sign In
                    </Button>
                </Form>;
        } else {
            userOptions =
                <Form className={ "userSignOutForm" } inline onSubmit={ (e) => this.handleUserSignOutFormSubmit(e) } >
                    <div className={ "mr-3" }>Hi, { this.props.user.firstName }!</div>
                    <Button type={ "submit" } variant={ "primary" } >
                        Sign Out
                    </Button>
                </Form>;
        }
        return (
            <Navbar className={ "p-3" } expand={ "lg" } style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }} >
                <Navbar.Brand>Abba's Tables</Navbar.Brand>
                <Navbar.Toggle aria-controls={ "basic-navbar-nav" } />
                <Navbar.Collapse id={ "basic-navbar-nav" }>
                    <Nav>
                        <NavDropdown className={ "ml-3" } title={ "About Us" }>
                            <NavDropdown.Item>Mission Statement</NavDropdown.Item>
                            <NavDropdown.Item>Meet The Staff</NavDropdown.Item>
                            <NavDropdown.Item>Media</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className={ "ml-3" } title={ "News" }>
                            <NavDropdown.Item>General News</NavDropdown.Item>
                            <NavDropdown.Item>Alerts and Notices</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className={ "ml-3" } title={ "Donate" }>
                            <NavDropdown.Item>Money</NavDropdown.Item>
                            <NavDropdown.Item>Food Donation Guidelines</NavDropdown.Item>
                            <NavDropdown.Item>Volunteer</NavDropdown.Item>
                            <NavDropdown.Item>Other</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className={ "ml-3" } title={ "Contact Us" }>
                            <NavDropdown.Item>Message Us</NavDropdown.Item>
                            <NavDropdown.Item>Follow Us</NavDropdown.Item>
                            <NavDropdown.Item>Other Contact Info</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                { userOptions }
            </Navbar>
        );
    }
}

export default AuthNavbar;
