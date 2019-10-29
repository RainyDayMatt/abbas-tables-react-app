export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

function createUserRequest(userCreationForm) {
    return {
        type: CREATE_USER_REQUEST,
        userCreationForm
    }
}

function createUserSuccess(newUser, receivedAt = Date.now()) {
    return {
        type: CREATE_USER_SUCCESS,
        newUser,
        receivedAt
    }
}

function createUserFailure(err, receivedAt = Date.now()) {
    return {
        type: CREATE_USER_FAILURE,
        err,
        receivedAt
    }
}

export function createUser(userCreationForm, forcedTime = undefined) {
    return (dispatch) => {
        dispatch(createUserRequest(userCreationForm));
        let apiRoot = "http://localhost:3000";
        if (process.env.REACT_APP_API_ROOT) {
            apiRoot = process.env.REACT_APP_API_ROOT;
        }
        return fetch(`${apiRoot}/users`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userCreationForm)
        })
            .then(response => response.json())
            .then(json => {
                if (json.err) {
                    dispatch(createUserFailure(json.err, forcedTime))
                } else {
                    dispatch(createUserSuccess(json.newUser, forcedTime))
                }
            });
    }
}
