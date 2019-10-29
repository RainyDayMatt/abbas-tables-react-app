import {
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE
} from "../../actions/signUp/SignUpActions";

const signUpInitialState = {
    isCreating: false,
    newUser: null,
    err: null,
    receivedAt: null
};

export function signUp (state = signUpInitialState, action) {
    switch (action.type) {
        case CREATE_USER_REQUEST:
            return Object.assign({}, state, {
                isCreating: true
            });
        case CREATE_USER_SUCCESS:
            return Object.assign({}, state, {
                isCreating: false,
                newUser: action.newUser,
                err: null,
                receivedAt: action.receivedAt
            });
        case CREATE_USER_FAILURE:
            return Object.assign({}, state, {
                isCreating: false,
                err: action.err,
                receivedAt: action.receivedAt
            });
        default:
            return state;
    }
}
