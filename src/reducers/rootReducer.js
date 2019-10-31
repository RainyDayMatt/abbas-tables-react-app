import { combineReducers } from "redux";
import { authentication } from "./navbar/NavbarReducers";
import { signUp } from "./signUp/SignUpReducers";

export default combineReducers({
    authentication,
    signUp
});
