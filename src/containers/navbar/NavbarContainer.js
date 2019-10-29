import { connect } from "react-redux";

import { fetchUser, submitUserSignOutForm } from "../../actions/navbar/NavbarActions";
import Navbar from "../../components/navbar/Navbar";

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userSignInForm) => {
            dispatch(fetchUser(userSignInForm));
        },
        submitUserSignOutForm: () => {
            dispatch(submitUserSignOutForm());
        }
    }
};

export default connect(
    mapDispatchToProps
)(Navbar);
