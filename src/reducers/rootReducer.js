import { combineReducers } from "redux";
import { authentication } from "./navbar/NavbarReducers";
import { signUp } from "./signUp/SignUpReducers";
import { links, monthSummary, yearSummary } from "./infoBar/InfoBarReducers";

export default combineReducers({
    authentication,
    signUp,
    links,
    monthSummary,
    yearSummary
});
