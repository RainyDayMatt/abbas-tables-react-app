import * as infoBarActions from "./InfoBarActions";

import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Info bar actions : ", () => {

    describe("Asynchronous actions : ", () => {

        describe("Month meal summary actions: ", () => {
            const servingSummaryBase = "http://localhost:3000/servingSummaries";
            const year = 2020;
            const month = 1;
            afterEach(() => {
                fetchMock.restore();
            });
            it("Should create a FETCH_MONTH_MEAL_SUMMARY_SUCCESS action when monthly serving summary fetch completes successfully.", () => {
                const monthSummary = {
                    id: 1,
                    year,
                    month,
                    totalMeals: 45
                };
                fetchMock.getOnce(`${ servingSummaryBase }/year/${ year }/month/${ month }`, {
                    monthSummary
                });
                const expectedActions = [
                    {
                        type: infoBarActions.FETCH_MONTH_MEAL_SUMMARY_REQUEST,
                        year,
                        month
                    },
                    {
                        type: infoBarActions.FETCH_MONTH_MEAL_SUMMARY_SUCCESS,
                        monthSummary,
                        receivedAt: 1
                    }
                ];
                const store = mockStore({servingSummary: null});
                return store.dispatch(infoBarActions.fetchMonthMealSummary(year, month, 1))
                    .then(() => {
                        expect(store.getActions()).toEqual(expectedActions);
                    });
            });
            it("Should create a FETCH_MONTH_MEAL_SUMMARY_FAILURE action when monthly serving summary fetch completes unsuccessfully.", () => {
                const err = "You died";
                fetchMock.getOnce(`${ servingSummaryBase }/year/${ year }/month/${ month }`, {
                    err
                });
                const expectedActions = [
                    {
                        type: infoBarActions.FETCH_MONTH_MEAL_SUMMARY_REQUEST,
                        year,
                        month
                    },
                    {
                        type: infoBarActions.FETCH_MONTH_MEAL_SUMMARY_FAILURE,
                        err,
                        receivedAt: 1
                    }
                ];
                const store = mockStore({servingSummary: null});
                return store.dispatch(infoBarActions.fetchMonthMealSummary(year, month, 1))
                    .then(() => {
                        expect(store.getActions()).toEqual(expectedActions);
                    });
            });
        });

        describe("Year meal summary actions: ", () => {
            const servingSummaryBase = "http://localhost:3000/servingSummaries";
            const year = 2020;
            afterEach(() => {
                fetchMock.restore();
            });
            it("Should create a FETCH_YEAR_MEAL_SUMMARY_SUCCESS action when yearly serving summary fetch completes successfully.", () => {
                const yearSummary = {
                    id: 1,
                    year,
                    totalMeals: 225
                };
                fetchMock.getOnce(`${ servingSummaryBase }/year/${ year }`, {
                    yearSummary
                });
                const expectedActions = [
                    {
                        type: infoBarActions.FETCH_YEAR_MEAL_SUMMARY_REQUEST,
                        year
                    },
                    {
                        type: infoBarActions.FETCH_YEAR_MEAL_SUMMARY_SUCCESS,
                        yearSummary,
                        receivedAt: 1
                    }
                ];
                const store = mockStore({servingSummary: null});
                return store.dispatch(infoBarActions.fetchYearMealSummary(year, 1))
                    .then(() => {
                        expect(store.getActions()).toEqual(expectedActions);
                    });
            });
            it("Should create a FETCH_YEAR_MEAL_SUMMARY_FAILURE action when yearly serving summary fetch completes unsuccessfully.", () => {
                const err = "You died";
                fetchMock.getOnce(`${ servingSummaryBase }/year/${ year }`, {
                    err
                });
                const expectedActions = [
                    {
                        type: infoBarActions.FETCH_YEAR_MEAL_SUMMARY_REQUEST,
                        year
                    },
                    {
                        type: infoBarActions.FETCH_YEAR_MEAL_SUMMARY_FAILURE,
                        err,
                        receivedAt: 1
                    }
                ];
                const store = mockStore({servingSummary: null});
                return store.dispatch(infoBarActions.fetchYearMealSummary(year, 1))
                    .then(() => {
                        expect(store.getActions()).toEqual(expectedActions);
                    });
            });
        });
    });
});
