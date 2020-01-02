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
            submissionMobilePhone: "",
            submissionHomePhone: "",
            submissionWorkPhone: "",
            submissionOtherPhone: "",
            submissionEmailError: "Required",
            submissionPasswordError: "Required",
            submissionConfirmationPasswordError: "Required",
            submissionFirstNameError: "Required",
            submissionLastNameError: "Required",
            submissionMobilePhoneError: "Required",
            submissionHomePhoneError: "Optional",
            submissionWorkPhoneError: "Optional",
            submissionOtherPhoneError: "Optional",
            submissionPreferredContactMethod: "Email",
            submissionPreferredContactMethodOptions: [ "Email" ]
        };
        this.state = this.initialState;
        this.errors = [
            this.state.submissionEmailError,
            this.state.submissionPasswordError,
            this.state.submissionConfirmationPasswordError,
            this.state.submissionFirstNameError,
            this.state.submissionLastNameError,
            this.state.submissionMobilePhoneError,
            this.state.submissionHomePhoneError,
            this.state.submissionWorkPhoneError,
            this.state.submissionOtherPhoneError
        ];
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

    handleSubmissionMobilePhoneChange(e) {
        this.setState({
            submissionMobilePhone: e.target.value,
            submissionMobilePhoneError: Helpers.checkPhoneNumberValidity(e.target.value, false),
            submissionPreferredContactMethodOptions: Helpers.composeAvailablePreferredContactOptions(e.target.value, "Mobile", this.state.submissionPreferredContactMethodOptions)
        });
    }

    handleSubmissionHomePhoneChange(e) {
        this.setState({
            submissionHomePhone: e.target.value,
            submissionHomePhoneError: Helpers.checkPhoneNumberValidity(e.target.value, true),
            submissionPreferredContactMethodOptions: Helpers.composeAvailablePreferredContactOptions(e.target.value, "Home", this.state.submissionPreferredContactMethodOptions)
        });

    }

    handleSubmissionWorkPhoneChange(e) {
        this.setState({
            submissionWorkPhone: e.target.value,
            submissionWorkPhoneError: Helpers.checkPhoneNumberValidity(e.target.value, true),
            submissionPreferredContactMethodOptions: Helpers.composeAvailablePreferredContactOptions(e.target.value, "Work", this.state.submissionPreferredContactMethodOptions)
        });
    }

    handleSubmissionOtherPhoneChange(e) {
        this.setState({
            submissionOtherPhone: e.target.value,
            submissionOtherPhoneError: Helpers.checkPhoneNumberValidity(e.target.value, true),
            submissionPreferredContactMethodOptions: Helpers.composeAvailablePreferredContactOptions(e.target.value, "Other", this.state.submissionPreferredContactMethodOptions)
        });
    }

    handleUserCreationFormSubmit(e) {
        e.preventDefault();
        if (this.isFormReadyToSubmit()) {
            this.props.createUser({
                email: this.state.submissionEmail,
                password: this.state.submissionPassword,
                confirmationPassword: this.state.submissionConfirmationPassword,
                firstName: this.state.submissionFirstName,
                lastName: this.state.submissionLastName,
                mobilePhone: this.state.submissionMobilePhone,
                homePhone: this.state.submissionHomePhone,
                workPhone: this.state.submissionWorkPhone,
                otherPhone: this.state.submissionOtherPhone,
                preferredContactMethod: this.state.submissionPreferredContactMethod
            });
            this.setState(this.initialState);
        } else {
            this.setState({
                submissionEmailError: this.state.submissionEmail.length <= 0 ? "Email cannot be blank." : this.state.submissionEmailError,
                submissionPasswordError: this.state.submissionPassword.length <= 0 ? "Password cannot be blank." : this.state.submissionPasswordError,
                submissionConfirmationPasswordError: this.state.submissionConfirmationPassword.length <= 0 ? "Confirmation password cannot be blank." : this.state.submissionConfirmationPasswordError,
                submissionFirstNameError: this.state.submissionFirstName.length <= 0 ? "First name cannot be blank." : this.state.submissionFirstNameError,
                submissionLastNameError: this.state.submissionLastName.length <= 0 ? "Last name cannot be blank." : this.state.submissionLastNameError,
                submissionMobilePhoneError: this.state.submissionMobilePhone.length <= 0 ? "Mobile phone cannot be blank." : this.state.submissionMobilePhoneError
            });
        }
    }

    isFormReadyToSubmit() {
        return this.state.submissionEmailError === "OK" &&
            this.state.submissionPasswordError === "OK" &&
            this.state.submissionConfirmationPasswordError === "OK" &&
            this.state.submissionFirstNameError === "OK" &&
            this.state.submissionLastNameError === "OK" &&
            this.state.submissionMobilePhoneError === "OK" &&
            (this.state.submissionHomePhoneError === "OK" || this.state.submissionHomePhoneError === "Optional") &&
            (this.state.submissionWorkPhoneError === "OK" || this.state.submissionWorkPhoneError === "Optional") &&
            (this.state.submissionOtherPhoneError === "OK" || this.state.submissionOtherPhoneError === "Optional");
    }

    render() {
        let message = "Fill out the form to sign up!";
        if (this.props.err) {
            message = `Error creating user: ${ (this.props.err) }`;
        } else if (this.props.newUser) {
            message = `Hello, ${ this.props.newUser.firstName }! User creation successful.`;
        }
        let preferredContactMethodOptions = this.state.submissionPreferredContactMethodOptions.map(method =>
            <option key={ method }>{ method }</option>
        );
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
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for={ "newUserMobilePhone" }>Mobile Phone</Label>
                            <Input value={ this.state.submissionMobilePhone } onChange={ (e) => this.handleSubmissionMobilePhoneChange(e) } valid={ this.state.submissionMobilePhoneError === "OK" } name={ "newUserMobilePhone" } id={ "newUserMobilePhone" } placeholder={ "Please enter your mobile phone number" } className={ "newUserMobilePhone" } />
                            <FormText className={ "newUserMobilePhoneText" } >{ this.state.submissionMobilePhoneError }</FormText>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for={ "newUserHomePhone" }>Home Phone</Label>
                            <Input value={ this.state.submissionHomePhone } onChange={ (e) => this.handleSubmissionHomePhoneChange(e) } valid={ this.state.submissionHomePhoneError === "OK" } name={ "newUserHomePhone" } id={ "newUserHomePhone" } placeholder={ "Please enter your home phone number" } className={ "newUserHomePhone" } />
                            <FormText className={ "newUserHomePhoneText" } >{ this.state.submissionHomePhoneError }</FormText>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for={ "newUserWorkPhone" }>Work Phone</Label>
                            <Input value={ this.state.submissionWorkPhone } onChange={ (e) => this.handleSubmissionWorkPhoneChange(e) } valid={ this.state.submissionWorkPhoneError === "OK" } name={ "newUserWorkPhone" } id={ "newUserWorkPhone" } placeholder={ "Please enter your work phone number" } className={ "newUserWorkPhone" } />
                            <FormText className={ "newUserWorkPhoneText" } >{ this.state.submissionWorkPhoneError }</FormText>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for={ "newUserOtherPhone" }>Other Phone</Label>
                            <Input value={ this.state.submissionOtherPhone } onChange={ (e) => this.handleSubmissionOtherPhoneChange(e) } valid={ this.state.submissionOtherPhoneError === "OK" } name={ "newUserOtherPhone" } id={ "newUserOtherPhone" } placeholder={ "Please enter a miscellaneous phone number" } className={ "newUserOtherPhone" } />
                            <FormText className={ "newUserOtherPhoneText" } >{ this.state.submissionOtherPhoneError }</FormText>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <FormGroup>
                        <Label for={ "newUserPreferredContactMethod" }>Preferred Contact Method</Label>
                        <Input value={ this.state.submissionPreferredContactMethod } onChange={ (e) => this.setState({ submissionPreferredContactMethod: e.target.value }) } className={ "newUserPreferredContactMethod" } type={ "select" } name={ "newUserPreferredContactMethod" } id={ "newUserPreferredContactMethod" }>
                            { preferredContactMethodOptions }
                        </Input>
                    </FormGroup>
                </Row>
                <Button color={ "primary" }>
                    Submit
                </Button>
            </Form>
        );
    }
}

export default SignUp;
