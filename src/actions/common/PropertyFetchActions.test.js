import * as propertyFetchActions from "./PropertyFetchActions";

import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Property fetch actions : ", () => {

    describe("Asynchronous actions : ", () => {
        const propertyBase = "http://localhost:3000/properties";
        const propertyKey = "volunteerLink";
        afterEach(() => {
            fetchMock.restore();
        });
        it("Should create a FETCH_PROPERTY_SUCCESS action when property fetch completes successfully.", () => {
            const property = {
                id: 1,
                key: propertyKey,
                value: "www.abbastables.org"
            };
            fetchMock.getOnce(`${ propertyBase }/${ propertyKey }`, {
                property
            });
            const expectedActions = [
                {
                    type: propertyFetchActions.FETCH_PROPERTY_REQUEST,
                    propertyKey
                },
                {
                    type: propertyFetchActions.FETCH_PROPERTY_SUCCESS,
                    property,
                    receivedAt: 1
                }
            ];
            const store = mockStore({ property: null });
            return store.dispatch(propertyFetchActions.fetchProperty(propertyKey, 1))
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                });
        });
        it("Should create a FETCH_PROPERTY_FAILURE action when property fetch completes unsuccessfully.", () => {
            const err = "Property with that key doesn't exist.";
            fetchMock.getOnce(`${ propertyBase }/${ propertyKey }`, {
                err
            });
            const expectedActions = [
                {
                    type: propertyFetchActions.FETCH_PROPERTY_REQUEST,
                    propertyKey
                },
                {
                    type: propertyFetchActions.FETCH_PROPERTY_FAILURE,
                    err,
                    receivedAt: 1
                }
            ];
            const store = mockStore({ err: null });
            return store.dispatch(propertyFetchActions.fetchProperty(propertyKey, 1))
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                });
        });
    });
});
