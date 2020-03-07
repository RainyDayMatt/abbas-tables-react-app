export const FETCH_PROPERTY_REQUEST = "FETCH_PROPERTY_REQUEST";
export const FETCH_PROPERTY_SUCCESS = "FETCH_PROPERTY_SUCCESS";
export const FETCH_PROPERTY_FAILURE = "FETCH_PROPERTY_FAILURE";

function fetchPropertyRequest(propertyKey) {
    return {
        type: FETCH_PROPERTY_REQUEST,
        propertyKey
    }
}

function fetchPropertySuccess(property, receivedAt = Date.now()) {
    return {
        type: FETCH_PROPERTY_SUCCESS,
        property,
        receivedAt
    }
}

function fetchPropertyFailure(err, receivedAt = Date.now()) {
    return {
        type: FETCH_PROPERTY_FAILURE,
        err,
        receivedAt
    }
}

export function fetchProperty(propertyKey, forcedTime = undefined) {
    return (dispatch) => {
        dispatch(fetchPropertyRequest(propertyKey));
        let apiRoot = "http://localhost:3000";
        if (process.env.REACT_APP_API_ROOT) {
            apiRoot = process.env.REACT_APP_API_ROOT;
        }
        return fetch(`${ apiRoot }/properties/${ propertyKey }`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(json => {
                if (json.err) {
                    dispatch(fetchPropertyFailure(json.err, forcedTime))
                } else {
                    dispatch(fetchPropertySuccess(json.property, forcedTime))
                }
            });
    }
}
