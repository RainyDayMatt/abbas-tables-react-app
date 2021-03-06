import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SignUp from "./SignUp";

Enzyme.configure({ adapter: new Adapter() });

function fillOutFormsCorrectly(inputs) {
    inputs.newUserEmail.simulate("change", { target: { value: "shepard@n7.gov" } });
    inputs.newUserPassword.simulate("change", { target: { value: "M1nerals21" } });
    inputs.newUserConfirmationPassword.simulate("change", { target: { value: "M1nerals21" } });
    inputs.newUserFirstName.simulate("change", { target: { value: "John" } });
    inputs.newUserLastName.simulate("change", { target: { value: "Shepard" } });
    inputs.newUserMobilePhone.simulate("change", { target: { value: "5804361776" } });
}

function freshSetup() {
    const props = {
        createUser: jest.fn()
    };
    const enzymeWrapper = shallow(<SignUp {...props} />);
    const inputs = {
        newUserEmail: enzymeWrapper.find(".newUserEmail"),
        newUserPassword: enzymeWrapper.find(".newUserPassword"),
        newUserConfirmationPassword: enzymeWrapper.find(".newUserConfirmationPassword"),
        newUserFirstName: enzymeWrapper.find(".newUserFirstName"),
        newUserLastName: enzymeWrapper.find(".newUserLastName"),
        newUserMobilePhone: enzymeWrapper.find(".newUserMobilePhone"),
        newUserHomePhone: enzymeWrapper.find(".newUserHomePhone"),
        newUserWorkPhone: enzymeWrapper.find(".newUserWorkPhone"),
        newUserOtherPhone: enzymeWrapper.find(".newUserOtherPhone"),
        userCreationForm: enzymeWrapper.find(".userCreationForm")
    };
    const inputLabels = {
        newUserEmailText: enzymeWrapper.find(".newUserEmailText"),
        newUserPasswordText: enzymeWrapper.find(".newUserPasswordText"),
        newUserConfirmationPasswordText: enzymeWrapper.find(".newUserConfirmationPasswordText"),
        newUserFirstNameText: enzymeWrapper.find(".newUserFirstNameText"),
        newUserLastNameText: enzymeWrapper.find(".newUserLastNameText"),
        newUserMobilePhoneText: enzymeWrapper.find(".newUserMobilePhoneText"),
        newUserHomePhoneText: enzymeWrapper.find(".newUserHomePhoneText"),
        newUserWorkPhoneText: enzymeWrapper.find(".newUserWorkPhoneText"),
        newUserOtherPhoneText: enzymeWrapper.find(".newUserOtherPhoneText")
    };
    return { props, enzymeWrapper, inputs, inputLabels };
}

const formSubmitEvent = {
    preventDefault: () => true
};

describe("SignUp component : ", () => {

    describe("User sign-up behavior.", () => {
        it("Should not call createUser when sign-up form is submitted if email alone is unacceptable.", () => {
            const { props, enzymeWrapper, inputs, inputLabels } = freshSetup();
            fillOutFormsCorrectly(inputs);
            inputs.newUserEmail.simulate("change", { target: { value: "" } });
            inputs.userCreationForm.simulate("submit", formSubmitEvent);
            expect(props.createUser.mock.calls.length).toEqual(0);
        });
        it("Should not call createUser when sign-up form is submitted if password alone is unacceptable.", () => {
            const { props, enzymeWrapper, inputs, inputLabels } = freshSetup();
            fillOutFormsCorrectly(inputs);
            inputs.newUserPassword.simulate("change", { target: { value: "" } });
            inputs.userCreationForm.simulate("submit", formSubmitEvent);
            expect(props.createUser.mock.calls.length).toEqual(0);
        });
        it("Should not call createUser when sign-up form is submitted if confirmation password alone is unacceptable.", () => {
            const { props, enzymeWrapper, inputs, inputLabels } = freshSetup();
            fillOutFormsCorrectly(inputs);
            inputs.newUserConfirmationPassword.simulate("change", { target: { value: "" } });
            inputs.userCreationForm.simulate("submit", formSubmitEvent);
            expect(props.createUser.mock.calls.length).toEqual(0);
        });
        it("Should not call createUser when sign-up form is submitted if first name alone is unacceptable.", () => {
            const { props, enzymeWrapper, inputs, inputLabels } = freshSetup();
            fillOutFormsCorrectly(inputs);
            inputs.newUserFirstName.simulate("change", { target: { value: "" } });
            inputs.userCreationForm.simulate("submit", formSubmitEvent);
            expect(props.createUser.mock.calls.length).toEqual(0);
        });
        it("Should not call createUser when sign-up form is submitted if last name alone is unacceptable.", () => {
            const { props, enzymeWrapper, inputs, inputLabels } = freshSetup();
            fillOutFormsCorrectly(inputs);
            inputs.newUserLastName.simulate("change", { target: { value: "" } });
            inputs.userCreationForm.simulate("submit", formSubmitEvent);
            expect(props.createUser.mock.calls.length).toEqual(0);
        });
        it("Should not call createUser when sign-up form is submitted if mobile phone alone is unacceptable.", () => {
            const { props, enzymeWrapper, inputs, inputLabels } = freshSetup();
            fillOutFormsCorrectly(inputs);
            inputs.newUserMobilePhone.simulate("change", { target: { value: "" } });
            inputs.userCreationForm.simulate("submit", formSubmitEvent);
            expect(props.createUser.mock.calls.length).toEqual(0);
        });
        it("Should not call createUser when sign-up form is submitted if home phone alone is unacceptable.", () => {
            const { props, enzymeWrapper, inputs, inputLabels } = freshSetup();
            fillOutFormsCorrectly(inputs);
            inputs.newUserHomePhone.simulate("change", { target: { value: "alphaBreak" } });
            inputs.userCreationForm.simulate("submit", formSubmitEvent);
            expect(props.createUser.mock.calls.length).toEqual(0);
        });
        it("Should not call createUser when sign-up form is submitted if work phone alone is unacceptable.", () => {
            const { props, enzymeWrapper, inputs, inputLabels } = freshSetup();
            fillOutFormsCorrectly(inputs);
            inputs.newUserWorkPhone.simulate("change", { target: { value: "alphaBreak" } });
            inputs.userCreationForm.simulate("submit", formSubmitEvent);
            expect(props.createUser.mock.calls.length).toEqual(0);
        });
        it("Should not call createUser when sign-up form is submitted if other phone alone is unacceptable.", () => {
            const { props, enzymeWrapper, inputs, inputLabels } = freshSetup();
            fillOutFormsCorrectly(inputs);
            inputs.newUserOtherPhone.simulate("change", { target: { value: "alphaBreak" } });
            inputs.userCreationForm.simulate("submit", formSubmitEvent);
            expect(props.createUser.mock.calls.length).toEqual(0);
        });
        it("Should call createUser when sign-up form is submitted if no input value is unacceptable.", () => {
            const { props, enzymeWrapper, inputs, inputLabels } = freshSetup();
            fillOutFormsCorrectly(inputs);
            inputs.userCreationForm.simulate("submit", formSubmitEvent);
            expect(props.createUser.mock.calls.length).toEqual(1);
        });
    });
});
