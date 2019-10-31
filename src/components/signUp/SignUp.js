import React, { Component } from "react";

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
        this.setState({ submissionConfirmationPassword: e.target.value });
    }

    handleSubmissionFirstNameChange(e) {
        this.setState({ submissionFirstName: e.target.value });
    }

    handleSubmissionLastNameChange(e) {
        this.setState({ submissionLastName: e.target.value });
    }

    render() {
        return (
            <div>Sign Up</div>
        );
    }
}

export default SignUp;
