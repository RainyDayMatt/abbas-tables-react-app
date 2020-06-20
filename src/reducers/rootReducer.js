import { combineReducers } from "redux";
import { authentication } from "./navbar/NavbarReducers";
import { signUp } from "./signUp/SignUpReducers";
import { links, monthSummary, yearSummary } from "./infoBar/InfoBarReducers";
import { missionStatementProperties } from "./missionStatement/MissionStatementReducers";
import { meetTheStaffProperties } from "./meetTheStaff/MeetTheStaffReducers";

export default combineReducers({
    authentication,
    signUp,
    links,
    monthSummary,
    yearSummary,
    missionStatementProperties,
    meetTheStaffProperties
});
