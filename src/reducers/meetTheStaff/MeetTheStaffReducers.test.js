import * as propertyFetchActions from "../../actions/common/PropertyFetchActions";
import * as meetTheStaffReducers from "./MeetTheStaffReducers";

describe("Meet The Staff reducers : ", () => {

    describe("Meet The Staff properties : ", () => {
        const meetTheStaffKey = "meetTheStaff";
        const meetTheStaffValue = "Lorem ipsum... feed people.";
        const meetTheStaffErr = "No such property.";
        const meetTheStaffPropertiesInitialState = {
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
            expect(meetTheStaffReducers.meetTheStaffProperties(undefined, {})).toEqual(meetTheStaffPropertiesInitialState);
        });
        it("Should handle FETCH_PROPERTY_REQUEST.", () => {
            expect(meetTheStaffReducers.meetTheStaffProperties(undefined, {
                type: propertyFetchActions.FETCH_PROPERTY_REQUEST,
                propertyKey: meetTheStaffKey
            })).toEqual(fetchPropertyRequestState);
        });
        it("Should handle FETCH_PROPERTY_SUCCESS.", () => {
            expect(meetTheStaffReducers.meetTheStaffProperties(fetchPropertyRequestState, {
                type: propertyFetchActions.FETCH_PROPERTY_SUCCESS,
                property: meetTheStaffValue,
                receivedAt: 1
            })).toEqual(fetchPropertySuccessState);
        });
        it("Should handle FETCH_PROPERTY_FAILURE.", () => {
            expect(meetTheStaffReducers.meetTheStaffProperties(fetchPropertyRequestState, {
                type: propertyFetchActions.FETCH_PROPERTY_FAILURE,
                err: meetTheStaffErr,
                receivedAt: 1
            })).toEqual({
                isFetching: false,
                err: meetTheStaffErr,
                receivedAt: 1
            });
        });
    });
});
