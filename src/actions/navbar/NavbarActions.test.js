import * as navbarActions from "./NavbarActions";

import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Navbar actions : ", () => {

    describe("Synchronous actions : ", () => {
        it("Should create an action to submit a user sign out form.", () => {
            const expectedAction = {
                type: navbarActions.SUBMIT_USER_SIGN_OUT_FORM
            };
            expect(navbarActions.submitUserSignOutForm()).toEqual(expectedAction);
        });
    });

    describe("Asynchronous actions : ", () => {
        const userSignInURL = "http://localhost:3000/users/sign_in";
        const userSignInForm = {
            email: "shepard@n7.gov",
            password: "M1nerals21"
        };
        afterEach(() => {
            fetchMock.restore();
        });
        it("Should create a FETCH_USER_SUCCESS action when user fetch completes successfully.", () => {
            const user = {
                id: 1,
                email: "shepard@n7.gov",
                password: "M1nerals21"
            };
            fetchMock.postOnce(userSignInURL, {
                headers: { "content-type": "application/json" },
                user
            });
            const expectedActions = [
                {
                    type: navbarActions.FETCH_USER_REQUEST,
                    userSignInForm
                },
                {
                    type: navbarActions.FETCH_USER_SUCCESS,
                    user,
                    receivedAt: 1
                }
            ];
            const store = mockStore({ user: null });
            return store.dispatch(navbarActions.fetchUser(userSignInForm, 1))
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                });
        });
        it("Should create a FETCH_USER_FAILURE action when user fetch completes unsuccessfully.", () => {
            const err = "Incorrect password.";
            fetchMock.postOnce(userSignInURL, {
                headers: { "content-type": "application/json" },
                err
            });
            const expectedActions = [
                {
                    type: navbarActions.FETCH_USER_REQUEST,
                    userSignInForm
                },
                {
                    type: navbarActions.FETCH_USER_FAILURE,
                    err,
                    receivedAt: 1
                }
            ];
            const store = mockStore({ err: null });
            return store.dispatch(navbarActions.fetchUser(userSignInForm, 1))
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                });
        });
    });
});
