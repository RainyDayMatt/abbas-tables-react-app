import React, { Component } from "react";
import {Form, Row, Col, FormGroup, Label, Input, FormFeedback, FormText, Button} from "reactstrap";

import * as Helpers from "../../helpers/helpers";

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            submissionEmail: "",
            submissionPassword: "",
            submissionConfirmationPassword: "",
            submissionFirstName: "",
            submissionLastName: "",
            submissionEmailError: "",
            submissionPasswordError: "",
            submissionConfirmationPasswordError: "",
            submissionFirstNameError: "",
            submissionLastNameError: ""
        }
    }
    
    handleSubmissionEmailChange(e) {
        this.setState({
            submissionEmail: e.target.value,
            submissionEmailError: Helpers.checkEmailValidity(e.target.value)
        });
    }

    handleSubmissionPasswordChange(e) {
        this.setState({
            submissionPassword: e.target.value,
            submissionPasswordError: Helpers.checkPasswordValidity(e.target.value)
        });
    }

    handleSubmissionConfirmationPasswordChange(e) {
        this.setState({
            submissionConfirmationPassword: e.target.value,
            submissionConfirmationPasswordError: Helpers.checkConfirmationPasswordValidity(this.state.submissionPassword, e.target.value)
        });
    }

    handleSubmissionFirstNameChange(e) {
        this.setState({
            submissionFirstName: e.target.value,
            submissionFirstNameError: Helpers.checkNameValidity(e.target.value)
        });
    }

    handleSubmissionLastNameChange(e) {
        this.setState({
            submissionLastName: e.target.value,
            submissionLastNameError: Helpers.checkNameValidity(e.target.value)
        });
    }

    handleUserCreationFormSubmit(e) {
        e.preventDefault();
        if (this.state.submissionEmailError === "OK" && this.state.submissionPasswordError === "OK" && this.state.submissionConfirmationPasswordError === "OK" && this.state.submissionFirstNameError === "OK" && this.state.submissionLastNameError === "OK") {
            this.props.createUser({
                email: this.state.submissionEmail,
                password: this.state.submissionPassword,
                confirmationPassword: this.state.submissionConfirmationPassword,
                firstName: this.state.submissionFirstName,
                lastName: this.state.submissionLastName
            });
            this.setState({
                submissionEmail: "",
                submissionEmailError: "",
                submissionPassword: "",
                submissionPasswordError: "",
                submissionConfirmationPassword: "",
                submissionConfirmationPasswordError: "",
                submissionFirstName: "",
                submissionFirstNameError: "",
                submissionLastName: "",
                submissionLastNameError: ""
            });
        } else {
            this.setState({
                submissionEmailError: this.state.submissionEmail.length > 0 ? "Email cannot be blank." : "",
                submissionPasswordError: this.state.submissionPassword.length > 0 ? "Password cannot be blank." : "",
                submissionConfirmationPasswordError: this.state.submissionConfirmationPassword.length > 0 ? "Confirmation password cannot be blank." : "",
                submissionFirstNameError: this.state.submissionFirstName.length > 0 ? "First name cannot be blank." : "",
                submissionLastNameError: this.state.submissionLastName.length > 0 ? "Last name cannot be blank." : ""
            });
        }
    }

    render() {
        let x;
        if (this.props.newUser) {
            x = <pre>{this.props.newUser}</pre>;
        } else {
            x = <pre>{this.state.submissionEmailError}</pre>
        }
        return (
            <Form className={ "userCreationForm" } onSubmit={ (e) => this.handleUserCreationFormSubmit(e) }>
                <h1>
                    New User Sign-Up
                </h1>
                { x }
                <Row form>
                    <Col md={9}>
                        <FormGroup>
                            <Label for={ "newUserEmail" }>Email</Label>
                            <Input valid={ this.state.submissionEmailError === "OK" } name={ "newUserEmail" } id={ "newUserEmail" } placeholder={ "Please enter your email" } onChange={ (e) => this.handleSubmissionEmailChange(e) } />
                            <FormText>{ this.state.submissionEmailError }</FormText>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for={ "newUserPassword" }>Password</Label>
                            <Input valid={ this.state.submissionPasswordError === "OK" } type={ "password" } name={ "newUserPassword" } id={ "newUserPassword" } placeholder={ "Please enter your password" } onChange={ (e) => this.handleSubmissionPasswordChange(e) } />
                            <FormText>{ this.state.submissionPasswordError }</FormText>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for={ "newUserConfirmationPassword" }>Confirmation Password</Label>
                            <Input valid={ this.state.submissionConfirmationPasswordError === "OK" } type={ "password" } name={ "newUserConfirmationPassword" } id={ "newUserConfirmationPassword" } placeholder={ "Please enter your confirmation password" } onChange={ (e) => this.handleSubmissionConfirmationPasswordChange(e) }/>
                            <FormText>{ this.state.submissionConfirmationPasswordError }</FormText>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for={ "newUserFirstName" }>First Name</Label>
                            <Input valid={ this.state.submissionFirstNameError === "OK" } name={ "newUserFirstName" } id={ "newUserFirstName" } placeholder={ "Please enter your first name" } onChange={ (e) => this.handleSubmissionFirstNameChange(e) } />
                            <FormText>{ this.state.submissionFirstNameError }</FormText>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for={ "newUserLastName" }>Last Name</Label>
                            <Input valid={ this.state.submissionLastNameError === "OK" } name={ "newUserLastName" } id={ "newUserLastName" } placeholder={ "Please enter your last name" } onChange={ (e) => this.handleSubmissionLastNameChange(e) } />
                            <FormText>{ this.state.submissionLastNameError }</FormText>
                        </FormGroup>
                    </Col>
                </Row>
                <Button color={ "primary" }>
                    Submit
                </Button>
            </Form>
        );
    }
}

export default SignUp;
