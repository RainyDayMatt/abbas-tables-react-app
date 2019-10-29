import React, { Component } from "react";
import Form from "../../../node_modules/react-bootstrap/Form";
import Button from "../../../node_modules/react-bootstrap/Button";

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
        this.setState({ submissionEmail: e.target.value });
    }

    handleSubmissionPasswordChange(e) {
        this.setState({ submissionPassword: e.target.value });
    }

    handleSubmissionConfirmationPasswordChange(e) {
        this.setState({ submissionPassword: e.target.value });
    }

    handleSubmissionFirstNameChange(e) {
        this.setState({ submissionFirstName: e.target.value });
    }

    handleSubmissionLastNameChange(e) {
        this.setState({ submissionLastName: e.target.value });
    }

    render() {
        return (
            <Form className={ "userSignUpForm" }>
                <Form.Group controlId={ "email" } >
                    <Form.Control onChange={ (e) => this.handleSubmissionEmailChange(e) } placeholder={ "Email" } type={ "email" } value={ this.state.submissionEmail } />
                </Form.Group>
                <Form.Group controlId={ "password" } >
                    <Form.Control onChange={ (e) => this.handleSubmissionPasswordChange(e) } placeholder={ "Password" } type={ "password" } value={ this.state.submissionPassword } />
                </Form.Group>
                <Button type={ "submit" } variant={ "primary" } >
                    Sign In
                </Button>
            </Form>
        );
    }
}

export default SignUp;
