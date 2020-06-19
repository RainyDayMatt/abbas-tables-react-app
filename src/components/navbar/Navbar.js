import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
    Button,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    FormGroup,
    Input,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    UncontrolledDropdown
} from "reactstrap";

class AuthNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
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
                <Form className={ `userSignInForm mt-2 mt-md-0` } inline onSubmit={ (e) => this.handleUserSignInFormSubmit(e) }>
                    <FormGroup className={ `mr-5 mr-md-2` }>
                        <Input className={ "userSignInEmail" } onChange={ (e) => this.handleSubmissionEmailChange(e) } type={ "email" } name={ "email" } placeholder={ "Email" } value={ this.state.submissionEmail } />
                    </FormGroup>
                    <FormGroup className={ `mr-5 mr-md-2` }>
                        <Input className={ "userSignInPassword" } onChange={ (e) => this.handleSubmissionPasswordChange(e) } type={ "password" } name={ "password" } placeholder={ "Password" } value={ this.state.submissionPassword } />
                    </FormGroup>
                    <Button className={ `mr-4 mr-md-2` } color={ "primary" }>
                        Sign In
                    </Button>
                    <Link to={ "/signUp" }>
                        Sign Up
                    </Link>
                </Form>;
        } else {
            userOptions =
                <Form className={ `userSignOutForm mt-2 mt-md-0` } inline onSubmit={ (e) => this.handleUserSignOutFormSubmit(e) }>
                    <div className={ `mr-4 mr-md-2` }>Hi, { this.props.user.firstName }!</div>
                    <Button color={ "primary" }>
                        Sign Out
                    </Button>
                </Form>;
        }
        return (
            <Navbar light expand={ "lg" }>
                <NavbarBrand>Abba's Tables</NavbarBrand>
                <NavbarToggler onClick={ () => this.setState({ isOpen: !this.state.isOpen }) } />
                <Collapse navbar isOpen={ this.state.isOpen }>
                    <Nav className={ "mr-auto" } navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav>
                                About Us
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>
                                    <Link to={ "/missionStatement" }>Mission Statement</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to={ "/" }>Meet the Staff</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to={ "/" }>Media</Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav>
                                News
                               </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>
                                    <Link to={ "/" }>General News</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to={ "/" }>Alerts and Notices</Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav>
                                Donate
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>
                                    <Link to={ "/" }>Money</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to={ "/" }>Food Donation Guidelines</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to={ "/" }>Volunteer</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to={ "/" }>Other</Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav>
                                Contact Us
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>
                                    <Link to={ "/" }>Message Us</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to={ "/" }>Follow Us</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to={ "/" }>Other Contact Info</Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    { userOptions }
                </Collapse>
            </Navbar>
        );
    }
}

export default AuthNavbar;
