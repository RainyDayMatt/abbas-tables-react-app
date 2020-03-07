export const FETCH_MONTH_MEAL_SUMMARY_REQUEST = "FETCH_MONTH_MEAL_SUMMARY_REQUEST";
export const FETCH_MONTH_MEAL_SUMMARY_SUCCESS = "FETCH_MONTH_MEAL_SUMMARY_SUCCESS";
export const FETCH_MONTH_MEAL_SUMMARY_FAILURE = "FETCH_MONTH_MEAL_SUMMARY_FAILURE";

export const FETCH_YEAR_MEAL_SUMMARY_REQUEST = "FETCH_YEAR_MEAL_SUMMARY_REQUEST";
export const FETCH_YEAR_MEAL_SUMMARY_SUCCESS = "FETCH_YEAR_MEAL_SUMMARY_SUCCESS";
export const FETCH_YEAR_MEAL_SUMMARY_FAILURE = "FETCH_YEAR_MEAL_SUMMARY_FAILURE";

function fetchMonthMealSummaryRequest(year, month) {
    return {
        type: FETCH_MONTH_MEAL_SUMMARY_REQUEST,
        year,
        month
    }
}

function fetchMonthMealSummarySuccess(monthSummary, receivedAt = Date.now()) {
    return {
        type: FETCH_MONTH_MEAL_SUMMARY_SUCCESS,
        monthSummary,
        receivedAt
    }
}

function fetchMonthMealSummaryFailure(err, receivedAt = Date.now()) {
    return {
        type: FETCH_MONTH_MEAL_SUMMARY_FAILURE,
        err,
        receivedAt
    }
}

export function fetchMonthMealSummary(year, month, forcedTime = undefined) {
    return (dispatch) => {
        dispatch(fetchMonthMealSummaryRequest(year, month));
        let apiRoot = "http://localhost:3000";
        if (process.env.REACT_APP_API_ROOT) {
            apiRoot = process.env.REACT_APP_API_ROOT;
        }
        return fetch(`${ apiRoot }/servingSummaries/year/${ year }/month/${ month }`, {
            method: "GET"
        })
            .then(response => response.json())
            .then(json => {
                if (json.err) {
                    dispatch(fetchMonthMealSummaryFailure(json.err, forcedTime))
                } else {
                    dispatch(fetchMonthMealSummarySuccess(json.monthSummary, forcedTime))
                }
            });
    }
}

function fetchYearMealSummaryRequest(year) {
    return {
        type: FETCH_YEAR_MEAL_SUMMARY_REQUEST,
        year
    }
}

function fetchYearMealSummarySuccess(yearSummary, receivedAt = Date.now()) {
    return {
        type: FETCH_YEAR_MEAL_SUMMARY_SUCCESS,
        yearSummary,
        receivedAt
    }
}

function fetchYearMealSummaryFailure(err, receivedAt = Date.now()) {
    return {
        type: FETCH_YEAR_MEAL_SUMMARY_FAILURE,
        err,
        receivedAt
    }
}

export function fetchYearMealSummary(year, forcedTime = undefined) {
    return (dispatch) => {
        dispatch(fetchYearMealSummaryRequest(year));
        let apiRoot = "http://localhost:3000";
        if (process.env.REACT_APP_API_ROOT) {
            apiRoot = process.env.REACT_APP_API_ROOT;
        }
        return fetch(`${ apiRoot }/servingSummaries/year/${ year }`, {
            method: "GET"
        })
            .then(response => response.json())
            .then(json => {
                if (json.err) {
                    dispatch(fetchYearMealSummaryFailure(json.err, forcedTime))
                } else {
                    dispatch(fetchYearMealSummarySuccess(json.yearSummary, forcedTime))
                }
            });
    }
}
