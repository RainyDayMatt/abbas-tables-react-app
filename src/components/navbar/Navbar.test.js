import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Navbar from "./Navbar";

Enzyme.configure({ adapter: new Adapter() });

function signedOutSetup() {
    const props = {
        authentication: {
            fetchUser: jest.fn(),
            submitUserSignOutForm: jest.fn()
        }
    };
    const enzymeWrapper = shallow(<Navbar {...props} />);
    const inputs = {
        userSignInEmail: enzymeWrapper.find(".userSignInEmail"),
        userSignInPassword: enzymeWrapper.find(".userSignInPassword"),
        userSignInForm: enzymeWrapper.find(".userSignInForm")
    };
    return { props, enzymeWrapper, inputs };
}

function signedInSetup() {
    const props = {
        authentication: {
            fetchUser: jest.fn(),
            submitUserSignOutForm: jest.fn(),
            user: {
                id: 1,
                email: "shepard@n7.gov",
                password: "M1nerals21"
            }
        }
    };
    const enzymeWrapper = shallow(<Navbar {...props} />);
    return { props, enzymeWrapper };
}

const formSubmitEvent = {
    preventDefault: () => true
};

describe("Navbar component : ", () => {

    describe("User sign-in behavior.", () => {
        it("Should not call fetchUser when sign-in form is submitted if email alone is an empty string.", () => {
            const { props, enzymeWrapper, inputs } = signedOutSetup();
            inputs.userSignInEmail.simulate("change", { target: { value: "" } });
            inputs.userSignInPassword.simulate("change", { target: { value: "M1nerals21" } });
            inputs.userSignInForm.simulate("submit", formSubmitEvent);
            expect(props.authentication.fetchUser.mock.calls.length).toEqual(0);
        });
        it("Should not call fetchUser when sign-in form is submitted if password alone is an empty string.", () => {
            const { props, enzymeWrapper, inputs } = signedOutSetup();
            inputs.userSignInEmail.simulate("change", { target: { value: "shepard@n7.gov" } });
            inputs.userSignInPassword.simulate("change", { target: { value: "" } });
            inputs.userSignInForm.simulate("submit", formSubmitEvent);
            expect(props.authentication.fetchUser.mock.calls.length).toEqual(0);
        });
        it("Should call fetchUser when sign-in form is submitted if neither email nor password is an empty string.", () => {
            const { props, enzymeWrapper, inputs } = signedOutSetup();
            inputs.userSignInEmail.simulate("change", { target: { value: "shepard@n7.gov" } });
            inputs.userSignInPassword.simulate("change", { target: { value: "M1nerals21" } });
            inputs.userSignInForm.simulate("submit", formSubmitEvent);
            expect(props.authentication.fetchUser.mock.calls.length).toEqual(1);
        });
    });

    describe("User sign-out behavior.", () => {
        it("Should call submitUserSignOutForm when sign-out form is submitted.", () => {
            const { props, enzymeWrapper } = signedInSetup();
            enzymeWrapper.find(".userSignOutForm").simulate("submit", formSubmitEvent);
            expect(props.authentication.submitUserSignOutForm.mock.calls.length).toEqual(1);
        });
    });
});
