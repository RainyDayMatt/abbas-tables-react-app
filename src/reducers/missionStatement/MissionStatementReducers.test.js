import * as propertyFetchActions from "../../actions/common/PropertyFetchActions";
import * as missionStatementReducers from "./MissionStatementReducers";

describe("About Us reducers : ", () => {

    describe("About Us properties : ", () => {
        const missionStatementKey = "missionStatement";
        const missionStatementValue = "Lorem ipsum... feed people.";
        const missionStatementErr = "No such property.";
        const missionStatementPropertiesInitialState = {
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
            expect(missionStatementReducers.missionStatementProperties(undefined, {})).toEqual(missionStatementPropertiesInitialState);
        });
        it("Should handle FETCH_PROPERTY_REQUEST.", () => {
            expect(missionStatementReducers.missionStatementProperties(undefined, {
                type: propertyFetchActions.FETCH_PROPERTY_REQUEST,
                propertyKey: missionStatementKey
            })).toEqual(fetchPropertyRequestState);
        });
        it("Should handle FETCH_PROPERTY_SUCCESS.", () => {
            expect(missionStatementReducers.missionStatementProperties(fetchPropertyRequestState, {
                type: propertyFetchActions.FETCH_PROPERTY_SUCCESS,
                property: missionStatementValue,
                receivedAt: 1
            })).toEqual(fetchPropertySuccessState);
        });
        it("Should handle FETCH_PROPERTY_FAILURE.", () => {
            expect(missionStatementReducers.missionStatementProperties(fetchPropertyRequestState, {
                type: propertyFetchActions.FETCH_PROPERTY_FAILURE,
                err: missionStatementErr,
                receivedAt: 1
            })).toEqual({
                isFetching: false,
                err: missionStatementErr,
                receivedAt: 1
            });
        });
    });
});
