export const SUBMIT_USER_SIGN_OUT_FORM = "SUBMIT_USER_SIGN_OUT_FORM";
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export function submitUserSignOutForm() {
    return {
        type: SUBMIT_USER_SIGN_OUT_FORM
    }
}

function fetchUserRequest(userSignInForm) {
    return {
        type: FETCH_USER_REQUEST,
        userSignInForm
    }
}

function fetchUserSuccess(user, receivedAt = Date.now()) {
    return {
        type: FETCH_USER_SUCCESS,
        user,
        receivedAt
    }
}

function fetchUserFailure(err, receivedAt = Date.now()) {
    return {
        type: FETCH_USER_FAILURE,
        err,
        receivedAt
    }
}

export function fetchUser(userSignInForm, forcedTime = undefined) {
    return (dispatch) => {
        dispatch(fetchUserRequest(userSignInForm));
        let apiRoot = "http://localhost:3000";
        if (process.env.REACT_APP_API_ROOT) {
            apiRoot = process.env.REACT_APP_API_ROOT;
        }
        return fetch(`${apiRoot}/users/sign_in`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userSignInForm)
        })
            .then(response => response.json())
            .then(json => {
                if (json.err) {
                    dispatch(fetchUserFailure(json.err, forcedTime))
                } else {
                    dispatch(fetchUserSuccess(json.user, forcedTime))
                }
            });
    }
}
