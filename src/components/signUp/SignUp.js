import React, { Component } from "react";
import {
    Button,
    Col,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
    Row
} from "reactstrap";

import * as Helpers from "../../helpers/helpers";

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            submissionEmail: "",
            submissionPassword: "",
            submissionConfirmationPassword: "",
            submissionFirstName: "",
            submissionLastName: "",
            submissionEmailError: "Enter an email address in standard format.",
            submissionPasswordError: "Enter an alphanumeric password between six and 20 characters.",
            submissionConfirmationPasswordError: "Enter the password again.",
            submissionFirstNameError: "Enter an alphabetic first name between two and 20 characters.",
            submissionLastNameError: "Enter an alphabetic last name between two and 20 characters."
        };
        this.state = this.initialState;
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
        if (
            this.state.submissionEmailError === "OK" &&
            this.state.submissionPasswordError === "OK" &&
            this.state.submissionConfirmationPasswordError === "OK" &&
            this.state.submissionFirstNameError === "OK" &&
            this.state.submissionLastNameError === "OK"
        ) {
            this.props.createUser({
                email: this.state.submissionEmail,
                password: this.state.submissionPassword,
                confirmationPassword: this.state.submissionConfirmationPassword,
                firstName: this.state.submissionFirstName,
                lastName: this.state.submissionLastName
            });
            this.setState(this.initialState);
        } else {
            this.setState({
                submissionEmailError: this.state.submissionEmail.length <= 0 ? "Email cannot be blank." : this.state.submissionEmailError,
                submissionPasswordError: this.state.submissionPassword.length <= 0 ? "Password cannot be blank." : this.state.submissionPasswordError,
                submissionConfirmationPasswordError: this.state.submissionConfirmationPassword.length <= 0 ? "Confirmation password cannot be blank." : this.state.submissionConfirmationPasswordError,
                submissionFirstNameError: this.state.submissionFirstName.length <= 0 ? "First name cannot be blank." : this.state.submissionFirstNameError,
                submissionLastNameError: this.state.submissionLastName.length <= 0 ? "Last name cannot be blank." : this.state.submissionLastNameError
            });
        }
    }

    render() {
        let message = "Fill out the form to sign up!";
        if (this.props.err) {
            message = `Error creating user: ${ (this.props.err) }`;
        } else if (this.props.newUser) {
            message = `Hello, ${ this.props.newUser.firstName }! User creation successful.`;
        }
        return (
            <Form className={ "userCreationForm" } onSubmit={ (e) => this.handleUserCreationFormSubmit(e) }>
                <h1>New User Sign-Up</h1>
                <h3 className={ "message" }>{ message }</h3>
                <Row form>
                    <Col md={9}>
                        <FormGroup>
                            <Label for={ "newUserEmail" }>Email</Label>
                            <Input value={ this.state.submissionEmail } onChange={ (e) => this.handleSubmissionEmailChange(e) } valid={ this.state.submissionEmailError === "OK" } name={ "newUserEmail" } id={ "newUserEmail" } placeholder={ "Please enter your email" } className={ "newUserEmail" } />
                            <FormText className={ "newUserEmailText" } >{ this.state.submissionEmailError }</FormText>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                                <Label for={ "newUserPassword" }>Password</Label>
                            <Input value={ this.state.submissionPassword } onChange={ (e) => this.handleSubmissionPasswordChange(e) } valid={ this.state.submissionPasswordError === "OK" } type={ "password" } name={ "newUserPassword" } id={ "newUserPassword" } placeholder={ "Please enter your password" } className={ "newUserPassword" } />
                            <FormText className={ "newUserPasswordText" } >{ this.state.submissionPasswordError }</FormText>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for={ "newUserConfirmationPassword" }>Confirmation Password</Label>
                            <Input value={ this.state.submissionConfirmationPassword } onChange={ (e) => this.handleSubmissionConfirmationPasswordChange(e) } valid={ this.state.submissionConfirmationPasswordError === "OK" } type={ "password" } name={ "newUserConfirmationPassword" } id={ "newUserConfirmationPassword" } placeholder={ "Please enter your confirmation password" } className={ "newUserConfirmationPassword" } />
                            <FormText className={ "newUserConfirmationPasswordText" } >{ this.state.submissionConfirmationPasswordError }</FormText>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for={ "newUserFirstName" }>First Name</Label>
                            <Input value={ this.state.submissionFirstName } onChange={ (e) => this.handleSubmissionFirstNameChange(e) } valid={ this.state.submissionFirstNameError === "OK" } name={ "newUserFirstName" } id={ "newUserFirstName" } placeholder={ "Please enter your first name" } className={ "newUserFirstName" } />
                            <FormText className={ "newUserFirstNameText" } >{ this.state.submissionFirstNameError }</FormText>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for={ "newUserLastName" }>Last Name</Label>
                            <Input value={ this.state.submissionLastName } onChange={ (e) => this.handleSubmissionLastNameChange(e) } valid={ this.state.submissionLastNameError === "OK" } name={ "newUserLastName" } id={ "newUserLastName" } placeholder={ "Please enter your last name" } className={ "newUserLastName" } />
                            <FormText className={ "newUserLastNameText" } >{ this.state.submissionLastNameError }</FormText>
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
