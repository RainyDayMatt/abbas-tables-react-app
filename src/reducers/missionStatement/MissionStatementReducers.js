import {
    FETCH_PROPERTY_REQUEST,
    FETCH_PROPERTY_SUCCESS,
    FETCH_PROPERTY_FAILURE
} from "../../actions/common/PropertyFetchActions";

const missionStatementPropertiesInitialState = {
    isFetching: false,
    err: null,
    receivedAt: null
};

export function missionStatementProperties (state = missionStatementPropertiesInitialState, action) {
    switch (action.type) {
        case FETCH_PROPERTY_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case FETCH_PROPERTY_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                [ action.property.key ]: action.property.value,
                err: null,
                receivedAt: action.receivedAt
            });
        case FETCH_PROPERTY_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                err: action.err,
                receivedAt: action.receivedAt
            });
        default:
            return state;
    }
}
