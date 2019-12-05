import { connect } from "react-redux";

import { createUser } from "../../actions/signUp/SignUpActions";
import SignUp from "../../components/signUp/SignUp";

const mapStateToProps = (state) => {
    return state.signUp;
};

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (userCreationForm) => {
            dispatch(createUser(userCreationForm));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
