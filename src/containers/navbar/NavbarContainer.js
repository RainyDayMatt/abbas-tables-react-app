import { connect } from "react-redux";
import { fetchUser, submitUserSignOutForm } from "../../actions/navbar/NavbarActions";
import Navbar from "../../components/navbar/Navbar";

const mapStateToProps = (state) => {
    return state.authentication;
};

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
    mapStateToProps,
    mapDispatchToProps
)(Navbar);
