import * as signUpActions from "../../actions/signUp/SignUpActions";
import * as signUpReducers from "./SignUpReducers";

describe("Signup reducers : ", () => {

    describe("Signup reducer : ", () => {
        const newUserCreationForm = {
            email: "shepard@n7.gov",
            password: "M1nerals21",
            confirmationPassword: "M1nerals21",
            firstName: "John",
            lastName: "Shepard",
            mobilePhone: "5804361776"
        };
        const newUser = {
            id: 1,
            email: "shepard@n7.gov",
            password: "M1nerals21"
        };
        const err = "My favorite error on the Citadel.";
        const signUpInitialState = {
            isCreating: false,
            newUser: null,
            err: null,
            receivedAt: null
        };
        const createUserRequestState = {
            isCreating: true,
            newUser: null,
            err: null,
            receivedAt: null
        };
        it("Should return the initial state.", () => {
            expect(signUpReducers.signUp(undefined, {})).toEqual(signUpInitialState);
        });
        it("Should handle CREATE_USER_REQUEST.", () => {
            expect(signUpReducers.signUp(undefined, {
                type: signUpActions.CREATE_USER_REQUEST,
                newUserCreationForm
            })).toEqual(createUserRequestState);
        });
        it("Should handle CREATE_USER_SUCCESS.", () => {
            expect(signUpReducers.signUp(createUserRequestState, {
                type: signUpActions.CREATE_USER_SUCCESS,
                newUser,
                receivedAt: 1
            })).toEqual({
                isCreating: false,
                newUser,
                err: null,
                receivedAt: 1
            });
        });
        it("Should handle CREATE_USER_FAILURE.", () => {
            expect(signUpReducers.signUp(createUserRequestState, {
                type: signUpActions.CREATE_USER_FAILURE,
                err,
                receivedAt: 1
            })).toEqual({
                isCreating: false,
                newUser: null,
                err,
                receivedAt: 1
            });
        });
    });
});
