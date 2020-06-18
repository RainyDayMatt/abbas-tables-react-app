import {
    FETCH_PROPERTY_REQUEST,
    FETCH_PROPERTY_SUCCESS,
    FETCH_PROPERTY_FAILURE
} from "../../actions/common/PropertyFetchActions";
import {
    FETCH_MONTH_MEAL_SUMMARY_REQUEST,
    FETCH_MONTH_MEAL_SUMMARY_SUCCESS,
    FETCH_MONTH_MEAL_SUMMARY_FAILURE,
    FETCH_YEAR_MEAL_SUMMARY_REQUEST,
    FETCH_YEAR_MEAL_SUMMARY_SUCCESS,
    FETCH_YEAR_MEAL_SUMMARY_FAILURE
} from "../../actions/infoBar/InfoBarActions";

const linksInitialState = {
    isFetching: false,
    err: null,
    receivedAt: null
};

export function links (state = linksInitialState, action) {
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

const monthSummaryInitialState = {
    isFetching: false,
    totalMeals: null,
    err: null,
    receivedAt: null
};

export function monthSummary (state = monthSummaryInitialState, action) {
    switch (action.type) {
        case FETCH_MONTH_MEAL_SUMMARY_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case FETCH_MONTH_MEAL_SUMMARY_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                totalMeals: action.monthSummary.totalMeals,
                err: null,
                receivedAt: action.receivedAt
            });
        case FETCH_MONTH_MEAL_SUMMARY_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                err: action.err,
                receivedAt: action.receivedAt
            });
        default:
            return state;
    }
}

const yearSummaryInitialState = {
    isFetching: false,
    totalMeals: null,
    err: null,
    receivedAt: null
};

export function yearSummary (state = yearSummaryInitialState, action) {
    switch (action.type) {
        case FETCH_YEAR_MEAL_SUMMARY_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case FETCH_YEAR_MEAL_SUMMARY_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                totalMeals: action.yearSummary.totalMeals,
                err: null,
                receivedAt: action.receivedAt
            });
        case FETCH_YEAR_MEAL_SUMMARY_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                err: action.err,
                receivedAt: action.receivedAt
            });
        default:
            return state;
    }
}
