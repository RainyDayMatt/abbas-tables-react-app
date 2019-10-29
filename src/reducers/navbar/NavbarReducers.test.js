import * as navbarActions from "../../actions/navbar/NavbarActions";
import * as navbarReducers from "./NavbarReducers";

describe("Navbar reducers : ", () => {

    describe("Authentication reducer : ", () => {
        const userSignInForm = {
            email: "shepard@n7.gov",
            password: "M1nerals21"
        };
        const user = {
            id: 1,
            email: "shepard@n7.gov",
            password: "M1nerals21"
        };
        const err = "My favorite error on the Citadel.";
        const authenticationInitialState = {
            isFetching: false,
            user: null,
            err: null,
            receivedAt: null
        };
        const fetchUserRequestState = {
            isFetching: true,
            user: null,
            err: null,
            receivedAt: null
        };
        const fetchUserSuccessState = {
            isFetching: false,
            user,
            err: null,
            receivedAt: 1
        };
        it("Should return the initial state.", () => {
            expect(navbarReducers.authentication(undefined, {})).toEqual(authenticationInitialState);
        });
        it("Should handle SUBMIT_USER_SIGN_OUT_FORM.", () => {
            expect(navbarReducers.authentication(fetchUserSuccessState, {
                type: navbarActions.SUBMIT_USER_SIGN_OUT_FORM
            })).toEqual(authenticationInitialState);
        });
        it("Should handle FETCH_USER_REQUEST.", () => {
            expect(navbarReducers.authentication(undefined, {
                type: navbarActions.FETCH_USER_REQUEST,
                userSignInForm
            })).toEqual(fetchUserRequestState);
        });
        it("Should handle FETCH_USER_SUCCESS.", () => {
            expect(navbarReducers.authentication(fetchUserRequestState, {
                type: navbarActions.FETCH_USER_SUCCESS,
                user,
                receivedAt: 1
            })).toEqual(fetchUserSuccessState);
        });
        it("Should handle FETCH_USER_FAILURE.", () => {
            expect(navbarReducers.authentication(fetchUserRequestState, {
                type: navbarActions.FETCH_USER_FAILURE,
                err,
                receivedAt: 1
            })).toEqual({
                isFetching: false,
                user: null,
                err,
                receivedAt: 1
            });
        });
    });
});
