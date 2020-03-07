import * as propertyFetchActions from "../../actions/common/PropertyFetchActions";
import * as infoBarActions from "../../actions/infoBar/InfoBarActions";
import * as infoBarReducers from "./InfoBarReducers";

describe("Info bar reducers : ", () => {

    describe("Links reducer : ", () => {
        const donateKey = "donateLink";
        const donateValue = "www.donate.com";
        const donateErr = "No such property.";
        const linksInitialState = {
            isFetching: false,
            err: null,
            receivedAt: null
        };
        const fetchPropertyRequestState = {
            isFetching: true,
            err: null,
            receivedAt: null
        };
        const fetchPropertySuccessState = {
            isFetching: false,
            err: null,
            receivedAt: 1
        };
        it("Should return the initial state.", () => {
            expect(infoBarReducers.links(undefined, {})).toEqual(linksInitialState);
        });
        it("Should handle FETCH_PROPERTY_REQUEST.", () => {
            expect(infoBarReducers.links(undefined, {
                type: propertyFetchActions.FETCH_PROPERTY_REQUEST,
                propertyKey: donateKey
            })).toEqual(fetchPropertyRequestState);
        });
        it("Should handle FETCH_PROPERTY_SUCCESS.", () => {
            expect(infoBarReducers.links(fetchPropertyRequestState, {
                type: propertyFetchActions.FETCH_PROPERTY_SUCCESS,
                property: donateValue,
                receivedAt: 1
            })).toEqual(fetchPropertySuccessState);
        });
        it("Should handle FETCH_PROPERTY_FAILURE.", () => {
            expect(infoBarReducers.links(fetchPropertyRequestState, {
                type: propertyFetchActions.FETCH_PROPERTY_FAILURE,
                err: donateErr,
                receivedAt: 1
            })).toEqual({
                isFetching: false,
                err: donateErr,
                receivedAt: 1
            });
        });
    });

    describe("Month summary reducer : ", () => {
        const year = 2020;
        const month = 1;
        const monthSummary = {
            totalMeals: 45
        };
        const err = "Invalid month.";
        const monthMealSummaryInitialState = {
            isFetching: false,
            totalMeals: null,
            err: null,
            receivedAt: null
        };
        const fetchMonthMealSummaryRequestState = {
            isFetching: true,
            totalMeals: null,
            err: null,
            receivedAt: null
        };
        const fetchMonthMealSummarySuccessState = {
            isFetching: false,
            totalMeals: monthSummary.totalMeals,
            err: null,
            receivedAt: 1
        };
        it("Should return the initial state.", () => {
            expect(infoBarReducers.monthSummary(undefined, {})).toEqual(monthMealSummaryInitialState);
        });
        it("Should handle FETCH_MONTH_MEAL_SUMMARY_REQUEST.", () => {
            expect(infoBarReducers.monthSummary(undefined, {
                type: infoBarActions.FETCH_MONTH_MEAL_SUMMARY_REQUEST,
                year,
                month
            })).toEqual(fetchMonthMealSummaryRequestState);
        });
        it("Should handle FETCH_MONTH_MEAL_SUMMARY_SUCCESS.", () => {
            expect(infoBarReducers.monthSummary(fetchMonthMealSummaryRequestState, {
                type: infoBarActions.FETCH_MONTH_MEAL_SUMMARY_SUCCESS,
                monthSummary,
                receivedAt: 1
            })).toEqual(fetchMonthMealSummarySuccessState);
        });
        it("Should handle FETCH_MONTH_MEAL_SUMMARY_FAILURE.", () => {
            expect(infoBarReducers.monthSummary(fetchMonthMealSummaryRequestState, {
                type: infoBarActions.FETCH_MONTH_MEAL_SUMMARY_FAILURE,
                err,
                receivedAt: 1
            })).toEqual({
                isFetching: false,
                totalMeals: null,
                err,
                receivedAt: 1
            });
        });
    });

    describe("Year summary reducer : ", () => {
        const year = 2020;
        const yearSummary = {
            totalMeals: 225
        };
        const err = "Invalid year.";
        const yearMealSummaryInitialState = {
            isFetching: false,
            totalMeals: null,
            err: null,
            receivedAt: null
        };
        const fetchYearMealSummaryRequestState = {
            isFetching: true,
            totalMeals: null,
            err: null,
            receivedAt: null
        };
        const fetchYearMealSummarySuccessState = {
            isFetching: false,
            totalMeals: yearSummary.totalMeals,
            err: null,
            receivedAt: 1
        };
        it("Should return the initial state.", () => {
            expect(infoBarReducers.yearSummary(undefined, {})).toEqual(yearMealSummaryInitialState);
        });
        it("Should handle FETCH_YEAR_MEAL_SUMMARY_REQUEST.", () => {
            expect(infoBarReducers.yearSummary(undefined, {
                type: infoBarActions.FETCH_YEAR_MEAL_SUMMARY_REQUEST,
                year
            })).toEqual(fetchYearMealSummaryRequestState);
        });
        it("Should handle FETCH_YEAR_MEAL_SUMMARY_SUCCESS.", () => {
            expect(infoBarReducers.yearSummary(fetchYearMealSummaryRequestState, {
                type: infoBarActions.FETCH_YEAR_MEAL_SUMMARY_SUCCESS,
                yearSummary,
                receivedAt: 1
            })).toEqual(fetchYearMealSummarySuccessState);
        });
        it("Should handle FETCH_YEAR_MEAL_SUMMARY_FAILURE.", () => {
            expect(infoBarReducers.yearSummary(fetchYearMealSummaryRequestState, {
                type: infoBarActions.FETCH_YEAR_MEAL_SUMMARY_FAILURE,
                err,
                receivedAt: 1
            })).toEqual({
                isFetching: false,
                totalMeals: null,
                err,
                receivedAt: 1
            });
        });
    });
});
