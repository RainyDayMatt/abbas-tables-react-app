import {
    SUBMIT_USER_SIGN_OUT_FORM,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from "../../actions/navbar/NavbarActions";

const authenticationInitialState = {
    isFetching: false,
    user: null,
    err: null,
    receivedAt: null
};

export function authentication (state = authenticationInitialState, action) {
    switch (action.type) {
        case SUBMIT_USER_SIGN_OUT_FORM:
            return authenticationInitialState;
        case FETCH_USER_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case FETCH_USER_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                user: action.user,
                err: null,
                receivedAt: action.receivedAt
            });
        case FETCH_USER_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                err: action.err,
                receivedAt: action.receivedAt
            });
        default:
            return state;
    }
}
