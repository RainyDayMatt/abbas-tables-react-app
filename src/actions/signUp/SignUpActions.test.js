import * as signUpActions from "./SignUpActions";

import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Signup actions : ", () => {

    describe("Asynchronous actions : ", () => {
        const userCreationURL = "http://localhost:3000/users";
        const userCreationForm = {
            email: "shepard@n7.gov",
            password: "M1nerals21",
            confirmationPassword: "M1nerals21",
            firstName: "John",
            lastName: "Shepard"
        };
        afterEach(() => {
            fetchMock.restore();
        });
        it("Should create a CREATE_USER_SUCCESS action when user creation completes successfully.", () => {
            const newUser = {
                id: 1,
                email: "shepard@n7.gov",
                password: "M1nerals21",
                firstName: "John",
                lastName: "Shepard"
            };
            fetchMock.postOnce(userCreationURL, {
                headers: { "content-type": "application/json" },
                newUser
            });
            const expectedActions = [
                {
                    type: signUpActions.CREATE_USER_REQUEST,
                    userCreationForm
                },
                {
                    type: signUpActions.CREATE_USER_SUCCESS,
                    newUser,
                    receivedAt: 1
                }
            ];
            const store = mockStore({ newUser: null });
            return store.dispatch(signUpActions.createUser(userCreationForm, 1))
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                });
        });
        it("Should create a CREATE_USER_FAILURE action when user creation completes unsuccessfully.", () => {
            const err = "Duplicate email.";
            fetchMock.postOnce(userCreationURL, {
                headers: { "content-type": "application/json" },
                err
            });
            const expectedActions = [
                {
                    type: signUpActions.CREATE_USER_REQUEST,
                    userCreationForm
                },
                {
                    type: signUpActions.CREATE_USER_FAILURE,
                    err,
                    receivedAt: 1
                }
            ];
            const store = mockStore({ err: null });
            return store.dispatch(signUpActions.createUser(userCreationForm, 1))
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                });
        });
    });
});
